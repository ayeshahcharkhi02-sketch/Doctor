import React from "react";
import { motion } from "framer-motion";
import {
    FiMapPin,
    FiPhone,
    FiMessageCircle,
    FiArrowUpRight,
    FiExternalLink,
    FiFacebook,
    FiLinkedin,
    FiNavigation,
    FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { contactData, contactDetails } from "../data/Contact";

export default function Contact({ darkMode = false, language = "en" }) {
    const content = contactData[language] || contactData.en;
    const isRTL = language === "fa" || language === "ps";

    const socialProfiles = [
        {
            name: content.facebook,
            icon: FiFacebook,
            url: contactDetails.facebook,
        },
        {
            name: content.linkedin,
            icon: FiLinkedin,
            url: contactDetails.linkedin,
        },
    ];

    const contactCards = [
        {
            icon: FiMapPin,
            title: content.addressTitle,
            description: content.address,
            action: content.mapButton,
            href: contactDetails.googleMaps,
            external: true,
        },
        {
            icon: FiPhone,
            title: content.phoneTitle,
            description: contactDetails.phoneDisplay,
            action: content.phoneTitle,
            href: `tel:${contactDetails.phone}`,
            external: false,
        },
        {
            icon: FiMessageCircle,
            title: "WhatsApp",
            description: content.followText,
            action: content.whatsapp,
            href: contactDetails.whatsapp,
            external: true,
        },
    ];

    return (
        <main
            dir={isRTL ? "rtl" : "ltr"}
            className={`min-h-screen overflow-hidden transition-colors duration-300 ${darkMode
                    ? "bg-[#0b1120] text-white"
                    : "bg-[#f7f9fc] text-slate-900"
                }`}
        >
            {/* HERO */}
            <section className="relative px-5 pb-14 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                        className="max-w-3xl"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-[#3978E5]" />
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#3978E5]">
                                {content.eyebrow}
                            </span>
                        </div>

                        <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                            {content.title}
                            <span className="text-[#3978E5]">.</span>
                        </h1>

                        <p
                            className={`mt-6 max-w-2xl text-lg leading-8 sm:text-xl ${darkMode ? "text-slate-300" : "text-slate-600"
                                }`}
                        >
                            {content.subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href={contactDetails.whatsapp}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 rounded-full bg-[#3978E5] px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
                            >
                                <FiMessageCircle size={19} />
                                {content.whatsapp}
                                <FiArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                            <a
                                href={`tel:${contactDetails.phone}`}
                                className={`inline-flex items-center gap-3 rounded-full border px-6 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 ${darkMode
                                        ? "border-slate-700 bg-slate-900/60 hover:border-blue-400"
                                        : "border-slate-200 bg-white hover:border-blue-400"
                                    }`}
                            >
                                <FiPhone size={18} className="text-[#3978E5]" />
                                {contactDetails.phoneDisplay}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
                    {contactCards.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noreferrer" : undefined}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                whileHover={{ y: -7 }}
                                className={`group relative overflow-hidden rounded-3xl border p-7 transition-colors duration-300 sm:p-8 ${darkMode
                                        ? "border-slate-800 bg-[#111a2c] hover:border-blue-500/60"
                                        : "border-slate-200/80 bg-white hover:border-blue-300"
                                    }`}
                            >
                                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/5 transition-transform duration-500 group-hover:scale-150" />

                                <div className="relative">
                                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-[#3978E5] transition duration-300 group-hover:rotate-3 group-hover:bg-[#3978E5] group-hover:text-white">
                                        <Icon size={25} />
                                    </div>

                                    <h2 className="text-xl font-bold">{item.title}</h2>

                                    <p
                                        className={`mt-3 min-h-[56px] break-words text-base leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"
                                            }`}
                                    >
                                        {item.description}
                                    </p>

                                    <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#3978E5]">
                                        {item.action}
                                        <FiArrowUpRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </section>

            {/* SOCIAL LINKS */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className={`mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl border p-7 sm:p-10 lg:flex-row lg:items-center ${darkMode
                            ? "border-slate-800 bg-[#111a2c]"
                            : "border-slate-200 bg-white"
                        }`}
                >
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#3978E5]">
                            {content.followTitle}
                        </span>

                        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                            Stay connected
                        </h2>

                        <p
                            className={`mt-3 leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"
                                }`}
                        >
                            {content.followText}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {socialProfiles.map((social) => {
                            const Icon = social.icon;

                            const className = `inline-flex items-center gap-3 rounded-2xl border px-5 py-4 font-semibold transition duration-300 ${darkMode
                                    ? "border-slate-700 hover:border-blue-400 hover:bg-blue-500/10"
                                    : "border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                                }`;

                            return social.url ? (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={className}
                                >
                                    <Icon size={20} className="text-[#3978E5]" />
                                    {social.name}
                                    <FiExternalLink size={15} />
                                </a>
                            ) : (
                                <div key={social.name} className={className}>
                                    <Icon size={20} className="text-[#3978E5]" />
                                    {social.name}
                                </div>
                            );
                        })}

                        <a
                            href={contactDetails.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 rounded-2xl bg-[#3978E5] px-5 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
                        >
                            <FiMessageCircle size={20} />
                            WhatsApp
                            <FiArrowUpRight size={17} />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* MAP */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
                    >
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#3978E5]" />
                                <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#3978E5]">
                                    <FiNavigation className="mr-2 inline-block" />
                                    {content.mapTitle}
                                </span>
                            </div>

                            <h2 className="text-3xl font-black sm:text-4xl">
                                Visit the clinic
                            </h2>

                            <p
                                className={`mt-3 text-base leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"
                                    }`}
                            >
                                {content.address}
                            </p>
                        </div>

                        <a
                            href={contactDetails.googleMaps}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#3978E5]/30 px-5 py-3 font-semibold text-[#3978E5] transition duration-300 hover:bg-[#3978E5] hover:text-white"
                        >
                            {content.mapButton}
                            <FiExternalLink size={17} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6 }}
                        className={`overflow-hidden rounded-3xl border p-2 shadow-xl ${darkMode
                                ? "border-slate-800 bg-[#111a2c] shadow-black/20"
                                : "border-slate-200 bg-white shadow-slate-200/50"
                            }`}
                    >
                        <iframe
                            title="Map showing Rifah Medical Complex in Kabul"
                            src={contactDetails.mapEmbed}
                            width="100%"
                            height="430"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl border-0"
                        />

                        <div
                            className={`flex items-start gap-3 px-4 py-4 sm:px-6 ${darkMode ? "text-slate-300" : "text-slate-600"
                                }`}
                        >
                            <FiClock
                                size={20}
                                className="mt-1 shrink-0 text-[#3978E5]"
                            />
                            <p className="text-sm leading-6">{content.mapDescription}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* APPOINTMENT CTA */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#3978E5] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16"
                >
                    <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
                    <div className="pointer-events-none absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                                Dr. Khalid Khan Zadran
                            </p>

                            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                                Ready to discuss your concerns?
                            </h2>

                            <p className="mt-4 max-w-xl text-lg leading-8 text-blue-50">
                                Contact the clinic to ask about a consultation for brain,
                                spine, or nerve conditions.
                            </p>
                        </div>

                        <Link
                            to="/appointment"
                            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-[#245ec3] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            {content.appointmentButton}
                            <FiArrowUpRight
                                size={20}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* EMERGENCY NOTE */}
            <div
                className={`border-t px-5 py-6 text-center sm:px-8 ${darkMode
                        ? "border-slate-800 bg-[#080d18]"
                        : "border-slate-200 bg-white"
                    }`}
            >
                <p
                    className={`text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                >
                    <span className="font-bold text-[#3978E5]">Important: </span>
                    {content.note}
                </p>
            </div>
        </main>
    );
}