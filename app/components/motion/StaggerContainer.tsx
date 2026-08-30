"use client";

import { motion } from "motion/react";
import { staggerContainer, useMotionVariants } from "./animations";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  staggerDelay?: number;
}

export default function StaggerContainer({
  children,
  className = "",
  once = true,
  amount = 0.15,
  staggerDelay,
}: StaggerContainerProps) {
  const variants = useMotionVariants(staggerContainer);

  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        ...(staggerDelay ? { staggerChildren: staggerDelay } : {}),
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
