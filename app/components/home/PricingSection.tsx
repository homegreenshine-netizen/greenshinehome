"use client";

import { motion } from "motion/react";
import StaggerContainer from "../motion/StaggerContainer";
import StaggerItem from "../motion/StaggerItem";
import { useMotionVariants, fadeUp } from "../motion/animations";

export default function PricingSection() {
    const titleVar = useMotionVariants(fadeUp);
    
    const cards = [
      {
        icon: "⏱️",
        title: "Hourly Services",
        desc: "Cleaning and helper services can be booked by the hour. Your total price depends on the number of hours required.",
        price: "Priced per hour",
      },
      {
        icon: "🧽",
        title: "Cleaning Jobs",
        desc: "Deep cleaning, sofa, carpet and other cleaning prices depend on the size and condition of the job.",
        price: "Price based on job",
      },
      {
        icon: "🔧",
        title: "Plumbing Services",
        desc: "Plumbing prices depend on the type of repair, parts and work required.",
        price: "Quote based on work",
      },
    ];
  
    return (
      <section className="bg-slate-50">
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
              SIMPLE PRICING
            </span>
  
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] sm:tracking-[-1.5px]">
              Pricing that
              <br />
  
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 bg-clip-text text-transparent">
                fits your service.
              </span>
            </h2>
  
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Prices depend on the service, duration and work required.
            </p>
          </motion.div>
  
          {/* Pricing Cards */}
          <StaggerContainer className=" grid grid-cols-1 gap-6 md:grid-cols-3" staggerDelay={0.1}>
            {cards.map((card) => (
              <StaggerItem key={card.title} variant="up">
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative h-96  flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10 sm:p-9"
                >
                  {/* Top Gradient */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400"
                  />
  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl transition-all duration-300 group-hover:bg-emerald-100"
                  >
                    {card.icon}
                  </motion.div>
  
                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900">
                   fu {card.title}
                  </h3>
  
                  {/* Description */}
                  <p className="flex-1 text-sm leading-6 text-slate-600">
                    {card.desc}
                  </p>
  
                  {/* Price */}
                  <div className="mt-8 border-t border-slate-200 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Pricing
                    </span>
  
                    <strong className="mt-1 block text-base font-extrabold text-emerald-700">
                      {card.price}
                    </strong>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
  
          {/* Pricing Note */}
          <div
            className="
              mt-10
              flex flex-col items-center justify-center
              gap-2
              rounded-xl
              border border-slate-200
              bg-white
              px-6 py-5
              text-center
              text-sm text-slate-600
              shadow-sm
              sm:flex-row
            "
          >
            <span className="text-lg" aria-hidden="true">
              💡
            </span>
  
            <p>
              <span className="font-bold text-slate-900">
                Need an exact price?
              </span>{" "}
              Tell us what you need and we&apos;ll provide the best available
              estimate.
            </p>
          </div>
        </div>
      </section>
    );
  }
  