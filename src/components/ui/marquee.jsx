// framer-motion
import { motion } from "framer-motion";

// assets
import { FaTwitter } from "react-icons/fa";

export function UpperMarquee({ reviews }) {
  return (
    <div className="flex flex-col gap-12 MyGradient mt-20">
      <div className="flex MyGradient gap-4">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap flex-shrink-0 overflow-hidden gap-12"
        >
          {reviews.map((review, index) => (
            <div
              className="max-w-72 bg-zinc-900 rounded-xl p-4 space-y-3 shadow-md"
              key={index}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt="User avatar"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <p className="text-sm font-semibold text-white">
                    {review.name}
                  </p>
                </div>
                <FaTwitter className="w-4 h-4 text-zinc-400" />
              </div>

              {/* Body */}
              <p className=" text-zinc-300 leading-snug font-jetbrains-mono text-xs">
                {review.body}
              </p>

              {/* Footer */}
              <p className="text-xs text-zinc-500">{review.date}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap flex-shrink-0 overflow-hidden gap-12"
        >
          {reviews.map((review, index) => (
            <div
              className="max-w-72 bg-zinc-900 rounded-xl p-4 space-y-3 shadow-md"
              key={index}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt="User avatar"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <p className="text-sm font-semibold text-white">
                    {review.name}
                  </p>
                </div>
                <FaTwitter className="w-4 h-4 text-zinc-400" />
              </div>

              {/* Body */}
              <p className=" text-zinc-300 leading-snug font-jetbrains-mono text-xs">
                {review.body}
              </p>

              {/* Footer */}
              <p className="text-xs text-zinc-500">{review.date}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex gap-12 MyGradient">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap flex-shrink-0 overflow-hidden gap-12"
        >
          {reviews.map((review, index) => (
            <div
              className="max-w-72 bg-zinc-900 rounded-xl p-4 space-y-3 shadow-md"
              key={index}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt="User avatar"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <p className="text-sm font-semibold text-white">
                    {review.name}
                  </p>
                </div>
                <FaTwitter className="w-4 h-4 text-zinc-400" />
              </div>

              {/* Body */}
              <p className=" text-zinc-300 leading-snug font-jetbrains-mono text-xs">
                {review.body}
              </p>

              {/* Footer */}
              <p className="text-xs text-zinc-500">{review.date}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap flex-shrink-0 overflow-hidden gap-12"
        >
          {reviews.map((review, index) => (
            <div
              className="max-w-72 bg-zinc-900 rounded-xl p-4 space-y-3 shadow-md"
              key={index}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt="User avatar"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <p className="text-sm font-semibold text-white">
                    {review.name}
                  </p>
                </div>
                <FaTwitter className="w-4 h-4 text-zinc-400" />
              </div>

              {/* Body */}
              <p className=" text-zinc-300 leading-snug font-jetbrains-mono text-xs">
                {review.body}
              </p>

              {/* Footer */}
              <p className="text-xs text-zinc-500">{review.date}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
