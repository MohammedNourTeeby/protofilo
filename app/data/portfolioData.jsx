export const portfolioData = {
  ar: {
    personalInfo: {
      name: "محمد نور طيبي",
      title: "مطور تطبيقات ويب متكامل",
      email: "Mohammednourteeby@gmail.com",
      phone: "00963965214162",
      location: "حلب، سوريا",
      github: "github.com/MohammedNourTeeby",
      linkedin: "linkedin.com/in/mohammed-nour-teeby-1397942b4",
      dob: "1/1/1997",
      nationality: "سوري"
    },
    professionalExperience: [
      {
        title: "مطور تطبيقات ويب متكامل",
        company: "منصة الاعتبار العربي التعليمية",
        period: "01/2023 – 01/2025",
        achievements: [
          "تطوير واجهات مستخدم ديناميكية باستخدام Next.js 15 و Tailwind CSS",
          "بناء ودمج واجهات برمجة تطبيقات RESTful باستخدام Node.js و Express.js",
          "إدارة قواعد البيانات PostgreSQL و MongoDB",
          "التعاون مع فرق التصميم والتطوير لتحقيق منتجات عالية الجودة"
        ]
      }
    ],
    education: [
      {
        degree: "بكالوريوس في نظم المعلومات الإدارية",
        institution: "جامعة حلب، سوريا",
        year: "2019"
      },
      {
        degree: "ماجستير في الذكاء الاصطناعي",
        institution: "جامعة حلب، سوريا",
        year: "2019"
      }
    ],
    skills: {
      frontend: ["JavaScript (ES6+)", "TypeScript", "Next.js 15", "React", "JSX", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS"],
      backend: ["Strapi 5", "Node.js", "Express.js"],
      databases: ["PostgreSQL", "MySQL", "MongoDB"],
      devops: ["Git", "Docker", "Vercel", "AWS", "CI/CD"]
    },
    projects: [
      {
        title: "متجر تطرني للأحذية",
        period: "02/2025 – 05/2025",
        description: "متجر إلكتروني متعدد المستخدمين لبيع الأحذية",
        technologies: ["React", "Node.js", "Express.js", "MongoDB"],
        achievements: [
          "تطوير واجهة مستخدم تفاعلية باستخدام React",
          "دمج بوابة دفع آمنة (Stripe)",
          "تحسين أداء قواعد البيانات وتنفيذ التخزين المؤقت"
        ]
      },
      {
        title: "منصة الاعتماد العربي التعليمية",
        period: "01/2024 – 04/2024",
        description: "منصة تعليمية شاملة",
        technologies: ["Next.js 15", "Tailwind CSS", "Strapi", "PostgreSQL"],
        achievements: [
          "تحسين سرعة تحميل الصفحات بنسبة 30%",
          "تنفيذ نظام إدارة حالة باستخدام Redux Toolkit",
          "تنفيذ نظام مصادقة آمن باستخدام JWT"
        ],
        link: "https://github.com/MohammedNourTeeby/CopyPlattForm.git" ,
          imageUrl: "/homepage.png" // أضف هذا الحقل

      }
    ],
    certificates: [
      "تطوير الواجهات الأمامية والخلفية - Coursera",
      "مقدمة في HTML, CSS, & JavaScript - Coursera",
      "مقدمة في هندسة البرمجيات - Coursera",
      "JS, TypeScript, Next JS, React JS, MongoDB, PostgreSQL - Coursera"
    ],
    languages: [
      { language: "العربية", level: "اللغة الأم" },
      { language: "الإنجليزية", level: "متقدم" }
    ],
    cvUrl: "/CV.pdf",
    achievements: [ // أضف هذا القسم للغة العربية
      {
        title: "أفضل تطبيق تعليمي",
        description: "جائزة أفضل تطبيق تعليمي لعام 2024 عن منصة الاعتبار العربي",
        date: "مايو 2024"
      },
      {
        title: "مطور العام",
        description: "تصنيف كمطور العام في مسابقة البرمجة السنوية",
        date: "ديسمبر 2023"
      },
      {
        title: "ابتكار تقني",
        description: "جائزة للابتكار التقني في حلول التجارة الإلكترونية",
        date: "أغسطس 2023"
      }
    ]
  },
  en: {
    personalInfo: {
      name: "Mohammed Nour Teeby",
      title: "Full Stack Developer",
      email: "Mohammednourteeby@gmail.com",
      phone: "00963965214162",
      location: "Aleppo, Syria",
      github: "github.com/MohammedNourTeeby",
      linkedin: "linkedin.com/in/mohammed-nour-teeby-1397942b4",
      dob: "1/1/1997",
      nationality: "Syrian"
    },
    professionalExperience: [
      {
        title: "Full Stack Developer",
        company: "Al-I'tibar Al-Arabi Educational Platform",
        period: "01/2023 – 01/2025",
        achievements: [
          "Developed dynamic user interfaces using Next.js 15 and Tailwind CSS",
          "Built and integrated RESTful APIs using Node.js and Express.js",
          "Managed PostgreSQL and MongoDB databases",
          "Collaborated with design and development teams to deliver high-quality products"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor's in Management Information Systems",
        institution: "University of Aleppo, Syria",
        year: "2019"
      },
      {
        degree: "Master's in Artificial Intelligence",
        institution: "University of Aleppo, Syria",
        year: "2019"
      }
    ],
    skills: {
      frontend: ["JavaScript (ES6+)", "TypeScript", "Next.js 15", "React", "JSX", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS"],
      backend: ["Strapi 5", "Node.js", "Express.js"],
      databases: ["PostgreSQL", "MySQL", "MongoDB"],
      devops: ["Git", "Docker", "Vercel", "AWS", "CI/CD"]
    },
    projects: [
      {
        title: "Tatrnii Shoe Store",
        period: "02/2025 – 05/2025",
        description: "Multi-user e-commerce store for selling shoes",
        technologies: ["React", "Node.js", "Express.js", "MongoDB"],
        achievements: [
          "Developed responsive UI using React",
          "Integrated secure payment gateway (Stripe)",
          "Optimized database queries and implemented caching"
        ]
      },
      {
        title: "Al-I'timad Al-Arabi Educational Platform",
        period: "01/2024 – 04/2024",
        description: "Comprehensive educational platform",
        technologies: ["Next.js 15", "Tailwind CSS", "Strapi", "PostgreSQL"],
        achievements: [
          "Improved page load speed by 30%",
          "Implemented state management with Redux Toolkit",
          "Set up secure JWT authentication flow"
        ],
        link: "https://github.com/MohammedNourTeeby/CopyPlattForm.git",
          imageUrl: "/homepage.png" // أضف هذا الحقل

      }
    ],
    certificates: [
      "Front-end & Back-end Development - Coursera",
      "Introduction to HTML, CSS, & JavaScript - Coursera",
      "Introduction to Software Engineering - Coursera",
      "JS, TypeScript, Next JS, React JS, MongoDB, PostgreSQL - Coursera"
    ],
    languages: [
      { language: "Arabic", level: "Native Proficiency" },
      { language: "English", level: "Advanced Proficiency" }
    ],
    cvUrl: "/CV.pdf",
    achievements: [ // أضف هذا القسم للغة الإنجليزية
      {
        title: "Best Educational App",
        description: "Award for Best Educational App 2024 for Al-I'tibar Al-Arabi Platform",
        date: "May 2024"
      },
      {
        title: "Developer of the Year",
        description: "Ranked as Developer of the Year in Annual Coding Competition",
        date: "December 2023"
      },
      {
        title: "Technical Innovation",
        description: "Award for Technical Innovation in E-commerce Solutions",
        date: "August 2023"
      }
    ]
  }
}; // تأكد من عدم وجود فاصلة زائدة هنا