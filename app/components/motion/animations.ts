"use client";

import { useReducedMotion, Variants } from "motion/react";

// Centralized easing for consistency
export const defaultEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const springEase = { type: "spring", stiffness: 300, damping: 24 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: defaultEase,
    },
  },
} satisfies Variants;

export const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: defaultEase,
    },
  },
} satisfies Variants;

export const fadeInLeft = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: defaultEase,
    },
  },
} satisfies Variants;

export const fadeInRight = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: defaultEase,
    },
  },
} satisfies Variants;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: defaultEase,
    },
  },
} satisfies Variants;

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: defaultEase,
    },
  },
} satisfies Variants;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} satisfies Variants;

export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
} satisfies Variants;

export const modalContent = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.95, y: 20 },
} satisfies Variants;

export const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: defaultEase,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: defaultEase },
  },
} satisfies Variants;

export const cardHover = {
  hover: {
    y: -6,
    transition: {
      duration: 0.3,
      ease: defaultEase,
    },
  },
};

export const buttonHover = {
  hover: { y: -2 },
  tap: { scale: 0.97 },
};

// Helper hook to optionally disable animation variants
export function useMotionVariants<T extends Variants>(variants: T): T {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0 },
    } as unknown as T;
  }

  return variants;
}
