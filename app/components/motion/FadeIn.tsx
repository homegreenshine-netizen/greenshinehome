"use client";

import { motion } from "motion/react";
import { fadeIn, useMotionVariants } from "./animations";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration,
  once = true,
  amount = 0.15,
}: FadeInProps) {
  const variants = useMotionVariants(fadeIn);

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
