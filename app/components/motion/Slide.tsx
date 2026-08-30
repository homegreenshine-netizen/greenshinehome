"use client";

import { motion } from "motion/react";
import { fadeUp, fadeDown, fadeInLeft, fadeInRight, useMotionVariants } from "./animations";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  amount?: number;
}

export default function Slide({
  children,
  className = "",
  delay = 0,
  duration,
  direction = "up",
  once = true,
  amount = 0.15,
}: SlideProps) {
  let baseVariant;
  switch (direction) {
    case "up":
      baseVariant = fadeUp;
      break;
    case "down":
      baseVariant = fadeDown;
      break;
    case "left":
      baseVariant = fadeInLeft;
      break;
    case "right":
      baseVariant = fadeInRight;
      break;
    default:
      baseVariant = fadeUp;
  }

  const variants = useMotionVariants(baseVariant);

  // Customize delay if provided
  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        delay,
        ...(duration ? { duration } : {}),
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
