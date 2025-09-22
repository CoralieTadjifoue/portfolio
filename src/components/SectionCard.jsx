"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SectionCard({ title, children, initialOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mb-6">
      {/* Title */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-gray-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden mt-3"
          >
            <div className="text-gray-700">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
