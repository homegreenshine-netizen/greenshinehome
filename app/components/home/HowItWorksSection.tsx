"use client";

import { motion } from "motion/react";
import StaggerContainer from "../motion/StaggerContainer";
import StaggerItem from "../motion/StaggerItem";
import { useMotionVariants, fadeUp } from "../motion/animations";

const steps = [
  {
    number: "01",
    title: "Choose a Service",
    // desc: "Select cleaning, plumbing or helper service according to your needs.",
    desc: "Select cleaning according to your needs.",
  },
  {
    number: "02",
    title: "Book a Time",
    desc: "Choose your preferred date and provide your location.",
  },
  {
    number: "03",
    title: "We Do the Work",
    desc: "Our professional team arrives and takes care of the job.",
  },
];

export default function HowItWorksSection() {
  const titleVar = useMotionVariants(fadeUp);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Heading */}
        <motion.div
          variants={titleVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-4 inline-flex rounded-md border border-emerald-500/10 bg-emerald-50 px-3 py-1 text-[11px] font-extrabold tracking-[2px] text-emerald-700">
            HOW IT WORKS
          </span>

          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl sm:tracking-[-1.5px]">
            Get it done in
            <br />

            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              three simple steps.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Getting professional help is simple. Choose a service, book a
            convenient time, and let our team handle the rest.
          </p>
        </motion.div>

        {/* Steps */}
        <StaggerContainer className="flex flex-col items-center lg:flex-row lg:items-start" staggerDelay={0.12}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number} variant="up">
              <div className="flex w-full flex-1 flex-col items-center text-center">
                {/* Step */}
                <div className="w-full px-5 py-5">
                  {/* Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/10 bg-emerald-50 text-xl font-extrabold text-emerald-700 shadow-sm transition-all duration-300 hover:bg-emerald-100 hover:shadow-md"
                  >
                    {step.number}
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-2.5 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto max-w-xs text-sm leading-6 text-slate-600">
                    {step.desc}
                  </p>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop connector */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      aria-hidden="true"
                      className="hidden h-0.5 w-20 shrink-0 origin-left bg-gradient-to-r from-emerald-100 via-slate-200 to-emerald-100 lg:block"
                    />

                    {/* Mobile connector */}
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      aria-hidden="true"
                      className="h-10 w-0.5 origin-top bg-gradient-to-b from-emerald-100 via-slate-200 to-emerald-100 lg:hidden"
                    />
                  </>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
