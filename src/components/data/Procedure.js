
const procedureData = {
    label: "PROCEDURES",
    heading: "Operations for the brain, spine and nerves",
    description:
        "Every operation starts with a consultation. The summaries below are general; the doctor will explain what applies to you.",

    filters: ["All", "Brain", "Spine", "Nerves", "Head injury"],

    procedures: [
        {
            id: 1,
            category: "Brain",
            title: "Brain tumor surgery",
            subtitle: "Craniotomy and tumor removal",
            description:
                "Surgery to remove or reduce a tumor in the brain, planned around your scans.",
        },
        {
            id: 2,
            category: "Brain",
            title: "Fluid on the brain",
            subtitle: "Hydrocephalus shunt surgery",
            description:
                "A thin tube drains extra fluid from the brain to relieve pressure.",
        },
        {
            id: 3,
            category: "Brain",
            title: "Bleeding in the brain",
            subtitle: "Hematoma evacuation",
            description:
                "Removal of a blood collection that is pressing on the brain.",
        },
        {
            id: 4,
            category: "Spine",
            title: "Slipped disc surgery",
            subtitle: "Discectomy",
            description:
                "Removing the part of a disc that presses on a nerve and causes back or leg pain.",
        },
        {
            id: 5,
            category: "Spine",
            title: "Narrowed spinal canal",
            subtitle: "Laminectomy for spinal stenosis",
            description:
                "Making more room for the spinal cord and nerves to ease pain, numbness or weakness.",
        },
        {
            id: 6,
            category: "Spine",
            title: "Spine stabilisation",
            subtitle: "Spinal fusion",
            description:
                "Joining two or more vertebrae so an unstable part of the spine is held firm.",
        },
        {
            id: 7,
            category: "Spine",
            title: "Broken spine repair",
            subtitle: "Spinal fracture fixation",
            description:
                "Surgery to stabilise a fractured vertebra after an injury.",
        },
        {
            id: 8,
            category: "Nerves",
            title: "Carpal tunnel release",
            subtitle: "Median nerve decompression",
            description:
                "Freeing the trapped nerve at the wrist that causes hand numbness and tingling.",
        },
        {
            id: 9,
            category: "Nerves",
            title: "Trapped nerve release",
            subtitle: "Peripheral nerve decompression",
            description:
                "Relieving pressure on a nerve in the arm or leg to reduce pain and weakness.",
        },
        {
            id: 10,
            category: "Head injury",
            title: "Head injury surgery",
            subtitle: "Emergency craniotomy",
            description:
                "Urgent surgery after a serious head injury to protect the brain.",
        },
        {
            id: 11,
            category: "Head injury",
            title: "Skull fracture repair",
            subtitle: "Depressed skull fracture elevation",
            description:
                "Lifting and repairing broken skull bone that is pressing inwards.",
        },
    ],

    operatingRoom: {
        label: "INSIDE THE OPERATING ROOM",
        heading: "Where your surgery happens",
        photos: [
            {
                image: "/images/gallery/operating-room.jpg",
                alt: "Dr. Khalid Khan Zadran performing surgery under the operating light",
                title: "In surgery",
            },
            {
                image: "/images/gallery/operating-room.jpg",
                alt: "Dr. Khalid Khan Zadran in scrubs in the operating room",
                title: "The operating room",
            },
            {
                image: "/images/gallery/clinic-scrubs.jpg",
                alt: "Dr. Khalid Khan Zadran in scrubs writing notes at his desk",
                title: "Reviewing a case",
            },
        ],
    },

    imaging: {
        label: "IMAGING",
        heading: "Scans reviewed before every operation",
        description:
            "MRI and CT scans guide every surgical plan. Patient details have been removed from these images.",

        scans: [
            {
                image: null,
                alt: "Side-view MRI of the brain",
                title: "Brain MRI, side view",
            },
            {
                image: null,
                alt: "Front-view MRI of the brain",
                title: "Brain MRI, front view",
            },
            {
                image: null,
                alt: "MRI of the brainstem and upper spine",
                title: "Brainstem and neck MRI",
            },
            {
                image: null,
                alt: "MRI of the neck spine",
                title: "Neck spine MRI",
            },
        ],
    },

    steps: {
        label: "WHAT TO EXPECT",
        heading: "From first visit to recovery",
        items: [
            {
                number: "01",
                title: "Consultation",
                description: "Talk through your symptoms and history.",
            },
            {
                number: "02",
                title: "Scans and reports",
                description: "Your MRI, CT and reports are reviewed together.",
            },
            {
                number: "03",
                title: "Treatment plan",
                description: "Options, risks and next steps explained clearly.",
            },
            {
                number: "04",
                title: "Recovery and follow-up",
                description: "Check-ups after treatment to track your progress.",
            },
        ],
    },

    faq: {
        label: "QUESTIONS",
        heading: "Common questions about surgery",
        description:
            "If your question is not here, call the clinic or send a WhatsApp message.",

        items: [
            {
                question: "Will I definitely need an operation?",
                answer:
                    "Not always. Many brain, spine and nerve problems are first managed without surgery. The consultation is where the doctor explains whether an operation is the right option for you.",
            },
            {
                question: "What should I bring to my consultation?",
                answer:
                    "Bring any available MRI or CT scans, medical reports, a list of your current medicines, and relevant medical history.",
            },
            {
                question: "How long is the recovery?",
                answer:
                    "Recovery depends on the condition, procedure and individual circumstances. The doctor can explain the expected recovery and follow-up plan for your case.",
            },
            {
                question: "How do I book?",
                answer:
                    "Use the appointment page to submit a demonstration request, or contact Rifah Medical Complex directly at +93 78 765 4751.",
            },
        ],
    },

    appointmentButton: "Request a consultation",
    finalButton: "Request an appointment",

    // Translations for the Procedure page.
    // English remains the default language.
    translations: {
        en: {
            label: "PROCEDURES",
            heading: "Operations for the brain, spine and nerves",
            description:
                "Every operation starts with a consultation. The summaries below are general; the doctor will explain what applies to you.",
            filters: {
                All: "All",
                Brain: "Brain",
                Spine: "Spine",
                Nerves: "Nerves",
                "Head injury": "Head injury",
            },
            operatingRoom: {
                label: "INSIDE THE OPERATING ROOM",
                heading: "Where your surgery happens",
            },
            imaging: {
                label: "IMAGING",
                heading: "Scans reviewed before every operation",
                description:
                    "MRI and CT scans guide every surgical plan. Patient details have been removed from these images.",
            },
            steps: {
                label: "WHAT TO EXPECT",
                heading: "From first visit to recovery",
                items: [
                    {
                        title: "Consultation",
                        description: "Talk through your symptoms and history.",
                    },
                    {
                        title: "Scans and reports",
                        description: "Your MRI, CT and reports are reviewed together.",
                    },
                    {
                        title: "Treatment plan",
                        description: "Options, risks and next steps explained clearly.",
                    },
                    {
                        title: "Recovery and follow-up",
                        description: "Check-ups after treatment to track your progress.",
                    },
                ],
            },
            faq: {
                label: "QUESTIONS",
                heading: "Common questions about surgery",
                description:
                    "If your question is not here, call the clinic or send a WhatsApp message.",
                items: [
                    {
                        question: "Will I definitely need an operation?",
                        answer:
                            "Not always. Many brain, spine and nerve problems are first managed without surgery. The consultation is where the doctor explains whether an operation is the right option for you.",
                    },
                    {
                        question: "What should I bring to my consultation?",
                        answer:
                            "Bring any available MRI or CT scans, medical reports, a list of your current medicines, and relevant medical history.",
                    },
                    {
                        question: "How long is the recovery?",
                        answer:
                            "Recovery depends on the condition, procedure and individual circumstances. The doctor can explain the expected recovery and follow-up plan for your case.",
                    },
                    {
                        question: "How do I book?",
                        answer:
                            "Use the appointment page to submit a demonstration request, or contact Rifah Medical Complex directly at +93 78 765 4751.",
                    },
                ],
            },
            appointmentButton: "Request a consultation",
            finalButton: "Request an appointment",
            bookButton: "Book appointment",
            viewProcedure: "View procedure",
        },

        fa: {
            label: "عملیات جراحی",
            heading: "عملیات جراحی مغز، ستون فقرات و اعصاب",
            description:
                "هر عملیات جراحی با مشوره آغاز می‌شود. توضیحات زیر عمومی است؛ داکتر مشخص می‌کند که کدام گزینه برای شما مناسب است.",
            filters: {
                All: "همه",
                Brain: "مغز",
                Spine: "ستون فقرات",
                Nerves: "اعصاب",
                "Head injury": "آسیب سر",
            },
            operatingRoom: {
                label: "داخل اتاق عملیات",
                heading: "محل انجام عملیات جراحی",
            },
            imaging: {
                label: "تصویربرداری",
                heading: "بررسی اسکن‌ها پیش از هر عملیات",
                description:
                    "اسکن‌های MRI و CT در طرح‌ریزی عملیات جراحی کمک می‌کنند. معلومات شخصی بیماران از این تصاویر حذف شده است.",
            },
            steps: {
                label: "مراحل درمان",
                heading: "از نخستین مراجعه تا بهبودی",
                items: [
                    {
                        title: "مشوره",
                        description: "علایم و سابقه صحی خود را با داکتر در میان بگذارید.",
                    },
                    {
                        title: "اسکن‌ها و گزارش‌ها",
                        description: "اسکن‌های MRI، CT و گزارش‌های شما با هم بررسی می‌شوند.",
                    },
                    {
                        title: "برنامه درمان",
                        description: "گزینه‌ها، خطرات و مراحل بعدی به‌روشنی توضیح داده می‌شوند.",
                    },
                    {
                        title: "بهبودی و پیگیری",
                        description: "پس از درمان، معاینات برای بررسی روند بهبودی انجام می‌شوند.",
                    },
                ],
            },
            faq: {
                label: "پرسش‌ها",
                heading: "پرسش‌های رایج درباره جراحی",
                description:
                    "اگر پاسخ پرسش شما در این بخش نیست، با کلینیک تماس بگیرید یا در واتساپ پیام بفرستید.",
                items: [
                    {
                        question: "آیا حتماً به عملیات جراحی نیاز دارم؟",
                        answer:
                            "خیر، همیشه چنین نیست. بسیاری از مشکلات مغز، ستون فقرات و اعصاب ابتدا بدون جراحی درمان می‌شوند. داکتر در جریان مشوره توضیح می‌دهد که آیا جراحی برای شما مناسب است یا خیر.",
                    },
                    {
                        question: "برای مشوره چه چیزهایی بیاورم؟",
                        answer:
                            "در صورت موجود بودن، اسکن‌های MRI یا CT، گزارش‌های طبی، فهرست دواهای فعلی و سابقه صحی مرتبط خود را بیاورید.",
                    },
                    {
                        question: "مدت بهبودی چقدر است؟",
                        answer:
                            "مدت بهبودی به بیماری، نوع عملیات و شرایط هر فرد بستگی دارد. داکتر می‌تواند زمان تقریبی بهبودی و برنامه پیگیری را برای شما توضیح دهد.",
                    },
                    {
                        question: "چگونه وقت بگیرم؟",
                        answer:
                            "از صفحه نوبت‌دهی درخواست خود را ثبت کنید یا مستقیماً با مجتمع طبی رفاه به شماره +93 78 765 4751 تماس بگیرید.",
                    },
                ],
            },
            appointmentButton: "درخواست مشوره",
            finalButton: "درخواست نوبت",
            bookButton: "گرفتن نوبت",
            viewProcedure: "مشاهده عملیات",
        },

        ps: {
            label: "جراحي عملیاتونه",
            heading: "د مغز، ملا تیر او اعصاب جراحي عملیاتونه",
            description:
                "هر جراحي عملیات له مشورې څخه پیلېږي. لاندې تشریحات عمومي دي؛ ډاکټر به روښانه کړي چې ستاسو لپاره کومه لاره مناسبه ده.",
            filters: {
                All: "ټول",
                Brain: "مغز",
                Spine: "ملا تیر",
                Nerves: "اعصاب",
                "Head injury": "د سر ټپ",
            },
            operatingRoom: {
                label: "د عملیاتو په خونه کې",
                heading: "ستاسو عملیات چېرته ترسره کېږي",
            },
            imaging: {
                label: "انځور اخیستنه",
                heading: "له هر عملیات مخکې د سکنونو ارزونه",
                description:
                    "د MRI او CT سکنونه د جراحي د پلان په جوړولو کې مرسته کوي. د ناروغانو شخصي معلومات له دغو انځورونو لرې شوي دي.",
            },
            steps: {
                label: "څه تمه ولرئ",
                heading: "له لومړۍ لیدنې څخه تر رغېدو پورې",
                items: [
                    {
                        title: "مشوره",
                        description: "خپلې نښې او روغتیايي مخینه له ډاکټر سره شریکه کړئ.",
                    },
                    {
                        title: "سکنونه او راپورونه",
                        description: "ستاسو د MRI، CT سکنونه او راپورونه یوځای ارزول کېږي.",
                    },
                    {
                        title: "د درملنې پلان",
                        description: "د درملنې لارې، خطرونه او راتلونکي ګامونه په روښانه ډول بیانېږي.",
                    },
                    {
                        title: "رغېدل او تعقیبي معاینات",
                        description: "له درملنې وروسته معاینات ستاسو د رغېدو بهیر څاري.",
                    },
                ],
            },
            faq: {
                label: "پوښتنې",
                heading: "د جراحي په اړه عامې پوښتنې",
                description:
                    "که ستاسو پوښتنه دلته ځواب نه لري، له کلینیک سره اړیکه ونیسئ یا په واټساپ پیغام واستوئ.",
                items: [
                    {
                        question: "ایا زه حتماً عملیاتو ته اړتیا لرم؟",
                        answer:
                            "تل نه. د مغز، ملا تیر او اعصابو ډېرې ستونزې لومړی له جراحي پرته درملنه کېږي. ډاکټر به د مشورې پر مهال تشریح کړي چې جراحي ستاسو لپاره مناسبه ده که نه.",
                    },
                    {
                        question: "مشورې ته څه شی راوړم؟",
                        answer:
                            "که موجود وي، د MRI یا CT سکنونه، طبي راپورونه، د خپلو اوسنیو درملو لېست او اړونده روغتیايي مخینه له ځان سره راوړئ.",
                    },
                    {
                        question: "د رغېدو موده څومره ده؟",
                        answer:
                            "د رغېدو موده د ناروغۍ، عملیاتو او د هر شخص له حالت سره تړاو لري. ډاکټر به ستاسو د حالت له مخې د رغېدو اټکلي موده او د تعقیبي معایناتو پلان تشریح کړي.",
                    },
                    {
                        question: "څنګه وخت واخلم؟",
                        answer:
                            "د نوبت پاڼې له لارې خپله غوښتنه واستوئ، یا په مستقیم ډول د رفاه طبي کمپلکس سره پر +93 78 765 4751 اړیکه ونیسئ.",
                    },
                ],
            },
            appointmentButton: "د مشورې غوښتنه",
            finalButton: "د نوبت غوښتنه",
            bookButton: "د نوبت اخیستل",
            viewProcedure: "د عملیاتو معلومات",
        },
    },
};

export default procedureData;
