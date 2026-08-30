"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { buttonHover, useMotionVariants } from "./animations";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedButton({
  children,
  className = "",
  ...props
}: AnimatedButtonProps) {
  const variants = useMotionVariants(buttonHover);

  const Component = motion.button;

  return (
    <Component
      className={className}
      whileHover={variants.hover}
      whileTap={variants.tap}
      {...props}
    >
      {children}
    </Component>
  );
}
