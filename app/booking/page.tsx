"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  User,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import StaggerItem from "../components/motion/StaggerItem";
import StaggerContainer from "../components/motion/StaggerContainer";
import FadeIn from "../components/motion/FadeIn";
import {
  fadeInLeft,
  fadeUp,
  useMotionVariants,
} from "../components/motion/animations";

const WHATSAPP_NUMBER = "923236304752";

const inputCls = `
  w-full rounded-xl border border-slate-200
  bg-slate-50 px-4 py-3
  text-sm text-slate-900
  outline-none
  transition-all duration-200
  placeholder:text-slate-400
  focus:border-emerald-500
  focus:bg-white
  focus:shadow-[0_0_0_4px_rgba(16,185,129,0.12)]
`;

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const services = [
  "Home Cleaning",
  "Deep Cleaning",
  "Sofa Cleaning",
  "Carpet Cleaning",
  "Office Cleaning",
  "Bathroom Cleaning",
  "Plumbing",
  // "Helper Service",
];

const areas = [
  "DHA Lahore",
  "Gulberg",
  "Johar Town",
  "Model Town",
  "Bahria Town",
  "Wapda Town",
  "Garden Town",
  "Cantt",
  "Other",
];

const benefits = [
  {
    icon: Clock3,
    title: "Quick Response",
    desc: "We'll contact you shortly to confirm your booking.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    desc: "Choose a date and time that works for you.",
  },
  {
    icon: CheckCircle2,
    title: "Professional Service",
    desc: "Our team handles your service with care.",
  },
];

function getToday() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  // Today's date is selected automatically.
  const [selectedDate, setSelectedDate] = useState(getToday());

  // Keep time empty until user chooses one.
  const [selectedTime, setSelectedTime] = useState("");

  const leftVar = useMotionVariants(fadeInLeft);
  const titleVar = useMotionVariants(fadeUp);

  const today = getToday();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const service = String(formData.get("service") || "");
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");
    const area = String(formData.get("area") || "");
    const address = String(formData.get("address") || "");
    const instructions = String(formData.get("instructions") || "");

    const message =
      `*New Cleaning Booking Request* 🧽\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email || "N/A"}\n\n` +
      `🧹 *Service:* ${service}\n` +
      `📅 *Date:* ${date}\n` +
      `⏰ *Time:* ${time}\n` +
      `📍 *Area:* ${area}\n` +
      `🏠 *Address:* ${address}\n\n` +
      `📝 *Instructions:* ${instructions || "None"}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_15%_80%,rgba(6,182,212,0.06),transparent_40%)]
          "
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-md border border-emerald-500/10 bg-emerald-50 px-3 py-1 text-[11px] font-extrabold tracking-[2px] text-emerald-700">
              <CalendarDays className="h-3.5 w-3.5" />
              BOOK A CLEANING
            </span>
          </FadeIn>

          <motion.div
            variants={titleVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[62px]">
              Let&apos;s get your space
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-cyan-500 bg-clip-text text-transparent">
                clean.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Fill out the form below and our team will contact you to confirm
              your booking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8 lg:py-20">

          {/* LEFT */}
          <motion.div
            variants={leftVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="inline-flex rounded-md border border-emerald-500/10 bg-emerald-50 px-3 py-1 text-[11px] font-extrabold tracking-[2px] text-emerald-700">
              EASY BOOKING
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl">
              Book your cleaning
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                in a few steps.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
              Tell us what you need, where you are located and your preferred
              date and time.
            </p>

            {/* Benefits */}
            <StaggerContainer
              className="mt-7 space-y-4"
              staggerDelay={0.08}
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <StaggerItem key={benefit.title} variant="up">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="group flex gap-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/10 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {benefit.title}
                        </h3>

                        <p className="mt-0.5 text-xs leading-5 text-slate-600 sm:text-sm">
                          {benefit.desc}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* WhatsApp */}
            <FadeIn delay={0.25}>
              <div className="mt-7 rounded-2xl border border-emerald-500/10 bg-gradient-to-br from-emerald-50 to-cyan-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Prefer WhatsApp?
                    </p>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex text-sm font-extrabold text-emerald-700 hover:text-emerald-500"
                    >
                      Chat with us directly →
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </motion.div>

          {/* FORM */}
          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:rounded-3xl sm:p-7"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h2 className="mt-5 text-xl font-extrabold text-slate-900 sm:text-2xl">
                    Booking Request Sent!
                  </h2>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Thank you. Our team will contact you shortly to confirm
                    your booking.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedDate(getToday());
                      setSelectedTime("");
                    }}
                    className="mt-6 rounded-xl border border-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-600 transition-all hover:bg-emerald-50"
                  >
                    Make Another Booking
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>

                  {/* INFORMATION */}
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="mb-5 flex items-center gap-2 text-base font-extrabold text-slate-900">
                      <User className="h-5 w-5 text-emerald-600" />
                      Your Information
                    </h3>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700">
                          Full Name *
                        </label>

                        <div className="relative">
                          <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className={`${inputCls} pl-10`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700">
                          Phone Number *
                        </label>

                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            type="tel"
                            name="phone"
                            placeholder="03XX XXXXXXX"
                            required
                            className={`${inputCls} pl-10`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Email
                      </label>

                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          className={`${inputCls} pl-10`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* SERVICE */}
                  <div className="border-b border-slate-200 py-6">
                    <h3 className="mb-5 flex items-center gap-2 text-base font-extrabold text-slate-900">
                      <Wrench className="h-5 w-5 text-emerald-600" />
                      Cleaning Details
                    </h3>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Service *
                      </label>

                      <select
                        name="service"
                        required
                        defaultValue=""
                        className={inputCls}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                      {/* DATE */}
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700">
                          Preferred Date *
                        </label>

                        <div className="relative">
                          <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            type="date"
                            name="date"
                            required
                            min={today}
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className={`${inputCls} pl-10`}
                          />
                        </div>

                        <p className="mt-1.5 text-[11px] text-slate-400">
                          Today is automatically selected. Previous dates are
                          unavailable.
                        </p>
                      </div>

                      {/* TIME */}
                      <div>
                        <label className="mb-1.5 block text-xs font-bold text-slate-700">
                          Preferred Time *
                        </label>

                        <div className="relative">
                          <Clock3 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <select
                            name="time"
                            required
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className={`${inputCls} pl-10`}
                          >
                            <option value="" disabled>
                              Select time
                            </option>

                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="py-6">
                    <h3 className="mb-5 flex items-center gap-2 text-base font-extrabold text-slate-900">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                      Location
                    </h3>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Area *
                      </label>

                      <select
                        name="area"
                        required
                        defaultValue=""
                        className={inputCls}
                      >
                        <option value="" disabled>
                          Select your area
                        </option>

                        {areas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-4">
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Complete Address *
                      </label>

                      <textarea
                        name="address"
                        rows={3}
                        placeholder="Enter your complete address"
                        required
                        className={inputCls}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="mb-1.5 block text-xs font-bold text-slate-700">
                        Additional Instructions
                      </label>

                      <textarea
                        name="instructions"
                        rows={2}
                        placeholder="Anything else we should know?"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(16,185,129,0.25)] transition-all hover:shadow-[0_8px_22px_rgba(16,185,129,0.35)]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Submit Booking Request
                  </motion.button>
                </form>
              )}
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
