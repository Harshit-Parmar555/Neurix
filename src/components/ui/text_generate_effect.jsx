"use client";

// react / next imports
import { useEffect } from "react";

// framer-motion imports
import { motion, stagger, useAnimate } from "framer-motion";

// utility imports
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  spanClassName,
  filter = true,
  duration = 0.5,
  title = true,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={cn(
            "bg-gradient-to-t from-zinc-600 to-zinc-200 bg-clip-text text-transparent",
            spanClassName
          )}
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div
        className={
          title
            ? "bg-gradient-to-t from-zinc-900 to-black bg-clip-text text-center text-4xl text-transparent md:text-7xl md:!leading-snug"
            : "mt-6 text-center text-base text-foreground/80 md:text-lg"
        }
      >
        {renderWords()}
      </div>
    </div>
  );
};
