"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
 
];

const services = [
  "Home Cleaning",
  "Deep Cleaning",
  "Sofa Cleaning",
  "Carpet Cleaning",
];

const footerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const footerItem = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      {/* Main Footer */}
      <motion.div
        variants={footerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="
          mx-auto grid w-full max-w-7xl
          grid-cols-1
          gap-10
          px-5 py-14
          sm:grid-cols-2
          sm:gap-12
          sm:px-6
          md:py-16
          lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]
          lg:gap-16
          lg:px-8
          lg:py-20
        "
      >
        {/* Brand */}
        <motion.div variants={footerItem}>
          <Link
            href="/"
            className="
              group flex items-center gap-1.5
              text-2xl font-black tracking-tight
              text-slate-900
            "
          >
            <Image
              src="/logo.png"
              alt="Home Green Shine"
              width={120}
              height={120}
              priority
              className="h-auto w-[120px] object-contain"
            />
          </Link>

          <p className="mb-6 max-w-sm text-sm leading-6 text-slate-600">
            Professional and reliable cleaning services for homes, offices and
            businesses across Lahore.
          </p>

          <motion.a
            href="https://wa.me/923236304752"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="
              inline-flex items-center gap-2
              font-bold text-emerald-600
              transition-colors duration-200
              hover:text-emerald-700
            "
          >
            WhatsApp Us
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={footerItem}>
          <h3 className="mb-5 text-base font-bold text-slate-900">
            Quick Links
          </h3>

          <nav className="flex flex-col items-start gap-3">
            {quickLinks.map(({ label, href }) => (
              <motion.div key={label} whileHover={{ x: 5 }}>
                <Link
                  href={href}
                  className="
                    text-sm text-slate-600
                    transition-colors duration-200
                    hover:text-emerald-600
                  "
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Services */}
        <motion.div variants={footerItem}>
          <h3 className="mb-5 text-base font-bold text-slate-900">
            Services
          </h3>

          <nav className="flex flex-col items-start gap-3">
            {services.map((service) => (
              <motion.div key={service} whileHover={{ x: 5 }}>
                <h2
                 
                  className="
                    text-sm text-slate-600
                    transition-colors duration-200
                    hover:text-emerald-600
                  "
                >
                  {service}
                </h2>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Contact */}
        <motion.div variants={footerItem}>
          <h3 className="mb-5 text-base font-bold text-slate-900">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <p className="flex items-start gap-2">
              <span aria-hidden="true">📍</span>
              <span>Lahore, Pakistan</span>
            </p>

            <a
              href="tel:+923236304752" 
              className="
                flex items-center gap-2
                transition-colors
                hover:text-emerald-600
              "
            >
              <span aria-hidden="true">📞</span>
              <span>03236304752</span>
            </a>

            <a
              href="mailto:homegreenshine@gmail.com"
              className="
                flex items-start gap-2
                break-all
                transition-colors
                hover:text-emerald-600
              "
            >
              <span aria-hidden="true">✉️</span>
              <span>homegreenshine@gmail.com</span>
            </a>

            <p className="flex items-center gap-2">
              <span aria-hidden="true">🕐</span>
              <span>Mon - Sun: 8AM - 8PM</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="
          border-t border-slate-200
          px-5 py-5
          text-center text-xs text-slate-500
          sm:px-6
        "
      >
        <p>© 2026 Home Green Shine. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}
