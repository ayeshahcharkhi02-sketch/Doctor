
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiActivity,
    FiArrowRight,
    FiArrowUpRight,
    FiCheckCircle,
    FiHeart,
    FiLayers,
    FiTarget,
    FiZap,
    FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import serviceData from "../data/Service";

const serviceIcons = {
    brain: FiActivity,
    spine: FiLayers,
    nerve: FiZap,
    evaluation: FiTarget,
};

export default function Service({
    darkMode = false,
    language = "en",
}) {
    const languageKey =
        language === "dari"
            ? "fa"
            : language === "pashto"
                ? "ps"
                : language;

    const data = serviceData[languageKey] || serviceData.en;
    const isRTL = languageKey === "fa" || languageKey === "ps";

    const [activeService, setActiveService] = useState(0);

    const selectedService = data.services[activeService] || data.services[0];
    const SelectedIcon = serviceIcons[selectedService.icon] || FiActivity;

    const mutedText = darkMode
        ? "text-slate-400"
        : "text-slate-600";

    const borderStyle = darkMode
        ? "border-slate-800"
        : "border-slate-200";

    const panelStyle = darkMode
        ? "border-slate-800 bg-slate-900"
        : "border-slate-200 bg-white";

    const fadeUp = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main
            dir={isRTL ? "rtl" : "ltr"}
            lang={languageKey}
            className={`min-h-screen overflow-hidden ${darkMode
                    ? "bg-slate-950 text-white"
                    : "bg-slate-50 text-slate-900"
                }`}
        >
            {/* HERO */}
            <section className="relative px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-16">
                <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.65 }}
                    className="relative mx-auto max-w-7xl"
                >
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-bold tracking-wide text-blue-600 dark:text-blue-400">
                        <FiHeart size={17} />
                        {data.label}
                    </div>

                    <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                        {data.heading}
                    </h1>

                    <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <p className={`max-w-2xl text-lg leading-8 sm:text-xl ${mutedText}`}>
                            {data.description}
                        </p>

                        <Link
                            to="/appointment"
                            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
                        >
                            {data.appointmentButton}
                            <FiArrowUpRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* INTERACTIVE SERVICE SELECTOR */}
            <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                            {data.selectorLabel}
                        </p>

                        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                    {data.selectorTitle}
                                </h2>

                                <p className={`mt-3 text-base leading-7 sm:text-lg ${mutedText}`}>
                                    {data.selectorDescription}
                                </p>
                            </div>

                            <p className={`shrink-0 text-sm font-semibold ${mutedText}`}>
                                {String(data.services.length).padStart(2, "0")}{" "}
                                {data.serviceCountLabel}
                            </p>
                        </div>
                    </motion.div>

                    {/* CLICKABLE SERVICE TABS */}
                    <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                        {data.services.map((service, index) => {
                            const Icon =
                                serviceIcons[service.icon] || FiActivity;

                            const isActive = activeService === index;

                            return (
                                <motion.button
                                    key={service.id}
                                    type="button"
                                    onClick={() => setActiveService(index)}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    aria-pressed={isActive}
                                    className={`relative flex min-h-32 flex-col items-start justify-between overflow-hidden rounded-2xl border p-4 text-start transition-all duration-300 sm:min-h-36 sm:p-5 ${isActive
                                            ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                            : `${panelStyle} hover:border-blue-400`
                                        }`}
                                >
                                    <div className="flex w-full items-center justify-between gap-2">
                                        <span
                                            className={`flex h-10 w-10 items-center justify-center rounded-xl ${isActive
                                                    ? "bg-white/15 text-white"
                                                    : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                                }`}
                                        >
                                            <Icon size={22} />
                                        </span>

                                        <span
                                            className={`text-xs font-bold ${isActive
                                                    ? "text-blue-100"
                                                    : mutedText
                                                }`}
                                        >
                                            0{service.id}
                                        </span>
                                    </div>

                                    <span className="mt-5 text-base font-bold leading-6 sm:text-lg">
                                        {service.shortTitle}
                                    </span>

                                    {isActive && (
                                        <motion.span
                                            layoutId="service-active-indicator"
                                            className="absolute bottom-0 left-4 right-4 h-1 rounded-t-full bg-white/80"
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* SELECTED SERVICE DETAIL PANEL */}
                    <AnimatePresence mode="wait">
                        <motion.article
                            key={`${languageKey}-${selectedService.id}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className={`relative overflow-hidden rounded-3xl border ${panelStyle}`}
                        >
                            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-2xl" />

                            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
                                {/* MAIN DESCRIPTION */}
                                <div className="p-6 sm:p-9 lg:p-12">
                                    <div className="mb-7 flex flex-wrap items-center gap-3">
                                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                            <SelectedIcon size={29} />
                                        </span>

                                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                            {data.selectedLabel} · 0{selectedService.id}
                                        </span>
                                    </div>

                                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                                        {data.consultationLabel}
                                    </p>

                                    <h3 className="max-w-2xl text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                                        {selectedService.title}
                                    </h3>

                                    <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${mutedText}`}>
                                        {selectedService.description}
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <Link
                                            to="/appointment"
                                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                                        >
                                            {data.appointmentButton}
                                            <FiArrowUpRight size={19} />
                                        </Link>

                                        {selectedService.area && (
                                            <Link
                                                to={`/procedures?area=${selectedService.area}`}
                                                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 py-3 font-bold transition duration-300 hover:border-blue-500 hover:text-blue-500 ${borderStyle}`}
                                            >
                                                {data.proceduresButton}
                                                <FiArrowUpRight size={18} />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                {/* WHAT TO EXPECT */}
                                <div
                                    className={`border-t p-6 sm:p-9 lg:border-t-0 ${isRTL
                                            ? "lg:border-r"
                                            : "lg:border-l"
                                        } ${borderStyle} ${darkMode
                                            ? "bg-slate-950/50"
                                            : "bg-slate-50/80"
                                        } lg:p-10`}
                                >
                                    <p className="mb-7 text-sm font-extrabold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                                        {data.pointsTitle}
                                    </p>

                                    <ul className="space-y-6">
                                        {selectedService.points.map(
                                            (point, index) => (
                                                <motion.li
                                                    key={point}
                                                    initial={{
                                                        opacity: 0,
                                                        x: isRTL ? 12 : -12,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.35,
                                                        delay: index * 0.08,
                                                    }}
                                                    className="flex items-start gap-4"
                                                >
                                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                                        <FiCheckCircle size={19} />
                                                    </span>

                                                    <span className="pt-1 text-base leading-7">
                                                        {point}
                                                    </span>
                                                </motion.li>
                                            )
                                        )}
                                    </ul>

                                    <div className={`mt-9 border-t pt-6 ${borderStyle}`}>
                                        <div className="flex items-start gap-3">
                                            <FiMapPin className="mt-1 shrink-0 text-blue-600 dark:text-blue-400" size={20} />

                                            <div>
                                                <p className="font-bold">
                                                    Dr. Khalid Khan Zadran
                                                </p>

                                                <p className={`mt-1 text-sm leading-6 ${mutedText}`}>
                                                    Rifah Medical Complex, Kabul, Afghanistan
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    </AnimatePresence>

                    {/* SERVICE NAVIGATION */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <p className={`text-sm ${mutedText}`}>
                            {String(activeService + 1).padStart(2, "0")} /{" "}
                            {String(data.services.length).padStart(2, "0")}
                        </p>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveService((current) =>
                                        current === 0
                                            ? data.services.length - 1
                                            : current - 1
                                    )
                                }
                                className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-blue-500 hover:text-blue-500 ${borderStyle}`}
                                aria-label="Previous service"
                            >
                                <FiArrowRight
                                    className={isRTL ? "" : "rotate-180"}
                                    size={20}
                                />
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setActiveService((current) =>
                                        (current + 1) % data.services.length
                                    )
                                }
                                className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-blue-500 hover:text-blue-500 ${borderStyle}`}
                                aria-label="Next service"
                            >
                                <FiArrowRight
                                    className={isRTL ? "rotate-180" : ""}
                                    size={20}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* APPOINTMENT CTA */}
            <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 p-8 text-white sm:p-12 lg:p-16"
                >
                    <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
                    <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                                {data.cta.eyebrow}
                            </p>

                            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                                {data.cta.heading}
                            </h2>

                            <p className="mt-5 text-base leading-8 text-blue-100 sm:text-lg">
                                {data.cta.description}
                            </p>
                        </div>

                        <Link
                            to="/appointment"
                            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-extrabold text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
                        >
                            {data.cta.button}
                            <FiArrowUpRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
