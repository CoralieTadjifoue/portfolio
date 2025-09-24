import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectScreenshotsInline = ({ screenshots }) => {
  const [current, setCurrent] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  const prev = () =>
    setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  const currentItem = screenshots[current];

  const getSrc = (src) => process.env.PUBLIC_URL + src;

  return (
    <div className="mb-8">
      {/* image or video */}
      <div className="relative rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {currentItem.type === "video" ? (
            <motion.video
              key={current}
              controls
              className="w-full object-contain max-h-[600px] mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <source src={getSrc(currentItem.src)} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          ) : (
            <motion.img
              key={current}
              src={getSrc(currentItem.src)}
              alt={`Screenshot ${current + 1}`}
              className="w-full object-contain max-h-[600px] mx-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* Prev/Next Buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2 shadow"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-2 shadow"
        >
          ▶
        </button>
      </div>

      {/* Description */}
      {currentItem.description && (
        <p className="text-center text-gray-700 mt-3 whitespace-pre-line">
          {currentItem.description}
        </p>
      )}

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        {screenshots.map((s, i) => (
          <div
            key={i}
            className={`w-20 h-20 rounded cursor-pointer border-2 flex items-center justify-center ${
              i === current ? "border-blue-600" : "border-transparent"
            }`}
            onClick={() => setCurrent(i)}
          >
            {s.type === "video" ? (
              <video className="w-full h-full object-cover rounded">
                <source src={getSrc(s.src)} type="video/mp4" />
              </video>
            ) : (
              <img
                src={getSrc(s.src)}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScreenshotsInline;
