import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc, increment, setDoc } from "firebase/firestore";
import { ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const MAX_CLICKS_PER_DAY = 5;

const ThumbsUpButton = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pop, setPop] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [remaining, setRemaining] = useState(MAX_CLICKS_PER_DAY);

  const docRef = doc(db, "counters", "thumbsUp");


  const checkLimit = () => {
    const today = new Date().toISOString().slice(0, 10);
    const stored = JSON.parse(localStorage.getItem("thumbsUp") || "{}");

    if (stored.date === today) {
      const rem = MAX_CLICKS_PER_DAY - stored.count;
      setRemaining(rem > 0 ? rem : 0);
      if (stored.count >= MAX_CLICKS_PER_DAY) {
        setDisabled(true);
        setMessage(t("thumbsUp.limitReached", { max: MAX_CLICKS_PER_DAY }));
      } else {
        setDisabled(false);
        setMessage("");
      }
    } else {
      setRemaining(MAX_CLICKS_PER_DAY);
      setDisabled(false);
      setMessage("");
    }
  };

  useEffect(() => {
    checkLimit();

    const unsubscribe = onSnapshot(docRef, async (docSnap) => {
      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      } else {
        await setDoc(docRef, { count: 0 });
        setCount(0);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleClick = async () => {
    const today = new Date().toISOString().slice(0, 10);
    const stored = JSON.parse(localStorage.getItem("thumbsUp") || "{}");
    const newCount = stored.date === today ? stored.count + 1 : 1;

    if (newCount > MAX_CLICKS_PER_DAY) {
      setDisabled(true);
      setMessage(t("thumbsUp.limitReached", { max: MAX_CLICKS_PER_DAY }));
      return;
    }

    // mise a jour localStorage
    localStorage.setItem("thumbsUp", JSON.stringify({ date: today, count: newCount }));

    setPop(true);
    setTimeout(() => setPop(false), 300);

    await updateDoc(docRef, { count: increment(1) });

    //  clics restants
    checkLimit();
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        disabled={loading || disabled}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition relative ${
          disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        <AnimatePresence>
          {pop && (
            <motion.span
              key="thumb-pop"
              initial={{ scale: 1, y: 0 }}
              animate={{ scale: 1.5, y: -10 }}
              exit={{ opacity: 0 }}
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-yellow-400 font-bold"
            >
              👍
            </motion.span>
          )}
        </AnimatePresence>
        <ThumbsUp className="w-5 h-5" />
        {loading ? t("thumbsUp.loading") : `x${count}`}
      </button>

      {/* message d'erreur */}
      {message && <p className="text-sm text-red-600 mt-2">{message}</p>}

      {/* clics restants */}
      {!disabled && !loading && (
        <p className="text-sm text-gray-700 mt-1 italic">
          {t("thumbsUp.remaining", { remaining })}
        </p>
      )}
    </div>
  );
};

export default ThumbsUpButton;
