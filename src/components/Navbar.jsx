
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
    FiMenu,
    FiX,
    FiSun,
    FiMoon,
    FiChevronDown,
    FiCalendar,
    FiActivity,
} from "react-icons/fi";

const navigation = {
    en: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Procedures", path: "/procedures" },
        { label: "Appointment", path: "/appointment" },
        { label: "Contact", path: "/contact" },
    ],
    fa: [
        { label: "صفحه اصلی", path: "/" },
        { label: "درباره داکتر", path: "/about" },
        { label: "خدمات", path: "/services" },
        { label: "عملیات", path: "/procedures" },
        { label: "نوبت‌دهی", path: "/appointment" },
        { label: "تماس", path: "/contact" },
    ],
    ps: [
        { label: "کور", path: "/" },
        { label: "د ډاکټر په اړه", path: "/about" },
        { label: "خدمتونه", path: "/services" },
        { label: "جراحي عملیات", path: "/procedures" },
        { label: "وخت اخیستل", path: "/appointment" },
        { label: "اړیکه", path: "/contact" },
    ],
};

const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "fa", label: "دری", name: "Dari" },
    { code: "ps", label: "پښتو", name: "Pashto" },
];

export default function Navbar({
    language = "en",
    setLanguage = () => { },
    darkMode = false,
    setDarkMode = () => { },
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);

    const links = navigation[language] || navigation.en;
    const currentLanguage =
        languages.find((item) => item.code === language) || languages[0];

    return (
        <motion.header
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/90"
        >
            <nav
                className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10"
                aria-label="Main navigation"
                dir={language === "en" ? "ltr" : "rtl"}
            >
                {/* Doctor's brand */}
                <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="flex min-w-0 items-center gap-3"
                >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#3978E5] text-white shadow-lg shadow-blue-500/20">
                        <FiActivity size={23} />
                    </span>

                    <span className="min-w-0">
                        <span className="block truncate text-sm font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-base">
                            Dr. Khalid Khan Zadran
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">
                            Neurosurgery
                        </span>
                    </span>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-1 xl:flex">
                    {links.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                `whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-blue-50 text-[#3978E5] dark:bg-blue-500/15 dark:text-blue-300"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-[#3978E5] dark:text-slate-300 dark:hover:bg-slate-800"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Theme, language and appointment */}
                <div className="hidden shrink-0 items-center gap-2 md:flex">
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setLanguageOpen(!languageOpen)}
                            aria-expanded={languageOpen}
                            aria-label="Choose website language"
                            className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 dark:border-slate-700 dark:text-slate-200"
                        >
                            {currentLanguage.label}
                            <FiChevronDown
                                className={`transition-transform ${languageOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <AnimatePresence>
                            {languageOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                    className="absolute end-0 top-full mt-2 w-36 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-700 dark:bg-slate-900"
                                >
                                    {languages.map((item) => (
                                        <button
                                            type="button"
                                            key={item.code}
                                            onClick={() => {
                                                setLanguage(item.code);
                                                setLanguageOpen(false);
                                            }}
                                            className={`block w-full rounded-xl px-3 py-2.5 text-start text-sm transition ${language === item.code
                                                ? "bg-blue-50 font-semibold text-[#3978E5] dark:bg-blue-500/15 dark:text-blue-300"
                                                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                                                }`}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        type="button"
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label={
                            darkMode ? "Switch to light mode" : "Switch to dark mode"
                        }
                        title={darkMode ? "Light mode" : "Dark mode"}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-blue-300 hover:text-[#3978E5] dark:border-slate-700 dark:text-slate-200"
                    >
                        {darkMode ? <FiSun size={19} /> : <FiMoon size={19} />}
                    </button>

                    <Link
                        to="/appointment"
                        className="flex items-center gap-2 rounded-xl bg-[#3978E5] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                        <FiCalendar size={17} />
                        <span>
                            {language === "fa"
                                ? "نوبت‌دهی"
                                : language === "ps"
                                    ? "وخت اخیستل"
                                    : "Book"}
                        </span>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-800 dark:border-slate-700 dark:text-white xl:hidden"
                >
                    {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </nav>

            {/* Mobile navigation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 xl:hidden"
                    >
                        <div
                            className="mx-auto max-w-[1440px] space-y-2 px-4 py-4 sm:px-6"
                            dir={language === "en" ? "ltr" : "rtl"}
                        >
                            {links.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: language === "en" ? -12 : 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.035 }}
                                >
                                    <NavLink
                                        to={item.path}
                                        end={item.path === "/"}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block rounded-xl px-4 py-3 text-sm font-semibold ${isActive
                                                ? "bg-blue-50 text-[#3978E5] dark:bg-blue-500/15 dark:text-blue-300"
                                                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </motion.div>
                            ))}

                            <div className="flex flex-wrap items-center gap-2 pt-3">
                                {languages.map((item) => (
                                    <button
                                        type="button"
                                        key={item.code}
                                        onClick={() => setLanguage(item.code)}
                                        className={`rounded-xl border px-3 py-2 text-sm font-semibold ${language === item.code
                                            ? "border-blue-500 bg-blue-50 text-[#3978E5] dark:bg-blue-500/15 dark:text-blue-300"
                                            : "border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
                                >
                                    {darkMode ? <FiSun /> : <FiMoon />}
                                    {darkMode ? "Light mode" : "Dark mode"}
                                </button>
                            </div>

                            <Link
                                to="/appointment"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#3978E5] px-4 py-3 font-semibold text-white"
                            >
                                <FiCalendar />
                                {language === "fa"
                                    ? "نوبت‌دهی"
                                    : language === "ps"
                                        ? "وخت اخیستل"
                                        : "Book appointment"}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
