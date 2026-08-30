"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { services } from "./ServiceData";
import StaggerContainer from "../motion/StaggerContainer";
import StaggerItem from "../motion/StaggerItem";
import { useMotionVariants, modalContent, modalBackdrop, fadeUp } from "../motion/animations";

const whatsappNumber = "+923164331042";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[number] | null
  >(null);

  const backdropVar = useMotionVariants(modalBackdrop);
  const modalVar = useMotionVariants(modalContent);
  const titleVar = useMotionVariants(fadeUp);

  const openWhatsApp = (serviceName?: string) => {
    const message = serviceName
      ? `Hi Home Green Shine! I am interested in your ${serviceName} service. Please share the details and pricing.`
      : "Hi Home Green Shine! I would like to know more about your cleaning services.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* =========================
            Section Heading
        ========================== */}

        <motion.div
          variants={titleVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-4 inline-flex rounded-md border border-emerald-500/10 bg-emerald-50 px-3 py-1 text-[11px] font-extrabold tracking-[2px] text-emerald-700">
            OUR SERVICES
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] sm:tracking-[-1.5px]">
            Services
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              made for you.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From cleaning to plumbing and household help, choose the service
            that fits your needs.
          </p>
        </motion.div>

        {/* =========================
            Services Grid
        ========================== */}

        <StaggerContainer
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          staggerDelay={0.08}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title} variant="up">
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  {/* Decorative Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-100/40 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-100 group-hover:text-emerald-700"
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative z-10 mb-3 text-xl font-bold tracking-tight text-slate-900">
                    {service.title}
                  </h3>

                  <p className="relative z-10 mb-4 flex-1 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  {/* Price */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative z-10 mb-5 rounded-xl bg-slate-50 px-4 py-3 transition-colors group-hover:bg-emerald-50"
                  >
                    <p className="text-xs font-medium text-slate-500">Pricing</p>
                    <p className="mt-1 text-sm font-bold text-emerald-700">
                      {service.price}
                    </p>
                  </motion.div>

                  {/* Actions */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <motion.button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1 text-sm font-bold text-slate-700 transition-colors duration-200 hover:text-emerald-600"
                    >
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={() => openWhatsApp(service.title)}
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      whileTap={{ scale: 0.92 }}
                      aria-label={`Contact us about ${service.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm transition-colors duration-200 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* =========================
            CTA
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 sm:flex-row sm:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Need a custom cleaning service?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Contact us directly and get a quick quote for your requirements.
            </p>
          </div>

          <motion.button
            type="button"
            onClick={() => openWhatsApp()}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-600"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </motion.button>
        </motion.div>

        {/* =========================
            View All
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 text-center"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-500 bg-white px-7 py-3.5 font-semibold text-emerald-600 transition-all duration-300 hover:bg-emerald-50 hover:shadow-[0_6px_15px_rgba(16,185,129,0.12)] focus:outline-none focus:ring-4 focus:ring-emerald-500/10"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================
          Service Details Modal
      ========================== */}

      <AnimatePresence mode="wait">
        {selectedService && (
          <motion.div
            variants={backdropVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              variants={modalVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-br from-emerald-500 to-cyan-500 p-7 text-white">
                <motion.button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </motion.button>

                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20"
                >
                  {(() => {
                    const SelectedIcon = selectedService.icon;
                    return <SelectedIcon className="h-7 w-7" strokeWidth={1.8} />;
                  })()}
                </motion.div>

                <h3 className="text-2xl font-extrabold">{selectedService.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  {selectedService.description}
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-7">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                  What&apos;s included
                </h4>

                <div className="space-y-3">
                  {selectedService.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-xs font-medium text-emerald-700">Pricing</p>
                    <p className="mt-1 font-bold text-emerald-900">
                      {selectedService.price}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-500">
                      Visit / Survey
                    </p>
                    <p className="mt-1 font-bold text-slate-800">
                      {selectedService.visitFee}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 text-emerald-500" />
                  Lahore, Pakistan
                </div>

                {/* Actions */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    type="button"
                    onClick={() => openWhatsApp(selectedService.title)}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 font-bold text-white transition-colors hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    Close
                  </motion.button>
                </div>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Prices may vary depending on property size and requirements.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
