
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiActivity,
    FiArrowRight,
    FiArrowUpRight,
    FiCheckCircle,
    FiChevronDown,
    FiClock,
    FiHeart,
    FiPlus,
    FiShield,
    FiTarget,
    FiMapPin,
    FiMove,
} from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";

import procedureData from "../data/Procedure";

import operatingRoomImage from "../../assets/6.jpg";
import clinicScrubsImage from "../../assets/clinic-scrubs.jpg";
import conferenceImage from "../../assets/conferance.jpg";

import brainScanImage from "../../assets/193414.jpg";
import spineScanImage from "../../assets/193415.jpg";
import mriScanImage from "../../assets/193416.jpg";
import ctScanImage from "../../assets/193418.jpg";

const galleryImages = [
    operatingRoomImage,
    conferenceImage,
    clinicScrubsImage,
];

const scanImages = [
    brainScanImage,
    spineScanImage,
    mriScanImage,
    ctScanImage,
];

const procedureTranslations = {
    fa: {
        1: {
            title: "جراحی تومور مغز",
            subtitle: "کرانیوتومی و برداشتن تومور",
            description: "جراحی برای برداشتن یا کوچک‌کردن تومور مغز بر اساس نتایج اسکن‌ها.",
        },
        2: {
            title: "تجمع مایع در مغز",
            subtitle: "جراحی شنت هیدروسفالی",
            description: "یک لوله باریک مایع اضافی را از مغز تخلیه می‌کند تا فشار کاهش یابد.",
        },
        3: {
            title: "خون‌ریزی مغزی",
            subtitle: "تخلیه هماتوم",
            description: "برداشتن تجمع خون که بر مغز فشار وارد می‌کند.",
        },
        4: {
            title: "جراحی دیسک کمر",
            subtitle: "دیسککتومی",
            description: "برداشتن بخشی از دیسک که بر عصب فشار وارد کرده و باعث درد کمر یا پا می‌شود.",
        },
        5: {
            title: "تنگی کانال نخاع",
            subtitle: "لامینکتومی",
            description: "ایجاد فضای بیشتر برای نخاع و اعصاب جهت کاهش درد، بی‌حسی یا ضعف.",
        },
        6: {
            title: "ثابت‌سازی ستون فقرات",
            subtitle: "فیوژن ستون فقرات",
            description: "اتصال دو یا چند مهره برای ثابت نگه‌داشتن بخش ناپایدار ستون فقرات.",
        },
        7: {
            title: "ترمیم شکستگی ستون فقرات",
            subtitle: "ثابت‌سازی شکستگی مهره",
            description: "جراحی برای ثابت‌سازی مهره شکسته پس از آسیب.",
        },
        8: {
            title: "جراحی سندروم تونل کارپال",
            subtitle: "آزادسازی عصب مدین",
            description: "کاهش فشار بر عصب مچ دست که باعث بی‌حسی و گزگز دست می‌شود.",
        },
        9: {
            title: "آزادسازی عصب تحت فشار",
            subtitle: "کاهش فشار بر اعصاب محیطی",
            description: "کاهش فشار بر عصب دست یا پا برای کم‌کردن درد و ضعف.",
        },
        10: {
            title: "جراحی آسیب سر",
            subtitle: "کرانیوتومی اضطراری",
            description: "جراحی فوری پس از آسیب شدید سر برای محافظت از مغز.",
        },
        11: {
            title: "ترمیم شکستگی جمجمه",
            subtitle: "بالا آوردن بخش فرورفته جمجمه",
            description: "بالا آوردن و ترمیم استخوان شکسته جمجمه که به داخل فشار وارد می‌کند.",
        },
    },
    ps: {
        1: {
            title: "د مغز د تومور جراحي",
            subtitle: "کرانیوټومي او د تومور لرې کول",
            description: "د سکنونو له ارزونې وروسته د مغز د تومور لرې کولو یا کوچني کولو جراحي.",
        },
        2: {
            title: "په مغز کې د مایع راټولېدل",
            subtitle: "د هایدروسفالس شنت جراحي",
            description: "یو نری ټیوب اضافي مایع له مغز څخه وباسي ترڅو فشار کم کړي.",
        },
        3: {
            title: "په مغز کې وینه بهېدنه",
            subtitle: "د هیماتوما ایستل",
            description: "د وینې د هغې ټولګې لرې کول چې پر مغز فشار راوړي.",
        },
        4: {
            title: "د ډیسک جراحي",
            subtitle: "ډیسکټومي",
            description: "د ډیسک د هغې برخې لرې کول چې پر عصب فشار راوړي او د ملا یا پښې درد پیدا کوي.",
        },
        5: {
            title: "د نخاعي کانال تنګېدل",
            subtitle: "لامینکټومي",
            description: "د نخاع او اعصابو لپاره د ډېر ځای برابرول ترڅو درد، بې‌حسي او کمزوري کمه شي.",
        },
        6: {
            title: "د ملا تیر ثابتول",
            subtitle: "د ملا تیر فیوژن",
            description: "د دوو یا ډېرو مهره‌وو نښلول ترڅو د ملا تیر ناپایداره برخه ثابته شي.",
        },
        7: {
            title: "د ملا تیر د ماتېدو ترمیم",
            subtitle: "د ماتې شوې مهرې ثابتول",
            description: "له ټپ وروسته د ماتې شوې مهرې د ثابتولو لپاره جراحي.",
        },
        8: {
            title: "د کارپل تونل جراحي",
            subtitle: "د مدین عصب فشار کمول",
            description: "د مړوند پر عصب فشار کمول چې د لاس بې‌حسي او ستنې‌ستنې کېدل رامنځته کوي.",
        },
        9: {
            title: "د بند شوي عصب آزادول",
            subtitle: "د محیطی عصب فشار کمول",
            description: "د لاس یا پښې پر عصب فشار کمول ترڅو درد او کمزوري کمه شي.",
        },
        10: {
            title: "د سر د ټپ جراحي",
            subtitle: "بیړنۍ کرانیوټومي",
            description: "د سخت سر ټپ وروسته د مغز د ساتنې لپاره بیړنۍ جراحي.",
        },
        11: {
            title: "د کوپړۍ د ماتېدو ترمیم",
            subtitle: "د کوپړۍ دننه تللې هډوکي پورته کول",
            description: "د کوپړۍ د مات شوي هډوکي پورته کول او ترمیمول چې دننه فشار راوړي.",
        },
    },
};

