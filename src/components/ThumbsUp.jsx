import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc, increment, setDoc } from "firebase/firestore";
import { ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ThumbsUpButton = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pop, setPop] = useState(false);

  const docRef = doc(db, "counters", "thumbsUp");

  useEffect(() => {
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
    setPop(true);
    setTimeout(() => setPop(false), 300);
    await updateDoc(docRef, { count: increment(1) });
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition relative"
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
      {loading ? "Loading..." : `x${count}`}
    </button>
  );
};

export default ThumbsUpButton;
