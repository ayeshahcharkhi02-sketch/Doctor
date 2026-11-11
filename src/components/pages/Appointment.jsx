
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiCalendar,
    FiPhone,
    FiMessageCircle,
    FiMapPin,
    FiArrowUpRight,
    FiCheckCircle,
    FiShield,
    FiClock,
    FiArrowRight,
} from "react-icons/fi";
import appointmentData from "../data/Appointment";

export default function Appointment({
    darkMode = false,
    language = "en",
}) {
    const normalizedLanguage =
        language === "dari" ? "fa" :
            language === "pashto" ? "ps" :
                language;

    const data = appointmentData[normalizedLanguage] || appointmentData.en;
    const isRTL = normalizedLanguage === "fa" || normalizedLanguage === "ps";

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        date: "",
        contactMethod: "phoneCall",
        message: "",
    });

    const [showNotice, setShowNotice] = useState(false);

    // Local date in YYYY-MM-DD format for the date input.
    const now = new Date();
    const today = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
    ].join("-");

    const mutedText = darkMode
        ? "text-slate-300"
        : "text-slate-600";

    const cardStyle = darkMode
        ? "border-slate-800 bg-slate-900"
        : "border-slate-200 bg-white";

    const inputStyle = `mt-2 w-full rounded-xl border px-4 py-4 text-base outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${darkMode
            ? "border-slate-700 bg-slate-950 text-white placeholder:text-slate-500"
            : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
        }`;

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setShowNotice(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Demo only: no network request or data storage.
        setForm({
            fullName: "",
            phone: "",
            date: "",
            contactMethod: "phoneCall",
            message: "",
        });

        setShowNotice(true);
    }

    return (
        <main
            dir={isRTL ? "rtl" : "ltr"}
            className={`min-h-screen overflow-hidden ${darkMode
                    ? "bg-slate-950 text-white"
                    : "bg-slate-50 text-slate-900"
                }`}
        >
            {/* HERO */}
            <section className="relative px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-16">
                <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative mx-auto max-w-7xl"
                >
                    <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-sm font-bold tracking-wide text-blue-500">
                        <FiCalendar size={19} />
                        {data.label}
                    </div>

                    <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                        {data.heading}{" "}
                        <span className="text-blue-500">
                            {data.highlight}
                        </span>
                    </h1>

                    <p className={`mt-7 max-w-2xl text-lg leading-8 sm:text-xl ${mutedText}`}>
                        {data.description}
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-3">
                            <FiShield className="text-blue-500" size={19} />
                            <span>{data.privacyTitle}</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-3">
                            <FiClock className="text-blue-500" size={19} />
                            <span>{data.demoNotice}</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* FORM AND CONTACT DETAILS */}
            <section className="px-5 pb-24 sm:px-8 lg:px-16">
                <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
                    {/* APPOINTMENT FORM */}
                    <motion.section
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.65 }}
                        className={`relative overflow-hidden rounded-3xl border p-6 shadow-sm sm:p-9 lg:p-10 ${cardStyle}`}
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />

                        <div className="mb-9">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                                <FiCalendar size={27} />
                            </div>

                            <h2 className="text-2xl font-bold sm:text-3xl">
                                {data.formTitle}
                            </h2>

                            <p className={`mt-3 text-base leading-7 ${mutedText}`}>
                                {data.formDescription}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-7">
                            {/* FULL NAME */}
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="text-base font-semibold"
                                >
                                    {data.fields.fullName}
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    maxLength={100}
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder={data.fields.fullNamePlaceholder}
                                    className={inputStyle}
                                />
                            </div>

                            {/* PHONE */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="text-base font-semibold"
                                >
                                    {data.fields.phone}
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    maxLength={30}
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder={data.fields.phonePlaceholder}
                                    className={inputStyle}
                                />
                            </div>

                            {/* PREFERRED DATE */}
                            <div>
                                <label
                                    htmlFor="date"
                                    className="text-base font-semibold"
                                >
                                    {data.fields.date}
                                </label>

                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    min={today}
                                    required
                                    value={form.date}
                                    onChange={handleChange}
                                    className={inputStyle}
                                />
                            </div>

                            {/* CONTACT METHOD */}
                            <fieldset>
                                <legend className="text-base font-semibold">
                                    {data.fields.contactMethod}
                                </legend>

                                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                    {[
                                        {
                                            value: "phoneCall",
                                            label: data.fields.phoneCall,
                                            icon: FiPhone,
                                        },
                                        {
                                            value: "textMessage",
                                            label: data.fields.textMessage,
                                            icon: FiMessageCircle,
                                        },
                                    ].map((method) => {
                                        const MethodIcon = method.icon;
                                        const selected =
                                            form.contactMethod === method.value;

                                        return (
                                            <label
                                                key={method.value}
                                                className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition duration-200 ${selected
                                                        ? "border-blue-500 bg-blue-500/10"
                                                        : darkMode
                                                            ? "border-slate-700 hover:border-blue-500/50"
                                                            : "border-slate-200 hover:border-blue-500/50"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="contactMethod"
                                                    value={method.value}
                                                    checked={selected}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 accent-blue-600"
                                                />

                                                <MethodIcon
                                                    className="shrink-0 text-blue-500"
                                                    size={20}
                                                />

                                                <span className="text-base font-medium">
                                                    {method.label}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </fieldset>

                            {/* OPTIONAL MESSAGE */}
                            <div>
                                <div className="flex items-center justify-between gap-3">
                                    <label
                                        htmlFor="message"
                                        className="text-base font-semibold"
                                    >
                                        {data.fields.message}
                                    </label>

                                    <span className={`text-sm ${mutedText}`}>
                                        {form.message.length}/500
                                    </span>
                                </div>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    maxLength={500}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder={data.fields.messagePlaceholder}
                                    className={`${inputStyle} resize-y`}
                                />
                            </div>

                            {/* PRIVACY */}
                            <div className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
                                <FiShield
                                    className="mt-1 shrink-0 text-amber-500"
                                    size={23}
                                />

                                <div>
                                    <h3 className="font-bold">
                                        {data.privacyTitle}
                                    </h3>

                                    <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
                                        {data.privacyNotice}
                                    </p>
                                </div>
                            </div>

                            {/* SUBMIT */}
                            <motion.button
                                type="submit"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                            >
                                {data.submitButton}
                                {isRTL ? (
                                    <FiArrowRight size={21} />
                                ) : (
                                    <FiArrowUpRight size={21} />
                                )}
                            </motion.button>

                            {/* DEMO CONFIRMATION */}
                            <AnimatePresence>
                                {showNotice && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: "auto" }}
                                        exit={{ opacity: 0, y: -8, height: 0 }}
                                        role="status"
                                        aria-live="polite"
                                        className="overflow-hidden rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5"
                                    >
                                        <div className="flex items-start gap-3">
                                            <FiCheckCircle
                                                className="mt-1 shrink-0 text-blue-500"
                                                size={24}
                                            />

                                            <div>
                                                <h3 className="text-lg font-bold">
                                                    {data.successTitle}
                                                </h3>

                                                <p className={`mt-2 leading-7 ${mutedText}`}>
                                                    {data.successMessage}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.section>

                    {/* CONTACT SIDEBAR */}
                    <motion.aside
                        initial={{ opacity: 0, x: isRTL ? -25 : 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className="space-y-5"
                    >
                        {/* PHONE AND WHATSAPP */}
                        <div className={`rounded-3xl border p-6 sm:p-8 ${cardStyle}`}>
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                                <FiPhone size={26} />
                            </div>

                            <h2 className="text-2xl font-bold">
                                {data.contact.heading}
                            </h2>

                            <a
                                href={data.contact.phoneLink}
                                className="mt-5 inline-flex items-center gap-3 text-lg font-bold text-blue-500 transition hover:text-blue-400"
                            >
                                <FiPhone size={20} />
                                <span dir="ltr">{data.contact.phone}</span>
                            </a>

                            <a
                                href={data.contact.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-blue-500/30 px-5 py-4 font-semibold text-blue-500 transition hover:bg-blue-500/10"
                            >
                                <FiMessageCircle size={21} />
                                {data.contact.whatsappLabel}
                                <FiArrowUpRight size={18} />
                            </a>
                        </div>

                        {/* CLINIC LOCATION */}
                        <div className={`rounded-3xl border p-6 sm:p-8 ${cardStyle}`}>
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                                <FiMapPin size={26} />
                            </div>

                            <h3 className="text-xl font-bold">
                                {data.contact.locationTitle}
                            </h3>

                            <p className={`mt-4 text-base leading-8 ${mutedText}`}>
                                {data.contact.address}
                            </p>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Rifah+Medical+Complex+Kabul+Afghanistan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-500 transition hover:text-blue-400"
                            >
                                {data.contact.mapButton}
                                <FiArrowUpRight size={18} />
                            </a>
                        </div>

                        {/* REMINDER */}
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="rounded-3xl bg-blue-600 p-7 text-white sm:p-8"
                        >
                            <FiClock size={29} />

                            <h3 className="mt-5 text-xl font-bold">
                                {data.reminderTitle}
                            </h3>

                            <p className="mt-3 leading-8 text-blue-100">
                                {data.reminder}
                            </p>
                        </motion.div>
                    </motion.aside>
                </div>
            </section>
        </main>
    );
}
