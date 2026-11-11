
const serviceData = {
    en: {
        label: "MEDICAL SERVICES",
        heading: "Specialist care for the brain, spine and nerves",
        description:
            "Explore the available consultation services. Each consultation helps review your concerns and discuss appropriate next steps.",
        selectorLabel: "EXPLORE OUR SERVICES",
        selectorTitle: "What would you like help with?",
        selectorDescription:
            "Select a service to learn more about the consultation.",
        servicesLabel: "SELECT A SPECIALTY",
        consultationLabel: "CONSULTATION OVERVIEW",
        pointsTitle: "What to expect",
        selectedLabel: "SELECTED SERVICE",
        appointmentIntro: "Ready to take the next step?",
        appointmentButton: "Request consultation",
        proceduresButton: "Related procedures",
        serviceCountLabel: "Available services",
        cta: {
            eyebrow: "HERE TO HELP",
            heading: "Not sure which service you need?",
            description:
                "Request a consultation and describe your concern in your own words.",
            button: "Request an appointment",
        },
        services: [
            {
                id: 1,
                icon: "brain",
                shortTitle: "Brain",
                title: "Brain Surgery Consultation",
                description:
                    "A focused consultation for patients with concerns related to the brain, including a review of symptoms, medical history and available reports.",
                points: [
                    "Review of symptoms and medical history",
                    "Discussion of available scans and reports",
                    "Explanation of possible next steps",
                ],
                area: "brain",
            },
            {
                id: 2,
                icon: "spine",
                shortTitle: "Spine",
                title: "Spine Surgery Consultation",
                description:
                    "A consultation for back, neck and spine-related concerns. Findings are reviewed and possible next steps are explained clearly.",
                points: [
                    "Discussion of back and neck symptoms",
                    "Review of available imaging and reports",
                    "Explanation of evaluation options",
                ],
                area: "spine",
            },
            {
                id: 3,
                icon: "nerve",
                shortTitle: "Nerves",
                title: "Nerve Disorder Assessment",
                description:
                    "An assessment for patients experiencing nerve-related symptoms to help understand their concerns and determine whether further evaluation is appropriate.",
                points: [
                    "Discussion of nerve-related symptoms",
                    "Review of relevant medical history",
                    "Guidance about further evaluation",
                ],
                area: "nerves",
            },
            {
                id: 4,
                icon: "evaluation",
                shortTitle: "General evaluation",
                title: "Neurosurgical Evaluation",
                description:
                    "A general neurosurgical consultation for patients seeking a specialist opinion about a brain, spine or nerve condition.",
                points: [
                    "Review of existing findings and reports",
                    "A specialist discussion of your concerns",
                    "Clear explanation of possible next steps",
                ],
                area: null,
            },
        ],
        footer: {
            doctor: "Dr. Khalid Khan Zadran",
            specialty:
                "Consultant Neurosurgeon and Brain & Spine Specialist",
            description:
                "Consultations for brain, spine and nerve conditions at Rifah Medical Complex, Kabul, Afghanistan.",
            location: "Rifah Medical Complex, Kabul, Afghanistan",
            phone: "+93 78 765 4751",
            copyright:
                "© 2026 Dr. Khalid Khan Zadran. All rights reserved.",
            credit: "Made by Upskill",
            creditUrl: "https://www.upskillacademy.tech/services",
            notice:
                "Demonstration website. The appointment form does not send or store any data. For emergencies, go to your nearest emergency department.",
        },
    },

    fa: {
        label: "خدمات طبی",
        heading: "مشاوره تخصصی برای مغز، ستون فقرات و اعصاب",
        description:
            "خدمات مشاوره موجود را بررسی کنید. در هر مشاوره، نگرانی‌های شما بررسی شده و مراحل بعدی مناسب توضیح داده می‌شود.",
        selectorLabel: "خدمات ما",
        selectorTitle: "در کدام زمینه به مشاوره نیاز دارید؟",
        selectorDescription:
            "یک خدمت را انتخاب کنید تا جزئیات مشاوره را مشاهده نمایید.",
        servicesLabel: "انتخاب تخصص",
        consultationLabel: "خلاصه مشاوره",
        pointsTitle: "موارد قابل بررسی",
        selectedLabel: "خدمت انتخاب‌شده",
        appointmentIntro: "آماده برداشتن قدم بعدی هستید؟",
        appointmentButton: "درخواست مشاوره",
        proceduresButton: "عملیات مرتبط",
        serviceCountLabel: "خدمات موجود",
        cta: {
            eyebrow: "در کنار شما هستیم",
            heading: "مطمئن نیستید به کدام خدمت نیاز دارید؟",
            description:
                "درخواست مشاوره بفرستید و مشکل خود را با زبان خود توضیح دهید.",
            button: "درخواست وقت ملاقات",
        },
        services: [
            {
                id: 1,
                icon: "brain",
                shortTitle: "مغز",
                title: "مشاوره جراحی مغز",
                description:
                    "مشاوره برای افرادی که درباره مغز نگرانی دارند؛ شامل بررسی علایم، سابقه طبی و گزارش‌های موجود.",
                points: [
                    "بررسی علایم و سابقه طبی",
                    "بررسی تصاویر و گزارش‌های موجود",
                    "توضیح مراحل احتمالی بعدی",
                ],
                area: "brain",
            },
            {
                id: 2,
                icon: "spine",
                shortTitle: "ستون فقرات",
                title: "مشاوره جراحی ستون فقرات",
                description:
                    "مشاوره برای مشکلات کمر، گردن و ستون فقرات. یافته‌ها بررسی شده و مراحل احتمالی بعدی به‌صورت روشن توضیح داده می‌شود.",
                points: [
                    "بررسی علایم کمر و گردن",
                    "بررسی تصاویر و گزارش‌های موجود",
                    "توضیح گزینه‌های ارزیابی",
                ],
                area: "spine",
            },
            {
                id: 3,
                icon: "nerve",
                shortTitle: "اعصاب",
                title: "ارزیابی اختلالات اعصاب",
                description:
                    "ارزیابی برای افرادی که علایم مرتبط با اعصاب دارند تا نگرانی‌های آنان بهتر بررسی شود و نیاز به ارزیابی بیشتر مشخص گردد.",
                points: [
                    "بررسی علایم مرتبط با اعصاب",
                    "مرور سابقه طبی مرتبط",
                    "راهنمایی درباره ارزیابی بیشتر",
                ],
                area: "nerves",
            },
            {
                id: 4,
                icon: "evaluation",
                shortTitle: "ارزیابی عمومی",
                title: "ارزیابی جراحی اعصاب",
                description:
                    "مشاوره عمومی جراحی اعصاب برای افرادی که درباره مشکلات مغز، ستون فقرات یا اعصاب نظر تخصصی می‌خواهند.",
                points: [
                    "بررسی یافته‌ها و گزارش‌های قبلی",
                    "بحث تخصصی درباره نگرانی‌های شما",
                    "توضیح روشن مراحل احتمالی بعدی",
                ],
                area: null,
            },
        ],
        footer: {
            doctor: "داکتر خالد خان زدران",
            specialty: "متخصص جراحی اعصاب و بیماری‌های مغز و ستون فقرات",
            description:
                "مشاوره درباره مشکلات مغز، ستون فقرات و اعصاب در مجتمع طبی رفاه، کابل، افغانستان.",
            location: "مجتمع طبی رفاه، کابل، افغانستان",
            phone: "+93 78 765 4751",
            copyright: "© ۲۰۲۶ داکتر خالد خان زدران. تمامی حقوق محفوظ است.",
            credit: "طراحی توسط Upskill",
            creditUrl: "https://www.upskillacademy.tech/services",
            notice:
                "این وب‌سایت نمایشی است. فورم ملاقات اطلاعات را ارسال یا ذخیره نمی‌کند. در موارد عاجل به نزدیک‌ترین بخش عاجل مراجعه کنید.",
        },
    },

    ps: {
        label: "طبي خدمتونه",
        heading: "د مغز، ملا تیر او اعصابو تخصصي مشورې",
        description:
            "شته مشورتي خدمتونه وګورئ. په هره مشوره کې ستاسو اندېښنې ارزول کېږي او مناسب راتلونکي ګامونه درته تشریح کېږي.",
        selectorLabel: "زموږ خدمتونه",
        selectorTitle: "په کومه برخه کې مرستې ته اړتیا لرئ؟",
        selectorDescription:
            "یو خدمت وټاکئ ترڅو د مشورې جزئیات وګورئ.",
        servicesLabel: "تخصص وټاکئ",
        consultationLabel: "د مشورې لنډیز",
        pointsTitle: "د مشورې مهم ټکي",
        selectedLabel: "ټاکل شوی خدمت",
        appointmentIntro: "د راتلونکي ګام لپاره چمتو یاست؟",
        appointmentButton: "د مشورې غوښتنه",
        proceduresButton: "اړوند عملیات",
        serviceCountLabel: "شته خدمتونه",
        cta: {
            eyebrow: "ستاسو د مرستې لپاره",
            heading: "ډاډه نه یاست چې کوم خدمت ته اړتیا لرئ؟",
            description:
                "د ملاقات غوښتنه وکړئ او خپله ستونزه په خپلو ټکو کې بیان کړئ.",
            button: "د ملاقات غوښتنه",
        },
        services: [
            {
                id: 1,
                icon: "brain",
                shortTitle: "مغز",
                title: "د مغز د جراحۍ مشوره",
                description:
                    "د هغو ناروغانو لپاره مشوره چې د مغز په اړه اندېښنې لري. په دې کې د نښو، طبي تاریخچې او شته راپورونو ارزونه شامله ده.",
                points: [
                    "د نښو او طبي تاریخچې ارزونه",
                    "د شته سکینونو او راپورونو کتنه",
                    "د احتمالي راتلونکو ګامونو تشریح",
                ],
                area: "brain",
            },
            {
                id: 2,
                icon: "spine",
                shortTitle: "ملا تیر",
                title: "د ملا تیر د جراحۍ مشوره",
                description:
                    "د ملا، غاړې او ملا تیر د ستونزو لپاره مشوره. موندنې ارزول کېږي او راتلونکي احتمالي ګامونه په روښانه ډول تشریح کېږي.",
                points: [
                    "د ملا او غاړې د نښو ارزونه",
                    "د شته انځورونو او راپورونو کتنه",
                    "د ارزونې د لارو تشریح",
                ],
                area: "spine",
            },
            {
                id: 3,
                icon: "nerve",
                shortTitle: "اعصاب",
                title: "د عصبي اختلالاتو ارزونه",
                description:
                    "د هغو ناروغانو ارزونه چې د اعصابو اړوند نښې لري، ترڅو ستونزې یې ښه وپېژندل شي او د نورو ارزونو اړتیا معلومه شي.",
                points: [
                    "د عصبي نښو په اړه خبرې",
                    "د اړوندې طبي تاریخچې کتنه",
                    "د نورو ارزونو په اړه لارښوونه",
                ],
                area: "nerves",
            },
            {
                id: 4,
                icon: "evaluation",
                shortTitle: "عمومي ارزونه",
                title: "د عصبي جراحۍ ارزونه",
                description:
                    "د هغو کسانو لپاره عمومي عصبي جراحي مشوره چې د مغز، ملا تیر یا اعصابو په اړه د متخصص نظر غواړي.",
                points: [
                    "د پخوانیو موندنو او راپورونو کتنه",
                    "ستاسو د اندېښنو په اړه تخصصي بحث",
                    "د راتلونکو احتمالي ګامونو روښانه تشریح",
                ],
                area: null,
            },
        ],
        footer: {
            doctor: "ډاکټر خالد خان ځدراڼ",
            specialty: "د اعصابو جراح او د مغز او ملا تیر متخصص",
            description:
                "د مغز، ملا تیر او اعصابو د ستونزو مشورې د افغانستان په کابل کې د رفاه په طبي کمپلکس کې.",
            location: "رفاه طبي کمپلکس، کابل، افغانستان",
            phone: "+93 78 765 4751",
            copyright:
                "© ۲۰۲۶ ډاکټر خالد خان ځدراڼ. ټول حقونه خوندي دي.",
            credit: "د Upskill له خوا جوړ شوی",
            creditUrl: "https://www.upskillacademy.tech/services",
            notice:
                "دا یوه نمایشي وېبپاڼه ده. د ملاقات فورمه معلومات نه لېږي او نه یې ساتي. په بېړنیو حالاتو کې نږدې بیړنۍ څانګې ته ورشئ.",
        },
    },
};

export default serviceData;
