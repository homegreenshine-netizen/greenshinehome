"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useMotionVariants, mobileMenuVariants, staggerContainer, fadeUp } from "./motion/animations";
import AnimatedButton from "./motion/AnimatedButton";

const NAV_ITEMS: string[] = ["Home"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);



  const closeMenu = () => setMenuOpen(false);

  const containerVariants = useMotionVariants(staggerContainer);
  const itemVariants = useMotionVariants(fadeUp);
  const menuVariants = useMotionVariants(mobileMenuVariants);

  // Custom mobile links stagger that isn't quite covered by standard staggerContainer due to custom stagger delay per index
  const mobileLinks = useMotionVariants({
    hidden: { opacity: 0, x: -15 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: index * 0.06, ease: "easeOut" },
    }),
  } as any);

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-slate-200/80
        bg-white/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto flex h-20
          max-w-6xl
          items-center justify-between
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* =========================
            Logo
        ========================== */}
        {/* =========================
            Logo
        ========================== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/logo.png"
                alt="Home Green Shine"
                width={120}
                height={70}
                priority
                className="h-[70px] w-auto object-contain"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* =========================
            Mobile Menu Button
        ========================== */}
        <AnimatedButton
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="
            relative
            inline-flex h-10 w-10
            items-center justify-center
            rounded-lg
            text-slate-900
            transition-colors
            hover:bg-slate-100
            md:hidden
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="text-xl"
              >
                ✕
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="text-2xl"
              >
                ☰
              </motion.span>
            )}
          </AnimatePresence>
        </AnimatedButton>

        {/* =========================
            Desktop Navigation
        ========================== */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            hidden
            md:flex md:items-center
            md:gap-8
          "
        >
          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const href =
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase()}`;

              return (
                <motion.div
                  key={item}
                  variants={itemVariants}
                >
                  <Link
                    href={href}
                    className="
                      group relative
                      rounded-none
                      px-0 py-2
                      text-sm font-medium
                      text-slate-600
                      transition-colors
                      duration-200
                      hover:text-emerald-700
                    "
                  >
                    <motion.span
                      whileHover={{ y: -1 }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>

                    {/* Animated underline */}
                    <span
                      className="
                        absolute
                        bottom-0 left-0
                        h-0.5 w-0
                        bg-emerald-500
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Book Now */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/booking"
                className="
                  ml-2
                  block
                  rounded-xl
                  bg-gradient-to-br
                  from-emerald-500
                  to-emerald-700
                  px-5 py-2.5
                  text-center
                  text-sm font-semibold
                  text-white
                  shadow-[0_4px_14px_rgba(16,185,129,0.25)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_6px_20px_rgba(16,185,129,0.35)]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-emerald-500/20
                "
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>

      {/* =========================
          Mobile Navigation
      ========================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              absolute left-0 right-0 top-20
              border-b border-slate-200
              bg-white
              px-4 py-5
              shadow-lg
              md:hidden
            "
          >
            {/* Mobile Links */}
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, index) => {
                const href =
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase()}`;

                return (
                  <motion.div
                    key={item}
                    custom={index}
                    variants={mobileLinks}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className="
                        group relative
                        flex items-center
                        rounded-lg
                        px-3 py-3
                        text-sm font-medium
                        text-slate-600
                        transition-all
                        duration-200
                        hover:bg-emerald-50
                        hover:text-emerald-700
                      "
                    >
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="inline-block"
                      >
                        {item}
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Book Now */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 block w-full"
              >
                <Link
                  href="/booking"
                  onClick={closeMenu}
                  className="
                    block
                    rounded-xl
                    bg-gradient-to-br
                    from-emerald-500
                    to-emerald-700
                    px-6 py-3
                    text-center
                    text-sm font-semibold
                    text-white
                    shadow-[0_4px_14px_rgba(16,185,129,0.25)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_6px_20px_rgba(16,185,129,0.35)]
                  "
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
