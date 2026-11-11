
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
    FiArrowUpRight,
    FiArrowRight,
    FiMapPin,
    FiPhone,
    FiCalendar,
    FiActivity,
    FiCheckCircle,
    FiHeart,
    FiShield,
    FiClock,
} from "react-icons/fi";

import { homeData } from "../data/Home";
import doctorImage from "../../assets/doctor.jpg";

export default function Home({ darkMode, language }) {
    const t =
        homeData.translations[language] || homeData.translations.en;

    const isRTL = language === "fa" || language === "ps";

    const services = [
        { number: "01", title: t.brainService, icon: FiActivity },
        { number: "02", title: t.spineService, icon: FiActivity },
        { number: "03", title: t.nerveService, icon: FiHeart },
        { number: "04", title: t.evaluationService, icon: FiCheckCircle },
    ];

    const procedures = [
        t.tumor,
        t.disc,
        t.hydrocephalus,
        t.stenosis,
        t.carpal,
        t.headInjury,
    ];

    const steps = [
        {
            title: t.stepOneTitle,
            description: t.stepOneDescription,
        },
        {
            title: t.stepTwoTitle,
            description: t.stepTwoDescription,
        },
        {
            title: t.stepThreeTitle,
            description: t.stepThreeDescription,
        },
    ];

    const points = [
        {
            title: t.pointOne,
            description: t.pointOneDescription,
        },
        {
            title: t.pointTwo,
            description: t.pointTwoDescription,
        },
        {
            title: t.pointThree,
            description: t.pointThreeDescription,
        },
    ];

    const sectionClass = darkMode
        ? "bg-[#101827] text-white"
        : "bg-[#f7f9fc] text-slate-900";

    const cardClass = darkMode
        ? "border-white/10 bg-white/[0.04]"
        : "border-slate-200 bg-white";

    const mutedClass = darkMode
        ? "text-slate-300"
        : "text-slate-600";

    const secondarySection = darkMode
        ? "bg-[#0b1220]"
        : "bg-white";

    const fadeUp = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const phoneLink = `tel:${homeData.doctor.phone.replace(/\s/g, "")}`;

    const doctorImageAlt =
        homeData.doctor.imageAlt?.[language] ||
        homeData.doctor.imageAlt?.en ||
        "Dr. Khalid Khan Zadran";

    return (
        <main
            dir={isRTL ? "rtl" : "ltr"}
            className={`overflow-hidden transition-colors duration-300 ${sectionClass}`}
        >
            {/* HERO */}

            <section className="relative px-5 pb-20 pt-14 sm:px-8 lg:px-16 lg:py-24">
                <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#3978E5]/10 blur-3xl" />

                <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#3978E5]/10 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.div
                            variants={fadeUp}
                            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#3978E5]/20 bg-[#3978E5]/10 px-4 py-2"
                        >
                            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#3978E5]" />

                            <span className="text-sm font-bold text-[#3978E5]">
                                {t.badge}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                        >
                            {homeData.doctor.name}
                        </motion.h1>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-4 text-xl font-semibold text-[#3978E5] sm:text-2xl"
                        >
                            {t.consultant}
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-2 text-base font-medium sm:text-lg"
                        >
                            {t.specialty}
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className={`mt-7 max-w-xl text-base leading-8 sm:text-lg ${mutedClass}`}
                        >
                            {t.introduction}
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-9 flex flex-wrap gap-4"
                        >
                            <Link
                                to="/appointment"
                                className="group inline-flex items-center gap-3 rounded-xl bg-[#3978E5] px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-600"
                            >
                                <FiCalendar className="text-xl" />
                                {t.book}
                                <FiArrowUpRight className="text-xl transition-transform group-hover:-translate-y-1" />
                            </Link>

                            <Link
                                to="/services"
                                className={`inline-flex items-center gap-3 rounded-xl border px-6 py-4 font-semibold transition hover:border-[#3978E5] hover:text-[#3978E5] ${darkMode
                                        ? "border-white/15"
                                        : "border-slate-300"
                                    }`}
                            >
                                {t.viewServices}

                                <FiArrowRight
                                    className={`text-lg ${isRTL ? "rotate-180" : ""
                                        }`}
                                />
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className={`mt-10 flex flex-wrap gap-5 border-t pt-7 ${darkMode
                                    ? "border-white/10"
                                    : "border-slate-200"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3978E5]/10 text-[#3978E5]">
                                    <FiShield className="text-xl" />
                                </span>

                                <div>
                                    <p className="font-semibold">
                                        {t.consultant}
                                    </p>
                                    <p className={`text-sm ${mutedClass}`}>
                                        {t.specialistCare}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3978E5]/10 text-[#3978E5]">
                                    <FiActivity className="text-xl" />
                                </span>

                                <div>
                                    <p className="font-semibold">
                                        {t.brainSpine}
                                    </p>
                                    <p className={`text-sm ${mutedClass}`}>
                                        {t.specialistCare}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* DOCTOR IMAGE */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            x: isRTL ? -25 : 25,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto w-full max-w-lg"
                    >
                        <div className="absolute -inset-4 rounded-[2rem] bg-[#3978E5]/10 blur-xl" />

                        <div className="relative overflow-hidden rounded-[2rem] border border-[#3978E5]/15 bg-[#e9f0fc] shadow-2xl">
                            <img
                                src={doctorImage}
                                alt={doctorImageAlt}
                                className="h-[430px] w-full object-cover object-top sm:h-[540px]"
                            />

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent p-6 pt-28 sm:p-8">
                                <p className="text-sm font-medium text-blue-200">
                                    {t.doctorLabel}
                                </p>

                                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                    {homeData.doctor.name}
                                </h2>

                                <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
                                    <FiMapPin className="shrink-0 text-lg" />
                                    {homeData.doctor.clinic},{" "}
                                    {homeData.doctor.address}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT STRIP */}

            <section className="px-5 sm:px-8 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
                    <motion.a
                        whileHover={{ y: -5 }}
                        href={phoneLink}
                        className={`flex items-center gap-4 rounded-2xl border p-5 transition hover:border-[#3978E5]/50 ${cardClass}`}
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3978E5]/10 text-[#3978E5]">
                            <FiPhone className="text-xl" />
                        </span>

                        <div>
                            <p className={`text-sm ${mutedClass}`}>
                                {t.callClinic}
                            </p>
                            <p className="mt-1 font-bold">
                                {homeData.doctor.phone}
                            </p>
                        </div>

                        <FiArrowUpRight className="ml-auto text-xl text-[#3978E5]" />
                    </motion.a>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className={`flex items-center gap-4 rounded-2xl border p-5 ${cardClass}`}
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3978E5]/10 text-[#3978E5]">
                            <FiClock className="text-xl" />
                        </span>

                        <div>
                            <p className={`text-sm ${mutedClass}`}>
                                {t.howItWorks}
                            </p>
                            <p className="mt-1 font-bold">
                                {t.callClinic}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className={`flex items-center gap-4 rounded-2xl border p-5 ${cardClass}`}
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3978E5]/10 text-[#3978E5]">
                            <FiMapPin className="text-xl" />
                        </span>

                        <div>
                            <p className={`text-sm ${mutedClass}`}>
                                {t.clinic}
                            </p>
                            <p className="mt-1 font-bold">
                                {homeData.doctor.address}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES */}

            <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
                    >
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3978E5]">
                                {t.areas}
                            </p>

                            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                {t.servicesTitle}
                            </h2>

                            <p className={`mt-5 text-base leading-8 sm:text-lg ${mutedClass}`}>
                                {t.servicesDescription}
                            </p>
                        </div>

                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 font-semibold text-[#3978E5]"
                        >
                            {t.allServices}
                            <FiArrowUpRight className="text-xl" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={stagger}
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={service.number}
                                    variants={fadeUp}
                                    whileHover={{ y: -8 }}
                                    className={`group rounded-2xl border p-6 transition hover:border-[#3978E5]/50 hover:shadow-xl sm:p-7 ${cardClass}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-[#3978E5]">
                                            {service.number}
                                        </span>

                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3978E5]/10 text-[#3978E5] transition group-hover:bg-[#3978E5] group-hover:text-white">
                                            <Icon className="text-2xl" />
                                        </span>
                                    </div>

                                    <h3 className="mt-8 text-xl font-bold leading-snug">
                                        {service.title}
                                    </h3>

                                    <p className={`mt-4 text-sm leading-7 ${mutedClass}`}>
                                        {t.serviceDescription}
                                    </p>

                                    <Link
                                        to="/appointment"
                                        className="mt-6 inline-flex items-center gap-2 font-semibold text-[#3978E5]"
                                    >
                                        {t.requestConsultation}
                                        <FiArrowUpRight />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ABOUT THE DOCTOR */}

            <section
                className={`px-5 py-20 sm:px-8 lg:px-16 lg:py-28 ${secondarySection}`}
            >
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: isRTL ? 30 : -30,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-2 border-t-2 border-[#3978E5]/50" />

                        <img
                            src={doctorImage}
                            alt={doctorImageAlt}
                            className="relative h-[360px] w-full rounded-3xl object-cover object-top shadow-xl sm:h-[470px]"
                        />

                        <div className="absolute -bottom-5 -right-4 rounded-2xl bg-[#3978E5] p-5 text-white shadow-xl sm:p-6">
                            <FiActivity className="mb-2 text-3xl" />
                            <p className="text-lg font-bold">
                                {t.brainSpine}
                            </p>
                            <p className="mt-1 text-sm text-white/80">
                                {t.specialistCare}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3978E5]">
                            {t.meetDoctor}
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            {t.whyChoose}
                        </h2>

                        <p className={`mt-6 text-base leading-8 sm:text-lg ${mutedClass}`}>
                            {t.whyDescription}
                        </p>

                        <div className="mt-8 space-y-5">
                            {points.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3978E5]/10 text-[#3978E5]">
                                        <FiCheckCircle className="text-lg" />
                                    </span>

                                    <div>
                                        <h3 className="font-bold">
                                            {point.title}
                                        </h3>

                                        <p className={`mt-1 leading-7 ${mutedClass}`}>
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/about"
                            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#3978E5] px-6 py-4 font-semibold text-white transition hover:bg-blue-600"
                        >
                            {t.readProfile}
                            <FiArrowUpRight className="text-xl" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* PROCEDURES */}

            <section className="px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="mx-auto mb-12 max-w-3xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3978E5]">
                            {t.proceduresLabel}
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            {t.proceduresTitle}
                        </h2>

                        <p className={`mt-5 text-base leading-8 sm:text-lg ${mutedClass}`}>
                            {t.proceduresDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={stagger}
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {procedures.map((procedure, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                                className={`flex items-center gap-4 rounded-xl border p-5 transition hover:border-[#3978E5]/50 ${cardClass}`}
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3978E5]/10 text-[#3978E5]">
                                    <FiCheckCircle className="text-xl" />
                                </span>

                                <p className="font-semibold leading-7">
                                    {procedure}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="mt-10 text-center">
                        <Link
                            to="/procedures"
                            className="inline-flex items-center gap-3 rounded-xl border border-[#3978E5]/40 px-6 py-4 font-semibold text-[#3978E5] transition hover:bg-[#3978E5] hover:text-white"
                        >
                            {t.allProcedures}
                            <FiArrowUpRight className="text-xl" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}

            <section
                className={`px-5 py-20 sm:px-8 lg:px-16 lg:py-28 ${secondarySection}`}
            >
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        className="mx-auto mb-14 max-w-3xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3978E5]">
                            {t.howItWorks}
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            {t.simpleCare}
                        </h2>

                        <p className={`mt-5 text-base leading-8 sm:text-lg ${mutedClass}`}>
                            {t.stepsDescription}
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                        className="grid gap-8 md:grid-cols-3"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -5 }}
                                className="relative"
                            >
                                <div
                                    className={`h-full rounded-2xl border p-7 sm:p-8 ${cardClass}`}
                                >
                                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3978E5] text-xl font-bold text-white shadow-lg shadow-blue-500/20">
                                        0{index + 1}
                                    </span>

                                    <h3 className="mt-7 text-xl font-bold sm:text-2xl">
                                        {step.title}
                                    </h3>

                                    <p className={`mt-4 leading-8 ${mutedClass}`}>
                                        {step.description}
                                    </p>
                                </div>

                                {index < 2 && (
                                    <FiArrowRight
                                        className={`absolute top-1/2 hidden -translate-y-1/2 text-2xl text-[#3978E5] lg:block ${isRTL
                                                ? "-left-5 rotate-180"
                                                : "-right-5"
                                            }`}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* APPOINTMENT CTA */}

            <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#3978E5] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20"
                >
                    <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />

                    <div className="pointer-events-none absolute -bottom-32 -left-10 h-72 w-72 rounded-full border-[50px] border-white/10" />

                    <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                                <FiCalendar />
                                {t.startHere}
                            </span>

                            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                {t.readyTitle}
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
                                {t.readyDescription}
                            </p>
                        </div>

                        <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
                            <Link
                                to="/appointment"
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-[#3978E5] transition hover:-translate-y-1 hover:bg-blue-50"
                            >
                                {t.book}
                                <FiArrowUpRight className="text-xl" />
                            </Link>

                            <a
                                href={phoneLink}
                                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                            >
                                <FiPhone className="text-lg" />
                                {t.callClinic}
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* FOOTER */}

            <footer
                className={`border-t px-5 py-8 sm:px-8 lg:px-16 ${darkMode
                        ? "border-white/10 bg-[#0b1220]"
                        : "border-slate-200 bg-white"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
                    <div>
                        <p className="font-bold">
                            {homeData.doctor.name}
                        </p>

                        <p className={`mt-1 text-sm ${mutedClass}`}>
                            {t.doctorLabel} · {t.location}
                        </p>
                    </div>

                    <p className={`text-sm ${mutedClass}`}>
                        {t.footer}
                    </p>
                </div>
            </footer>
        </main>
    );
}
