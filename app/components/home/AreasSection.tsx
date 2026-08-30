"use client";

import { motion } from "motion/react";
import StaggerContainer from "../motion/StaggerContainer";
import StaggerItem from "../motion/StaggerItem";
import { useMotionVariants, fadeUp } from "../motion/animations";

const areas = [
  "DHA Lahore",
  "Gulberg",
  "Johar Town",
  "Model Town",
  "Bahria Town",
  "Wapda Town",
  "Garden Town",
  "Cantt",
];

export default function AreasSection() {
  const titleVar = useMotionVariants(fadeUp);

  return (
    <section className="relative isolate overflow-hidden border-y border-slate-200 bg-slate-50">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_30%,rgba(16,185,129,0.08),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(6,182,212,0.05),transparent_40%)]"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Heading */}
        <motion.div
          variants={titleVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-4 inline-flex rounded-md border border-emerald-500/10 bg-emerald-50 px-3 py-1 text-[11px] font-extrabold tracking-[2px] text-emerald-700">
            AREAS WE SERVE
          </span>

          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl sm:tracking-[-1.5px]">
            Home services
            <br />

            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              across Lahore.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We provide cleaning, plumbing and helper services in many areas of
            Lahore.
          </p>
        </motion.div>

        {/* Areas Grid */}
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {areas.map((area) => (
            <StaggerItem key={area} variant="scale">
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="text-2xl transition-transform duration-300 group-hover:scale-110"
                >
                  📍
                </motion.span>

                <span className="font-semibold text-slate-900">{area}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
