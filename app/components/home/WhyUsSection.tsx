"use client";

import Link from "next/link";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer from "../motion/StaggerContainer";
import StaggerItem from "../motion/StaggerItem";
import { useMotionVariants, fadeUp, fadeInLeft } from "../motion/animations";

const benefits = [
  {
    title: "Professional Team",
    desc: "Trained and reliable service professionals.",
  },
  {
    title: "Reliable Service",
    desc: "We respect your time and schedule.",
  },
  {
    title: "Quality Focused",
    desc: "We pay attention to the details.",
  },
  {
    title: "Easy Booking",
    desc: "Book your service in just a few steps.",
  },
];

export default function WhyUsSection() {
  const leftVar = useMotionVariants(fadeInLeft);
  const titleVar = useMotionVariants(fadeUp);

  return (
    <section className="relative isolate overflow-hidden border-y border-slate-200 bg-slate-50">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_30%,rgba(16,185,129,0.08),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(6,182,212,0.05),transparent_40%)]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8 lg:py-24">
        {/* LEFT — Visual */}
        <motion.div
          variants={leftVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Main Visual */}
          <motion.div
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 shadow-[0_25px_70px_rgba(15,23,42,0.10)] transition-all duration-500 sm:h-[480px] lg:h-[520px]"
          >
            {/* Decorative circles */}
            <div aria-hidden="true" className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />

            {/* Sparkles */}
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-[15%] top-[18%] text-4xl text-emerald-400 opacity-70"
            >
              ✦
            </motion.span>

            <motion.span
              aria-hidden="true"
              animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-[20%] right-[15%] text-5xl text-cyan-400 opacity-60"
            >
              ✦
            </motion.span>

            <motion.span
              aria-hidden="true"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute right-[25%] top-[20%] text-xl text-emerald-300"
            >
              ✦
            </motion.span>

            {/* Main Icon */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 text-[110px] leading-none drop-shadow-[0_18px_18px_rgba(15,23,42,0.14)] sm:text-[140px]"
            >
              🧼
            </motion.div>
          </motion.div>

          {/* Experience Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-5 right-4 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_15px_35px_rgba(15,23,42,0.10)] sm:bottom-8 sm:right-[-20px] sm:px-7 sm:py-5"
          >
            <strong className="text-3xl font-black tracking-tight text-emerald-700 sm:text-4xl">
              5+
            </strong>

            <span className="text-xs font-semibold leading-tight text-slate-600">
              Years of
              <br />
              Experience
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          variants={titleVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Label */}
          <span className="mb-4 inline-flex rounded-md border border-emerald-500/10 bg-emerald-50 px-3 py-1 text-[11px] font-extrabold tracking-[2px] text-emerald-700">
            WHY HOME GREEN SHINE?
          </span>

          {/* Heading */}
          <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl sm:tracking-[-1.5px]">
            We don&apos;t just help.
            <br />

            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              We care.
            </span>
          </h2>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Our goal is simple: provide reliable home and workplace services
            that make your life easier and your space better.
          </p>

          {/* Benefits */}
          <StaggerContainer className="mb-10 grid grid-cols-1 gap-7 sm:grid-cols-2" staggerDelay={0.08}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title} variant="up">
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="group flex gap-3.5"
                >
                  {/* Check Icon */}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-500/10 bg-emerald-50 text-sm font-extrabold text-emerald-700 transition-all duration-300 group-hover:bg-emerald-100"
                  >
                    ✓
                  </motion.span>

                  <div>
                    <h3 className="mb-1 text-base font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-600">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-7 py-3.5 font-semibold text-white shadow-[0_4px_14px_rgba(16,185,129,0.25)] transition-all duration-300 hover:shadow-[0_8px_22px_rgba(16,185,129,0.35)] focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
            >
              Learn More About Us
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