const copy = {
    en: {
        label: "NEUROSURGICAL CARE",
        heading: "Precision in every procedure. Care in every step.",
        description: "Explore brain, spine, and nerve procedures and learn what to discuss during your consultation.",
        book: "Book a consultation",
        contact: "Contact the clinic",
        specialties: ["Brain", "Spine", "Nerves", "Head injury"],
        explorer: "PROCEDURE EXPLORER",
        explorerTitle: "Find the information you need",
        explorerDescription: "Browse procedures by category. Your doctor can explain which options may be appropriate for your individual situation.",
        all: "All procedures",
        view: "Request consultation",
        operating: "THE CLINICAL ENVIRONMENT",
        operatingTitle: "Care supported by preparation",
        imaging: "DIAGNOSTIC IMAGING",
        imagingTitle: "Imaging helps inform clinical decisions",
        imagingDescription: "MRI and CT images may help clinicians assess a condition and discuss appropriate next steps.",
        steps: "THE PATIENT JOURNEY",
        stepsTitle: "From consultation to follow-up",
        faq: "YOUR QUESTIONS",
        faqTitle: "Questions worth asking",
        faqDescription: "Every case is different. Discuss your diagnosis, options, risks, and recovery with your clinician.",
        finalTitle: "Start with a conversation.",
        finalDescription: "Discuss your symptoms and questions with the clinic before making treatment decisions.",
        finalButton: "Request an appointment",
        location: "Rifah Medical Complex · Kabul, Afghanistan",
        categories: {
            Brain: "Brain",
            Spine: "Spine",
            Nerves: "Nerves",
            "Head injury": "Head injury",
        },
        galleryTitles: ["Operating room", "Professional learning", "Clinical environment"],
        scanTitles: ["Brain scan", "Spine scan", "MRI imaging", "CT imaging"],
        scanDescription: "Imaging example for clinical discussion.",
        stepsList: [
            ["Consultation", "Discuss symptoms, medical history, and concerns with your clinician."],
            ["Assessment", "Review relevant examination findings and available imaging."],
            ["Treatment plan", "Discuss suitable options, benefits, risks, and alternatives."],
            ["Follow-up", "Follow the care team's instructions and recovery plan."],
        ],
        faqList: [
            ["Will I definitely need an operation?", "Not always. Some conditions can be managed without surgery. Your clinician can discuss suitable options after assessing your individual situation."],
            ["What should I bring to my consultation?", "Bring available MRI or CT images, medical reports, a list of current medicines, and relevant medical history."],
            ["How long is recovery?", "Recovery varies by condition, procedure, and individual circumstances. Ask your clinician about the expected recovery and follow-up plan."],
            ["How do I book?", "Use the appointment page to submit a request, or contact Rifah Medical Complex directly."],
        ],
    },
    fa: {
        label: "مراقبت‌های جراحی اعصاب",
        heading: "دقت در هر عمل؛ مراقبت در هر مرحله.",
        description: "با خدمات مربوط به مغز، ستون فقرات و اعصاب آشنا شوید و برای مشوره خود معلومات لازم را بیابید.",
        book: "درخواست مشوره",
        contact: "تماس با کلینیک",
        specialties: ["مغز", "ستون فقرات", "اعصاب", "آسیب سر"],
        explorer: "بررسی خدمات",
        explorerTitle: "معلومات مورد نیاز خود را بیابید",
        explorerDescription: "خدمات را بر اساس دسته‌بندی بررسی کنید. داکتر می‌تواند گزینه‌های مناسب را برای وضعیت شما توضیح دهد.",
        all: "تمام خدمات",
        view: "درخواست مشوره",
        operating: "محیط کلینیکی",
        operatingTitle: "مراقبت همراه با آمادگی",
        imaging: "تصویربرداری تشخیصی",
        imagingTitle: "تصویربرداری در تصمیم‌گیری طبی کمک می‌کند",
        imagingDescription: "تصاویر MRI و CT می‌توانند به ارزیابی وضعیت و بررسی مراحل بعدی کمک کنند.",
        steps: "مسیر درمان",
        stepsTitle: "از مشوره تا پیگیری",
        faq: "پرسش‌های شما",
        faqTitle: "پرسش‌های مهم",
        faqDescription: "هر وضعیت متفاوت است. درباره تشخیص، گزینه‌ها، خطرات و بهبودی با داکتر خود صحبت کنید.",
        finalTitle: "با یک گفت‌وگو آغاز کنید.",
        finalDescription: "پیش از تصمیم‌گیری درباره درمان، علایم و پرسش‌های خود را با کلینیک مطرح کنید.",
        finalButton: "درخواست نوبت",
        location: "مجتمع طبی رفاه · کابل، افغانستان",
        categories: {
            Brain: "مغز",
            Spine: "ستون فقرات",
            Nerves: "اعصاب",
            "Head injury": "آسیب سر",
        },
        galleryTitles: ["اتاق عملیات", "آموزش مسلکی", "محیط کلینیکی"],
        scanTitles: ["اسکن مغز", "اسکن ستون فقرات", "تصویربرداری MRI", "تصویربرداری CT"],
        scanDescription: "نمونه تصویربرداری برای بررسی طبی.",
        stepsList: [
            ["مشوره", "علایم، سابقه طبی و نگرانی‌های خود را با داکتر مطرح کنید."],
            ["ارزیابی", "نتایج معاینه و تصاویر موجود بررسی می‌شوند."],
            ["طرح درمان", "درباره گزینه‌ها، فواید، خطرات و روش‌های جایگزین گفت‌وگو کنید."],
            ["پیگیری", "دستورهای تیم درمان و برنامه بهبودی را دنبال کنید."],
        ],
        faqList: [
            ["آیا حتماً به عملیات نیاز دارم؟", "همیشه نه. برخی مشکلات بدون جراحی درمان می‌شوند. داکتر پس از ارزیابی وضعیت شما گزینه‌های مناسب را توضیح می‌دهد."],
            ["برای مشوره چه چیزهایی بیاورم؟", "تصاویر MRI یا CT، گزارش‌های طبی، فهرست دواهای فعلی و سابقه طبی مرتبط را همراه بیاورید."],
            ["مدت بهبودی چقدر است؟", "مدت بهبودی به وضعیت، نوع عمل و شرایط فردی بستگی دارد. درباره برنامه بهبودی و پیگیری از داکتر بپرسید."],
            ["چگونه نوبت بگیرم؟", "از صفحه نوبت‌دهی درخواست بفرستید یا مستقیماً با مجتمع طبی رفاه تماس بگیرید."],
        ],
    },
    ps: {
        label: "د اعصابو جراحي پاملرنه",
        heading: "په هره کړنلاره کې دقت، په هر ګام کې پاملرنه.",
        description: "د مغز، ملا تیر او اعصابو اړوند کړنلارې وپېژنئ او د خپلې مشورې لپاره اړین معلومات ترلاسه کړئ.",
        book: "د مشورې غوښتنه",
        contact: "له کلینیک سره اړیکه",
        specialties: ["مغز", "ملا تیر", "اعصاب", "د سر ټپ"],
        explorer: "د کړنلارو لټون",
        explorerTitle: "اړین معلومات ومومئ",
        explorerDescription: "کړنلارې د کټګورۍ له مخې وګورئ. ډاکټر به ستاسو د حالت لپاره مناسب انتخابونه درته تشریح کړي.",
        all: "ټولې کړنلارې",
        view: "د مشورې غوښتنه",
        operating: "کلینیکي چاپېریال",
        operatingTitle: "له چمتووالي سره پاملرنه",
        imaging: "تشخیصي انځورونه",
        imagingTitle: "سکنونه د طبي پرېکړو په کولو کې مرسته کوي",
        imagingDescription: "د MRI او CT انځورونه د حالت په ارزونه او د راتلونکو ګامونو په ټاکلو کې مرسته کولی شي.",
        steps: "د ناروغ د درملنې سفر",
        stepsTitle: "له مشورې څخه تر بیاکتنې پورې",
        faq: "ستاسو پوښتنې",
        faqTitle: "مهمې پوښتنې",
        faqDescription: "هر حالت توپیر لري. د خپل تشخیص، انتخابونو، خطرونو او رغېدو په اړه له ډاکټر سره خبرې وکړئ.",
        finalTitle: "خبرې اترې پیل کړئ.",
        finalDescription: "د درملنې له پرېکړې مخکې خپلې نښې او پوښتنې له کلینیک سره شریکې کړئ.",
        finalButton: "د نوبت غوښتنه",
        location: "رفاه طبي کمپلکس · کابل، افغانستان",
        categories: {
            Brain: "مغز",
            Spine: "ملا تیر",
            Nerves: "اعصاب",
            "Head injury": "د سر ټپ",
        },
        galleryTitles: ["د عملیاتو خونه", "مسلکي زده‌کړه", "کلینیکي چاپېریال"],
        scanTitles: ["د مغز سکن", "د ملا تیر سکن", "د MRI انځورونه", "د CT انځورونه"],
        scanDescription: "د طبي ارزونې لپاره د انځور بېلګه.",
        stepsList: [
            ["مشوره", "د خپلو نښو، طبي تاریخچې او اندېښنو په اړه له ډاکټر سره خبرې وکړئ."],
            ["ارزونه", "د معاینې پایلې او شته سکنونه وڅېړئ."],
            ["د درملنې پلان", "د مناسبو لارو، ګټو، خطرونو او بدیلو انتخابونو په اړه خبرې وکړئ."],
            ["بیاکتنه", "د درملنې ډلې لارښوونې او د رغېدو پلان تعقیب کړئ."],
        ],
        faqList: [
            ["ایا حتماً عملیاتو ته اړتیا لرم؟", "تل نه. ځینې حالتونه له جراحۍ پرته هم اداره کېدای شي. ډاکټر به ستاسو له ارزونې وروسته مناسب انتخابونه تشریح کړي."],
            ["مشورې ته څه راوړم؟", "شته MRI یا CT انځورونه، طبي راپورونه، د اوسنیو درملو نوملړ او اړونده طبي تاریخچه راوړئ."],
            ["رغېدل څومره وخت نیسي؟", "د رغېدو موده د حالت، کړنلارې او شخصي شرایطو له مخې توپیر لري. له ډاکټر څخه د رغېدو او بیاکتنې پلان وپوښتئ."],
            ["څنګه نوبت واخلم؟", "د نوبت پاڼې له لارې غوښتنه واستوئ یا مستقیماً له رفاه طبي کمپلکس سره اړیکه ونیسئ."],
        ],
    },
};

