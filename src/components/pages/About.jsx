
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FiActivity,
    FiArrowUpRight,
    FiArrowDownRight,
    FiMapPin,
    FiUser,
    FiAward,
    FiBookOpen,
    FiBriefcase,
    FiArrowRight,
} from "react-icons/fi";

import aboutData from "../data/About";
import doctorImage from "../../assets/193417.jpg";
import graduationImage from "../../assets/graduation.jpg";
import conferenceImage from "../../assets/conferance.jpg";
import clinicScrubsImage from "../../assets/clinic-scrubs.jpg";
import operatingRoomImage from "../../assets/operating-room.jpg";

// Option A: Brighter blue brain image
const brainImage =
    "https://www.bnews.com.br/media/uploads/setembro_2024/whatsapp_image_2024-09-06_at_19.04.51.jpeg";

export default function About({
    darkMode = false,
    language = "en",
}) {
    const languageKey =
        language === "dari"
            ? "fa"
            : language === "pashto"
                ? "ps"
                : language;

    const data = aboutData[languageKey] || aboutData.en;
    const isRTL = languageKey === "fa" || languageKey === "ps";

    const galleryImages = [
        {
            image: graduationImage,
            title: "Education",
            description: "Academic journey and learning",
        },
        {
            image: conferenceImage,
            title: "Professional Events",
            description: "Medical conferences and collaboration",
        },
        {
            image: clinicScrubsImage,
            title: "Clinical Practice",
            description: "Professional medical environment",
        },
        {
            image: operatingRoomImage,
            title: "Medical Practice",
            description: "Commitment to patient care",
        },
    ];

    const credentials = [
        {
            icon: <FiBookOpen />,
            title: data.educationTitle || "Education",
            description:
                data.educationDescription ||
                "Academic learning and professional development.",
        },
        {
            icon: <FiAward />,
            title: data.experienceTitle || "Experience",
            description:
                data.experienceDescription ||
                "Building experience through medical practice and continued learning.",
        },
        {
            icon: <FiBriefcase />,
            title: data.professionalTitle || "Professional Commitment",
            description:
                data.professionalDescription ||
                "Dedicated to responsible practice and patient-centered care.",
        },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: "easeOut" },
        },
    };

    const sectionClass = darkMode
        ? "bg-slate-950 text-white"
        : "bg-white text-slate-900";

    const mutedClass = darkMode
        ? "text-slate-300"
        : "text-slate-600";

    const surfaceClass = darkMode
        ? "border-white/10 bg-slate-900"
        : "border-slate-200 bg-white";

    return (
        <main
            dir={isRTL ? "rtl" : "ltr"}
            className={`${sectionClass} overflow-hidden`}
        >
            {/* HERO */}
            <section className="relative isolate min-h-[520px] overflow-hidden bg-sky-100 sm:min-h-[570px] lg:min-h-[620px]">
                {/* Bright brain background */}
                <img
                    src={brainImage}
                    alt="Blue brain illustration representing neuroscience"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    fetchPriority="high"
                />

                {/* Lighter blue overlays */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950/65 via-blue-900/35 to-sky-700/10" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-950/55 via-transparent to-sky-100/10" />

                {/* Soft blue glow */}
                <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

                <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:min-h-[570px] sm:px-8 lg:min-h-[620px] lg:px-12">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl text-white"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-md">
                            <FiActivity className="text-sky-200" />
                            <span>
                                {data.eyebrow || "ABOUT THE DOCTOR"}
                            </span>
                        </div>

                        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            {data.heroTitle || "Committed to Better Healthcare"}
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
                            {data.heroDescription ||
                                "Learn more about the doctor's professional journey, values, and commitment to patient care."}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-blue-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-100"
                            >
                                {data.appointmentButton || "Book an Appointment"}
                                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>

                            <a
                                href="#biography"
                                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
                            >
                                {data.learnMoreButton || "Learn More"}
                                <FiArrowDownRight />
                            </a>
                        </div>

                        <div className="mt-10 flex items-center gap-3 text-sm text-blue-50">
                            <FiMapPin className="shrink-0 text-sky-200" />
                            <span>
                                {data.location || "Kabul, Afghanistan"}
                            </span>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-sky-300 via-blue-500 to-cyan-300" />
            </section>

            {/* BIOGRAPHY */}
            <section
                id="biography"
                className={`px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${darkMode ? "bg-slate-950" : "bg-slate-50"}`}
            >
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="relative mx-auto w-full max-w-lg"
                    >
                        <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-4 border-t-4 border-blue-500 sm:-left-6 sm:-top-6" />

                        <div className="relative overflow-hidden rounded-3xl border border-blue-100 shadow-2xl shadow-blue-900/10">
                            <img
                                src={doctorImage}
                                alt="Dr. Khalid Khan Zadran"
                                className="aspect-[4/5] w-full object-cover object-center"
                                loading="lazy"
                            />

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-xl">
                                        <FiUser />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold sm:text-xl">
                                            Dr. Khalid Khan Zadran
                                        </h3>
                                        <p className="mt-1 text-sm text-blue-100">
                                            {data.doctorSubtitle ||
                                                "Medical Professional"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`absolute -bottom-5 ${isRTL ? "-left-3 sm:-left-5" : "-right-3 sm:-right-5"} rounded-2xl border p-4 shadow-xl sm:p-5 ${surfaceClass}`}>
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-700">
                                    <FiActivity />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">
                                        {data.careLabel || "Patient-Centered Care"}
                                    </p>
                                    <p className={`mt-1 text-xs ${mutedClass}`}>
                                        {data.careSubtitle || "Professional commitment"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -left-5 -z-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            <span className="h-0.5 w-8 bg-blue-600" />
                            {data.biographyEyebrow || "MY JOURNEY"}
                        </p>

                        <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            {data.biographyTitle || "A Journey Built on Knowledge and Care"}
                        </h2>

                        <div className={`mt-7 space-y-5 text-base leading-8 sm:text-lg ${mutedClass}`}>
                            <p>
                                {data.biographyParagraph1 ||
                                    "A professional journey shaped by education, continued learning, and a commitment to healthcare."}
                            </p>

                            <p>
                                {data.biographyParagraph2 ||
                                    "The goal is to approach every responsibility with care, professionalism, and respect for each patient."}
                            </p>

                            <p>
                                {data.biographyParagraph3 ||
                                    "Continuous learning and professional development remain important parts of this journey."}
                            </p>
                        </div>

                        <div className={`mt-8 border-t pt-7 ${darkMode ? "border-white/10" : "border-slate-200"}`}>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white">
                                    <FiActivity />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {data.valuesTitle || "Professional Values"}
                                    </h3>
                                    <p className={`mt-2 leading-7 ${mutedClass}`}>
                                        {data.valuesDescription ||
                                            "Compassion, responsibility, continuous learning, and a thoughtful approach to patient care."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PHOTO GALLERY */}
            <section className={`px-5 py-20 sm:px-8 sm:py-24 lg:px-12 ${sectionClass}`}>
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
                    >
                        <div>
                            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                                <span className="h-0.5 w-8 bg-blue-600" />
                                {data.galleryEyebrow || "MOMENTS & MILESTONES"}
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                {data.galleryTitle || "Professional Journey"}
                            </h2>
                        </div>

                        <p className={`max-w-md leading-7 ${mutedClass}`}>
                            {data.galleryDescription ||
                                "A visual collection of educational and professional moments."}
                        </p>
                    </motion.div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {galleryImages.map((item, index) => (
                            <motion.figure
                                key={item.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                        <p className="text-lg font-bold">
                                            {data.galleryItems?.[index]?.title || item.title}
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-slate-200">
                                            {data.galleryItems?.[index]?.description || item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* CREDENTIALS */}
            <section className={`px-5 py-20 sm:px-8 sm:py-24 lg:px-12 ${darkMode ? "bg-slate-900" : "bg-blue-50/70"}`}>
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mx-auto mb-12 max-w-3xl text-center"
                    >
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            {data.credentialsEyebrow || "BACKGROUND"}
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            {data.credentialsTitle || "Education & Professional Development"}
                        </h2>
                        <p className={`mx-auto mt-5 max-w-2xl leading-7 ${mutedClass}`}>
                            {data.credentialsDescription ||
                                "A commitment to continued learning and professional growth."}
                        </p>
                    </motion.div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {credentials.map((item, index) => (
                            <motion.article
                                key={item.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.12 }}
                                whileHover={{ y: -6 }}
                                className={`rounded-2xl border p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8 ${surfaceClass}`}
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-700">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold">
                                    {item.title}
                                </h3>
                                <p className={`mt-4 leading-7 ${mutedClass}`}>
                                    {item.description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPOINTMENT CTA */}
            <section className={`px-5 py-20 sm:px-8 sm:py-24 lg:px-12 ${sectionClass}`}>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 px-6 py-12 text-white shadow-2xl shadow-blue-900/15 sm:px-12 sm:py-16 lg:px-16"
                >
                    <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border-[45px] border-white/5" />
                    <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />

                    <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
                                <FiActivity className="text-sky-200" />
                                {data.ctaEyebrow || "HERE TO HELP"}
                            </div>

                            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                                {data.ctaTitle || "Your Health Deserves Thoughtful Care"}
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
                                {data.ctaDescription ||
                                    "Get in touch to learn more or discuss your healthcare needs."}
                            </p>
                        </div>

                        <Link
                            to="/contact"
                            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-100"
                        >
                            {data.ctaButton || "Contact Us"}
                            <FiArrowRight className={`transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
