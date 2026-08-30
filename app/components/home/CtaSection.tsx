"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useMotionVariants, fadeUp, scaleIn } from "../motion/animations";

export default function CtaSection() {
  const titleVar = useMotionVariants(fadeUp);
  const buttonVar = useMotionVariants(scaleIn);

  return (
    <section
      className="relative overflow-hidden text-white py-28 px-6 text-center"
      style={{
        background:
          "radial-gradient(circle at 90% 90%, #064e3b, #0f172a), #0f172a",
      }}
    >
      <motion.span
        variants={titleVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="inline-block text-emerald-300 text-[11px] font-extrabold tracking-[2px] mb-5 bg-emerald-500/15 px-3 py-1 rounded-md border border-emerald-500/20"
      >
        NEED A SERVICE?
      </motion.span>

      <motion.h2
        variants={titleVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6"
      >
        Let&apos;s get your
        <br />
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
          work done.
        </span>
      </motion.h2>

      <motion.p
        variants={titleVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
        className="text-slate-400 text-lg mb-9 max-w-[600px] mx-auto"
      >
        Book cleaning, plumbing or helper services today.
      </motion.p>

      <motion.div
        variants={buttonVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link
          href="/booking"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-900 rounded-xl font-bold shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300"
        >
          Book Your Service →
        </Link>
      </motion.div>
    </section>
  );
}
