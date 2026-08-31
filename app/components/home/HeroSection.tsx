"use client";

import Link from "next/link";
import { motion } from "motion/react";
import StaggerContainer from "../motion/StaggerContainer";
import StaggerItem from "../motion/StaggerItem";
import { useMotionVariants, buttonHover } from "../motion/animations";
import { Broom, House, Snowflake, Sparkles, Wrench, Zap } from "lucide-react";

const trustStats = [
  { value: "500+", label: "Bookings" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "7 Days", label: "Available" },
];

export default function HeroSection() {
  const buttonVariants = useMotionVariants(buttonHover);

  const bgGlow1 = useMotionVariants({
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  });

  const floatGlow2 = useMotionVariants({
    hidden: { opacity: 1 },
    visible: {
      x: [0, 20, 0],
      y: [0, -15, 0],
      scale: [1, 1.05, 1],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const starRotate = useMotionVariants({
    hidden: { rotate: 0, scale: 1 },
    visible: {
      rotate: [0, 10, -10, 0],
      scale: [1, 1.15, 1],
      transition: { duration: 2, repeat: Infinity, repeatDelay: 3 },
    },
  });

  const textGradient = useMotionVariants({
    hidden: { backgroundPosition: "0% center" },
    visible: {
      backgroundPosition: ["0% center", "100% center", "0% center"],
      transition: { duration: 5, repeat: Infinity, ease: "linear" },
    },
  });

  const floatIcon1 = useMotionVariants({
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.15, 1],
      transition: { duration: 2, repeat: Infinity, repeatDelay: 2 },
    },
  });

  const cardVariants = useMotionVariants({
    hidden: { opacity: 0, x: 50, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  const cardGlow = useMotionVariants({
    hidden: { opacity: 0.4, scale: 1 },
    visible: {
      scale: [1, 1.06, 1],
      opacity: [0.4, 0.65, 0.4],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const wiggleIcon = useMotionVariants({
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, -5, 5, 0],
      transition: { duration: 3, repeat: Infinity, repeatDelay: 2 },
    },
  });

  const circle1 = useMotionVariants({
    hidden: { x: 0, y: 0 },
    visible: {
      x: [0, 15, 0],
      y: [0, 10, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const circle2 = useMotionVariants({
    hidden: { x: 0, y: 0 },
    visible: {
      x: [0, -15, 0],
      y: [0, -10, 0],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const sparkle1 = useMotionVariants({
    hidden: { y: 0, rotate: 0, opacity: 0.5 },
    visible: {
      y: [0, -8, 0],
      rotate: [0, 20, 0],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const sparkle2 = useMotionVariants({
    hidden: { y: 0, rotate: 0, opacity: 0.4 },
    visible: {
      y: [0, 10, 0],
      rotate: [0, -20, 0],
      opacity: [0.4, 0.9, 0.4],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const sparkle3 = useMotionVariants({
    hidden: { scale: 1, opacity: 0.4 },
    visible: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 1, 0.4],
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const floatMain = useMotionVariants({
    hidden: { y: 0, rotate: 0 },
    visible: {
      y: [0, -12, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  });

  const pulseDot = useMotionVariants({
    hidden: { scale: 1, opacity: 1 },
    visible: {
      scale: [1, 1.4, 1],
      opacity: [1, 0.5, 1],
      transition: { duration: 1.8, repeat: Infinity },
    },
  });

  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200/80 bg-slate-50">
      {/* Background */}
      <motion.div
        aria-hidden="true"
        variants={bgGlow1}
        initial="hidden"
        animate="visible"
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.12),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(6,182,212,0.07),transparent_40%)]
        "
      />

      {/* Floating background glow */}
      <motion.div
        aria-hidden="true"
        variants={floatGlow2}
        initial="hidden"
        animate="visible"
        className="
          pointer-events-none
          absolute -right-24 top-20
          -z-10
          h-72 w-72
          rounded-full
          bg-emerald-300/10
          blur-3xl
        "
      />

      <div
        className="
          mx-auto grid max-w-7xl
          grid-cols-1 items-center
          gap-12 px-4 py-16
          sm:px-6 sm:py-20
          lg:grid-cols-2
          lg:gap-16 lg:px-8 lg:py-24
          xl:gap-20
        "
      >
        {/* LEFT CONTENT */}
        <StaggerContainer
          staggerDelay={0.12}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <StaggerItem
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full
              border border-emerald-200/80
              bg-emerald-50/80
              px-4 py-2
              text-xs font-bold text-emerald-700
              shadow-sm shadow-emerald-100/60
              backdrop-blur-sm
            "
          >
            <motion.span
              aria-hidden="true"
              variants={starRotate}
              initial="hidden"
              animate="visible"
            >
              ⭐
            </motion.span>
            <span>Trusted Home Services in Lahore</span>
          </StaggerItem>

          {/* Heading */}
          <StaggerItem
            className="
              mb-6
              text-4xl font-black
              leading-[1.08]
              tracking-tight
              text-slate-950
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
              lg:leading-[1.02]
              xl:text-7xl
            "
          >
            <div>
              A Cleaner Home.
              <br />
              <motion.span
                className="
                  inline-block
                  bg-gradient-to-r
                  from-emerald-500
                  via-emerald-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                  bg-[length:200%_auto]
                "
                variants={textGradient}
                initial="hidden"
                animate="visible"
              >
                A Better Life.
              </motion.span>
            </div>
          </StaggerItem>

          {/* Description */}
          <StaggerItem
            className="
              mx-auto max-w-2xl
              text-base leading-7
              text-slate-600
              sm:text-lg sm:leading-8
              lg:mx-0
            "
          >
            <p>
              Professional cleaning, plumbing and helper services for homes,
              offices and businesses in Lahore. We take care of the work so you
              can focus on what matters.
            </p>
          </StaggerItem>

          {/* Buttons */}
          <StaggerItem
            className="
              mt-9 flex flex-col gap-3
              sm:flex-row
              sm:justify-center
              sm:gap-4
              lg:justify-start
            "
          >
            {/* Book Service */}
            <motion.div whileHover={buttonVariants.hover} whileTap={buttonVariants.tap}>
              <Link
                href="/booking"
                className="
                  group inline-flex min-h-14 w-full
                  items-center justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-emerald-500
                  to-emerald-700
                  px-7
                  text-base font-bold
                  text-white
                  shadow-[0_8px_25px_rgba(16,185,129,0.25)]
                  transition-shadow duration-300
                  hover:shadow-[0_14px_30px_rgba(16,185,129,0.32)]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-emerald-500/20
                "
              >
                <span>Book a Service</span>
                <motion.span
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  aria-hidden="true"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            {/* WhatsApp */}
            <motion.div whileHover={buttonVariants.hover} whileTap={buttonVariants.tap}>
              <a
                href="https://wa.me/923236304752"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="
                  inline-flex min-h-14 w-full
                  items-center justify-center
                  rounded-xl
                  border border-slate-200
                  bg-white
                  px-7
                  text-base font-bold
                  text-slate-700
                  shadow-sm
                  transition-all duration-300
                  hover:border-emerald-300
                  hover:bg-emerald-50
                  hover:text-emerald-700
                  hover:shadow-lg
                  focus:outline-none
                  focus:ring-4
                  focus:ring-emerald-500/10
                "
              >
                <motion.span
                  aria-hidden="true"
                  className="mr-2"
                  variants={floatIcon1}
                  initial="hidden"
                  animate="visible"
                >
                  💬
                </motion.span>
                WhatsApp Us
              </a>
            </motion.div>
          </StaggerItem>

          {/* Trust Stats */}
          <StaggerItem
            className="
              mx-auto mt-12
              flex max-w-xl flex-wrap
              items-center justify-center
              gap-x-8 gap-y-6
              border-t border-slate-200/80
              pt-7
              sm:mt-14
              sm:gap-x-12
              lg:mx-0
              lg:justify-start
            "
          >
            {trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.12 }}
                whileHover={{ y: -3 }}
                className="min-w-[85px]"
              >
                <strong
                  className="
                    block text-2xl
                    font-black
                    tracking-tight
                    text-slate-900
                  "
                >
                  {stat.value}
                </strong>
                <span
                  className="
                    mt-1 block
                    text-xs
                    font-semibold
                    text-slate-500
                  "
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </StaggerItem>
        </StaggerContainer>

        {/* RIGHT CARD */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Glow */}
          <motion.div
            aria-hidden="true"
            variants={cardGlow}
            initial="hidden"
            animate="visible"
            className="
              absolute -inset-4
              -z-10
              rounded-[40px]
              bg-gradient-to-br
              from-emerald-200/40
              via-cyan-200/20
              to-transparent
              blur-2xl
            "
          />

          {/* Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              rounded-[28px]
              border border-white/80
              bg-white/90
              p-5
              shadow-[0_25px_70px_rgba(15,23,42,0.10)]
              backdrop-blur-xl
              sm:p-6
            "
          >
            {/* Card Header */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="
                mb-5 flex items-center gap-2.5
                text-sm font-bold
                text-slate-700
              "
            >
              <motion.span
                variants={wiggleIcon}
                initial="hidden"
                animate="visible"
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  bg-emerald-50
                  text-lg
                "
                aria-hidden="true"
              >
                🧽
              </motion.span>
              <span>Professional Home Services</span>
            </motion.div>

            {/* Visual */}
            <div
              className="
                relative flex h-64
                items-center justify-center
                overflow-hidden
                rounded-[22px]
                bg-gradient-to-br
                from-emerald-50
                via-white
                to-cyan-50
                sm:h-80
              "
            >
              {/* Decorative circles */}
              <motion.div
                aria-hidden="true"
                variants={circle1}
                initial="hidden"
                animate="visible"
                className="
                  absolute -left-12 -top-12
                  h-36 w-36
                  rounded-full
                  bg-emerald-200/30
                  blur-2xl
                "
              />
              <motion.div
                aria-hidden="true"
                variants={circle2}
                initial="hidden"
                animate="visible"
                className="
                  absolute -bottom-12 -right-12
                  h-40 w-40
                  rounded-full
                  bg-cyan-200/30
                  blur-2xl
                "
              />

              {/* Sparkle 1 */}
              <motion.span
                aria-hidden="true"
                variants={sparkle1}
                initial="hidden"
                animate="visible"
                className="
                  absolute left-[15%]
                  top-[18%]
                  text-3xl
                  text-emerald-400
                "
              >
                ✦
              </motion.span>

              {/* Sparkle 2 */}
              <motion.span
                aria-hidden="true"
                variants={sparkle2}
                initial="hidden"
                animate="visible"
                className="
                  absolute bottom-[22%]
                  right-[16%]
                  text-4xl
                  text-cyan-400
                "
              >
                ✦
              </motion.span>

              {/* Sparkle 3 */}
              <motion.span
                aria-hidden="true"
                variants={sparkle3}
                initial="hidden"
                animate="visible"
                className="
                  absolute right-[28%]
                  top-[22%]
                  text-lg
                  text-emerald-300
                "
              >
                ✦
              </motion.span>

              {/* Main Cleaning Icon */}
         <div className="relative z-10 h-[180px] w-[280px] sm:h-[220px] sm:w-[350px]">
  {/* Main icon */}
  <motion.div
    aria-hidden="true"
    variants={floatMain}
    initial="hidden"
    animate="visible"
    whileHover={{ scale: 1.1 }}
    className="
      absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      text-blue-600
      drop-shadow-[0_18px_18px_rgba(15,23,42,0.14)]
    "
  >
    <Sparkles size={110} strokeWidth={1.5} />
  </motion.div>

  {/* Cleaning */}
  <motion.div
    animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="absolute left-2 top-6 text-cyan-500"
  >
    <Broom size={55} />
  </motion.div>

  {/* Electrician */}
  <motion.div
    animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute right-4 top-2 text-yellow-500"
  >
    <Zap size={50} />
  </motion.div>

  {/* AC */}
  <motion.div
    animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-5 left-8 text-sky-500"
  >
    <Snowflake size={48} />
  </motion.div>

  {/* Tools */}
  <motion.div
    animate={{ rotate: [0, 8, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-2 right-8 text-orange-500"
  >
    <Wrench size={48} />
  </motion.div>

  {/* Home services */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute left-1/2 top-0 -translate-x-1/2 text-green-500"
  >
    <House size={42} />
  </motion.div>
</div>
            </div>

            {/* Card Footer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="
                flex items-center
                justify-between gap-4
                pt-5
              "
            >
              <div>
                <span
                  className="
                    block text-xs
                    font-semibold
                    text-slate-500
                  "
                >
                  Starting from
                </span>
                <strong
                  className="
                    mt-0.5 block
                    text-2xl font-black
                    tracking-tight
                    text-emerald-700
                  "
                >
                  Rs. 2,500
                </strong>
              </div>

              <motion.span
                whileHover={{ scale: 1.05 }}
                className="
                  inline-flex items-center gap-1.5
                  rounded-full
                  bg-emerald-50
                  px-3 py-1.5
                  text-xs font-bold
                  text-emerald-600
                "
              >
                <motion.span
                  aria-hidden="true"
                  variants={pulseDot}
                  initial="hidden"
                  animate="visible"
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-emerald-500
                  "
                />
                Available
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