const categoryIcons = {
    Brain: FiActivity,
    Spine: FiTarget,
    Nerves: FiHeart,
    "Head injury": FiShield,
};

export default function Procedure({ darkMode = false, language = "en" }) {
    const [searchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState("All");
    const [openFaq, setOpenFaq] = useState(0);

    const lang = ["en", "fa", "ps"].includes(language)
        ? language
        : language === "dari"
            ? "fa"
            : language === "pashto"
                ? "ps"
                : "en";

    const isRTL = lang === "fa" || lang === "ps";
    const t = copy[lang];
    const translatedData = procedureData.translations[lang];

    useEffect(() => {
        const area = searchParams.get("area");
        const match = area
            ? procedureData.filters.find(
                (filter) => filter.toLowerCase() === area.toLowerCase()
            )
            : null;

        setActiveFilter(match || "All");
    }, [searchParams]);

    const filteredProcedures = procedureData.procedures.filter(
        (procedure) =>
            activeFilter === "All" || procedure.category === activeFilter
    );

    const sectionClass = darkMode
        ? "bg-[#101318] text-white"
        : "bg-[#f6f8fc] text-slate-900";

    const mutedText = darkMode ? "text-slate-300" : "text-slate-600";
    const cardClass = darkMode
        ? "border-white/10 bg-[#191d25]"
        : "border-slate-200 bg-white";

    const getProcedureText = (procedure) => {
        if (lang === "en") return procedure;
        return procedureTranslations[lang]?.[procedure.id] || procedure;
    };

    const getCategoryIcon = (category) =>
        categoryIcons[category] || FiActivity;

    return (
        <main dir={isRTL ? "rtl" : "ltr"} lang={lang} className={`${sectionClass} overflow-hidden`}>
            {/* HERO */}
            <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
                <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[100px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-blue-600">
                            <FiActivity />
                            {t.label}
                        </div>

                        <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[4.25rem]">
                            {t.heading}
                        </h1>

                        <p className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${mutedText}`}>
                            {t.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/appointment"
                                className="group inline-flex items-center gap-3 rounded-full bg-blue-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-600"
                            >
                                {t.book}
                                <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                to="/contact"
                                className={`inline-flex items-center gap-2 rounded-full border px-6 py-4 text-sm font-bold transition hover:border-blue-500 ${cardClass}`}
                            >
                                {t.contact}
                                <FiArrowRight className={isRTL ? "rotate-180" : ""} />
                            </Link>
                        </div>

                        <div className={`mt-9 flex items-center gap-3 text-sm ${mutedText}`}>
                            <FiMapPin className="shrink-0 text-blue-600" />
                            {t.location}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 18 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="relative"
                    >
                        <div className="absolute -inset-3 rounded-[2.5rem] border border-blue-500/20" />

                        <div className="relative overflow-hidden rounded-[2rem]">
                            <img
                                src={operatingRoomImage}
                                alt="Operating room"
                                className="h-[360px] w-full object-cover sm:h-[480px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                                    <span className="h-2 w-2 rounded-full bg-sky-300" />
                                    {t.operating}
                                </span>
                                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                                    {t.operatingTitle}
                                </h2>
                                <p className="mt-3 text-sm text-white/75">
                                    Dr. Khalid Khan Zadran
                                </p>
                            </div>
                        </div>

                        <div className={`absolute -bottom-5 ${isRTL ? "-left-3" : "-right-3"} hidden rounded-2xl border p-4 shadow-xl sm:block ${cardClass}`}>
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                                    <FiShield size={21} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Brain & Spine</p>
                                    <p className={`mt-1 text-xs ${mutedText}`}>Specialist care</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PROCEDURE EXPLORER */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
                        <div>
                            <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
                                {t.explorer}
                            </p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                {t.explorerTitle}
                            </h2>
                        </div>
                        <p className={`leading-7 ${mutedText}`}>
                            {t.explorerDescription}
                        </p>
                    </div>

                    <div className="mb-8 flex flex-wrap gap-3">
                        {procedureData.filters.map((filter) => {
                            const selected = activeFilter === filter;
                            const Icon = getCategoryIcon(filter);
                            const label = filter === "All"
                                ? t.all
                                : (translatedData.filters[filter] || t.categories[filter] || filter);

                            return (
                                <button
                                    type="button"
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 ${selected
                                        ? "border-blue-700 bg-blue-700 text-white shadow-lg shadow-blue-900/15"
                                        : `${cardClass} hover:border-blue-400`
                                        }`}
                                >
                                    {filter !== "All" && <Icon />}
                                    {label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mb-5 flex items-center justify-between">
                        <p className={`text-sm ${mutedText}`}>
                            {filteredProcedures.length} {lang === "en" ? "procedures" : lang === "fa" ? "عملیات" : "کړنلارې"}
                        </p>
                        <span className={`hidden items-center gap-2 text-xs sm:flex ${mutedText}`}>
                            <FiMove />
                            {lang === "en" ? "Select a category to filter" : lang === "fa" ? "برای دسته‌بندی انتخاب کنید" : "د کټګورۍ د ټاکلو لپاره کلیک وکړئ"}
                        </span>
                    </div>

                    <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filteredProcedures.map((procedure, index) => {
                                const Icon = getCategoryIcon(procedure.category);
                                const item = getProcedureText(procedure);

                                return (
                                    <motion.article
                                        layout
                                        key={procedure.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.96 }}
                                        transition={{ duration: 0.3, delay: index * 0.025 }}
                                        whileHover={{ y: -5 }}
                                        className={`group relative overflow-hidden rounded-3xl border p-6 transition-shadow duration-300 hover:shadow-xl ${darkMode ? "hover:shadow-black/20" : "hover:shadow-blue-900/5"} ${cardClass}`}
                                    >
                                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.06] transition-transform duration-500 group-hover:scale-150" />

                                        <div className="relative flex items-start justify-between gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-xl text-blue-600 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                                                <Icon />
                                            </div>
                                            <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${darkMode ? "bg-white/5 text-slate-300" : "bg-slate-100 text-slate-600"}`}>
                                                {translatedData.filters[procedure.category] || t.categories[procedure.category] || procedure.category}
                                            </span>
                                        </div>

                                        <p className="relative mt-7 text-xs font-bold tracking-[0.12em] text-blue-600">
                                            {String(procedure.id).padStart(2, "0")}
                                        </p>

                                        <h3 className="relative mt-2 text-xl font-bold leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="relative mt-2 text-sm font-semibold text-blue-600">
                                            {item.subtitle}
                                        </p>
                                        <p className={`relative mt-4 min-h-[84px] text-sm leading-7 ${mutedText}`}>
                                            {item.description}
                                        </p>

                                        <div className={`my-5 h-px ${darkMode ? "bg-white/10" : "bg-slate-100"}`} />

                                        <Link
                                            to="/appointment"
                                            className="group/link inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                                        >
                                            {t.view}
                                            <FiArrowRight className={`transition-transform group-hover/link:translate-x-1 ${isRTL ? "rotate-180 group-hover/link:-translate-x-1" : ""}`} />
                                        </Link>
                                    </motion.article>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* IMAGE STRIP */}
            <section className={`px-5 py-16 sm:px-8 lg:px-12 lg:py-24 ${darkMode ? "bg-white/[0.025]" : "bg-white"}`}>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
                                {t.operating}
                            </p>
                            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                {t.operatingTitle}
                            </h2>
                        </div>
                        <p className={`max-w-md leading-7 ${mutedText}`}>
                            {t.description}
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-12">
                        {galleryImages.map((image, index) => (
                            <motion.figure
                                key={image}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative min-h-[270px] overflow-hidden rounded-3xl bg-slate-200 md:min-h-[360px] ${index === 0 ? "md:col-span-6" : "md:col-span-3"}`}
                            >
                                <img
                                    src={image}
                                    alt={t.galleryTitles[index]}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                                <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-lg font-bold text-white">
                                    {t.galleryTitles[index]}
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMAGING */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 max-w-3xl">
                        <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
                            {t.imaging}
                        </p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            {t.imagingTitle}
                        </h2>
                        <p className={`mt-4 leading-7 ${mutedText}`}>
                            {t.imagingDescription}
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {procedureData.imaging.scans.map((scan, index) => (
                            <motion.article
                                key={scan.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className={`overflow-hidden rounded-3xl border ${cardClass}`}
                            >
                                <div className="relative h-52 overflow-hidden bg-slate-900">
                                    <img
                                        src={scan.image || scanImages[index]}
                                        alt={scan.alt || t.scanTitles[index]}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                    />
                                    <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-slate-950/65 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                                        {t.scanTitles[index]}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold">{scan.title}</h3>
                                    <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
                                        {t.scanDescription}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* PATIENT JOURNEY */}
            <section className={`px-5 py-16 sm:px-8 lg:px-12 lg:py-24 ${darkMode ? "bg-white/[0.025]" : "bg-white"}`}>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 max-w-3xl">
                        <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
                            {t.steps}
                        </p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            {t.stepsTitle}
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {t.stepsList.map((step, index) => (
                            <motion.article
                                key={step[0]}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.45, delay: index * 0.1 }}
                                className={`relative rounded-3xl border p-6 sm:p-7 ${cardClass}`}
                            >
                                {index !== 3 && (
                                    <div className={`absolute ${isRTL ? "left-0" : "right-0"} top-10 hidden h-px w-8 translate-x-1/2 bg-blue-500/30 lg:block`} />
                                )}
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                                    {index === 0 ? <FiClock size={21} /> :
                                        index === 1 ? <FiActivity size={21} /> :
                                            index === 2 ? <FiCheckCircle size={21} /> :
                                                <FiHeart size={21} />}
                                </div>
                                <p className="text-xs font-bold tracking-[0.16em] text-blue-600">
                                    {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3 className="mt-2 text-lg font-bold">{step[0]}</h3>
                                <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
                                    {step[1]}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                    <div>
                        <p className="text-xs font-bold tracking-[0.2em] text-blue-600">
                            {t.faq}
                        </p>
                        <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                            {t.faqTitle}
                        </h2>
                        <p className={`mt-5 leading-7 ${mutedText}`}>
                            {t.faqDescription}
                        </p>
                        <Link
                            to="/contact"
                            className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600 hover:gap-3"
                        >
                            {t.contact}
                            <FiArrowRight className={isRTL ? "rotate-180" : ""} />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {t.faqList.map((item, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={item[0]}
                                    className={`overflow-hidden rounded-2xl border ${cardClass}`}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start sm:px-6"
                                    >
                                        <span className="font-semibold leading-7">
                                            {item[0]}
                                        </span>
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                                            {isOpen ? <FiChevronDown /> : <FiPlus />}
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <p className={`px-5 pb-5 text-sm leading-7 sm:px-6 ${mutedText}`}>
                                                    {item[1]}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55 }}
                    className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16"
                >
                    <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full border-[42px] border-white/5" />
                    <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

                    <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div className="max-w-2xl">
                            <p className="text-xs font-bold tracking-[0.2em] text-blue-200">
                                {t.label}
                            </p>
                            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                                {t.finalTitle}
                            </h2>
                            <p className="mt-4 max-w-xl leading-7 text-blue-100">
                                {t.finalDescription}
                            </p>
                        </div>

                        <Link
                            to="/appointment"
                            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-900 transition hover:-translate-y-1 hover:bg-blue-50"
                        >
                            {t.finalButton}
                            <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
