"use client";

import { motion } from "motion/react";
import { fadeUp, fadeDown, fadeInLeft, fadeInRight, fadeIn, scaleIn, useMotionVariants } from "./animations";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "down" | "left" | "right" | "fade" | "scale";
}

export default function StaggerItem({
  children,
  className = "",
  variant = "up",
}: StaggerItemProps) {
  let baseVariant;
  switch (variant) {
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
    case "fade":
      baseVariant = fadeIn;
      break;
    case "scale":
      baseVariant = scaleIn;
      break;
    default:
      baseVariant = fadeUp;
  }

  const variants = useMotionVariants(baseVariant);

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
