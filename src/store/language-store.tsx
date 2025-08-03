import { makeAutoObservable } from "mobx";
import {
    FiFileText,
    FiCircle,
    FiLayers,
    FiCode,
    FiLayout
} from "react-icons/fi";
import React from "react";


type Language = 'EN' | 'UA';

const ICONS: { [key: number]: React.ReactElement } = {
    1: <FiFileText className="carousel-icon" />,
    2: <FiCircle className="carousel-icon" />,
    3: <FiLayers className="carousel-icon" />,
    4: <FiLayout className="carousel-icon" />,
    5: <FiCode className="carousel-icon" />,
};

// --- ОБ'ЄКТ З ПЕРЕКЛАДАМИ ---

const translations = {
    EN: {
        flag: "🇬🇧",
        mainText: "Hello, my name is Denys!",
        secondaryText: "I am FrontEnd React.js Developer",
        thirdText: "Experienced front-end developer specialising in building single-page applications (SPAs) using React.js, Redux Toolkit, TypeScript, Styled Components and MUI. Experienced in creating responsive user interfaces (UIs), dynamic forms, state management, and backend integration with Node.js, Express.js, and MongoDB. Proficient in HTML5, CSS/SCSS, JavaScript/TypeScript and version control systems such as Git, GitHub and GitLab. I am experienced with Google Tag Manager and Google Analytics 4. Focused on delivering clean, intuitive, and maintainable UI solutions.",
        Home: "Home",
        Projects: "Projects",
        Experience: "Experience",
        MyResume: "My Resume",
        DownloadResume: "Download Resume",
        workSkills: "Work Skills",
        softSkills: "Soft Skills",
        whatIKnow: [
            { id: 1, title: "Base", description: "HTML5, CSS3, JavaScript ES7" },
            { id: 2, title: "Advanced", description: "React.js & TypeScript" },
            { id: 3, title: "UI", description: "Material UI, Tailwind" },
            { id: 5, title: "State Managers", description: "Redux/RTX, MobX" },
            { id: 4, title: "BackEnd", description: "Node.js & Express.js, Nest.js" },
        ],
        whatILearn: [
            { id: 1, title: "Productivity", description: "Time Management, Dedicated" },
            { id: 2, title: "Communication Skills", description: "Communication, Patient" },
            { id: 3, title: "Leadership", description: "Team Collaboration" },
            { id: 4, title: "Adaptability", description: "Flexibility, Problem Solving" },
            { id: 5, title: "Analytical", description: "Research, Writing" },
        ],
        projects: [
            {
                title: "Fitness First",
                description: "A promotional site for a modern fitness club.",
                label: "JavaScript",
                imageUrl: "https://denys-prykhodko.netlify.app/project-photos/fitnes.png",
                linkUrl: "https://js-step-project-d-prkhdk-2ac9558b2a09d5b37fd2ce7bca98b763ad462a.gitlab.io/",
            },
            {
                title: "Temperature App",
                description: "Smart home temperature systems.",
                label: "React App",
                imageUrl: "https://denys-prykhodko.netlify.app/project-photos/Temperature%20Control%20App.png",
                linkUrl: "https://genuine-chaja-c4b152.netlify.app/",
            },
            {
                title: "Letter Box",
                description: "A social platform to discover, rate, and review movies. Built with React.js, MUI, Redux and Cloudinary.",
                label: "React App",
                imageUrl: "https://denys-prykhodko.netlify.app/project-photos/letterbox.png",
                linkUrl: "https://letterboxapp.netlify.app/",
            },
            {
                title: "SmileCraft Dental",
                description: "Website for a modern dental clinic with services list, contact form, and Google Maps integration.",
                label: "Landing",
                imageUrl: "https://denys-prykhodko.netlify.app/project-photos/dental.png",
                linkUrl: "https://smile-craft-dental.netlify.app/",
            },
            {
                title: "Old Portfolio",
                description: "My first portfolio page built on React.js",
                label: "React App",
                imageUrl: "/old_portfolio.png",
                linkUrl: "https://denys-prykhodko.netlify.app/",
            },
            {
                title: "TMDB",
                description: "App to search and display information about movies.",
                label: "React App",
                imageUrl: "https://denys-prykhodko.netlify.app/project-photos/tmdb.png",
                linkUrl: "https://illustrious-bubblegum-946264.netlify.app/",
            },
        ],
        experience: [
            {
                type: 'Education',
                date: '2021 - 2024',
                title: 'Bachelor of Computer Engineering',
                subtitle: 'National Aviation University (NAU)',
                description: 'Specializing in software engineering and systems analysis.',
                link: 'https://denys-prykhodko.netlify.app/%D0%A4%D0%9A%D0%9D_2024_123_%D0%9F%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D1%8C%D0%BA%D0%BE%D0%94%D0%A1.pdf',
                linkText: 'View Diploma'
            },
            {
                type: 'Courses',
                date: '2024',
                title: 'Front-End Developer',
                subtitle: 'DAN.IT',
                description: 'Development and maintenance of web applications using React, focusing on creating responsive user interfaces.',
                link: 'https://certificates.dan-it.com.ua/certificates/frontend/denys-prykhodko',
                linkText: 'View Certificate'
            },
            {
                type: 'Work',
                date: '2021 - 2024',
                title: 'Technical Support Programmer',
                subtitle: 'Binotel LLC',
                description: 'Assisting clients with technical tasks and resolving product-related issues.',
            },
            {
                type: 'Work',
                date: '2024 - Present',
                title: 'Supervisor of CallTracking & Integrations Dept.',
                subtitle: 'Binotel LLC',
                description: 'Assisting technical support engineers, managing reports, and building work processes.',
            },
        ],
    },
    UA: {
        flag: "🇺🇦",
        mainText: "Привіт, мене звати Денис!",
        secondaryText: "Я FrontEnd React.js Розробник",
        thirdText: "Досвідчений front-end розробник, що спеціалізується на створенні односторінкових додатків (SPA) з використанням React.js, Redux Toolkit, TypeScript, Styled Components та MUI. Має досвід у створенні адаптивних користувацьких інтерфейсів (UI), динамічних форм, управлінні станом та бекенд інтеграції з Node.js, Express.js та MongoDB. Володію HTML5, CSS/SCSS, JavaScript/TypeScript та системами контролю версій, такими як Git, GitHub та GitLab. Маю досвід роботи з Google Tag Manager та Google Analytics 4. Зосереджений на створенні чистих, інтуїтивно зрозумілих обслуговуванні UI рішень.",
        Home: "Головна",
        Projects: "Проєкти",
        Experience: "Досвід",
        MyResume: "Моє Резюме",
        DownloadResume: "Завантажити резюме",
        workSkills: "Професійні навички",
        softSkills: "Особисті навички",
        whatIKnow: [
            { id: 1, title: "База", description: "HTML5, CSS3, JavaScript ES7" },
            { id: 2, title: "Просунутий рівень", description: "React.js & TypeScript" },
            { id: 3, title: "Інтерфейс", description: "Material UI, Tailwind" },
            { id: 5, title: "Менеджери стану", description: "Redux/RTX, MobX" },
            { id: 4, title: "Бекенд", description: "Node.js & Express.js, Nest.js" },
        ],
        whatILearn: [
            { id: 1, title: "Продуктивність", description: "Тайм-менеджмент, Відданість" },
            { id: 2, title: "Комунікація", description: "Комунікабельність" },
            { id: 3, title: "Лідерство", description: "Командна співпраця" },
            { id: 4, title: "Адаптивність", description: "Гнучкість, Вирішення проблем" },
            { id: 5, title: "Аналітика", description: "Дослідження, Аналіз" },
        ],
        projects: [
            {
                title: "Фітнес-Клуб",
                description: "Промо-сайт для сучасного фітнес-клубу.",
                label: "JavaScript",
                imageUrl: "https://denys-prykhodko.pp.ua/project-photos/fitnes.png",
                linkUrl: "https://js-step-project-d-prkhdk-2ac9558b2a09d5b37fd2ce7bca98b763ad462a.gitlab.io/",
            },
            {
                title: "Температура",
                description: "Системи контролю температури для будинку.",
                label: "React-додаток",
                imageUrl: "https://denys-prykhodko.pp.ua/project-photos/Temperature%20Control%20App.png",
                linkUrl: "https://genuine-chaja-c4b152.netlify.app/",
            },
            {
                title: "Letter Box",
                description: "Соціальна мережа для пошуку, оцінки та огляду фільмів. Створено на React.js, MUI, Redux та Cloudinary.",
                label: "React-додаток",
                imageUrl: "https://denys-prykhodko.pp.ua/project-photos/letterbox.png",
                linkUrl: "https://letterboxapp.netlify.app/",
            },
            {
                title: "Стоматологія SmileCraft",
                description: "Сайт для сучасної стоматологічної клініки з переліком послуг, контактною формою та інтеграцією з Google Maps.",
                label: "Лендінг",
                imageUrl: "https://denys-prykhodko.pp.ua/project-photos/dental.png",
                linkUrl: "https://smile-craft-dental.netlify.app/",
            },
            {
                title: "Старе Портфоліо",
                description: "Моя перша сторінка-портфоліо на React",
                label: "React-додаток",
                imageUrl: "/old_portfolio.png",
                linkUrl: "https://denys-prykhodko.netlify.app/",
            },
            {
                title: "TMDB",
                description: "Додаток для відображення інформації про фільми.",
                label: "React-додаток",
                imageUrl: "https://denys-prykhodko.pp.ua/project-photos/tmdb.png",
                linkUrl: "https://illustrious-bubblegum-946264.netlify.app/",
            },
        ],
        experience: [
            {
                type: 'Освіта',
                date: '2021 - 2024',
                title: 'Бакалавр Комп\'ютерної Інженерії',
                subtitle: 'Національний Авіаційний Університет (НАУ)',
                description: 'Спеціалізація на програмній інженерії та системному аналізі.',
                link: 'https://denys-prykhodko.netlify.app/%D0%A4%D0%9A%D0%9D_2024_123_%D0%9F%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D1%8C%D0%BA%D0%BE%D0%94%D0%A1.pdf',
                linkText: 'Переглянути диплом'
            },
            {
                type: 'Курси',
                date: '2024',
                title: 'Front-End Розробник',
                subtitle: 'DAN.IT',
                description: 'Розробка та підтримка веб-додатків з використанням React та TypeScript, фокус на створенні адаптивних інтерфейсів.',
                link: 'https://certificates.dan-it.com.ua/certificates/frontend/denys-prykhodko',
                linkText: 'Переглянути сертифікат'
            },
            {
                type: 'Робота',
                date: '2021 - 2024',
                title: 'Технік-програміст в технічній підтримці',
                subtitle: 'ТОВ Binotel',
                description: 'Допомога клієнтам в реалізації технічних завдань та складнощів в роботі продукта.',
            },
            {
                type: 'Робота',
                date: '2024 - Зараз',
                title: 'Супервайзер відділів CallTracking та Інтеграцій',
                subtitle: 'ТОВ Binotel',
                description: 'Допомога інженерам технічної підтримки у вирішеннях питань клієнтів, ведення звітностей та побудова процесів роботи.',
            },
        ],

    }
};

export class LanguageStore {
    language: Language = 'EN';

    constructor() {
        makeAutoObservable(this);
        this.loadLanguageFromStorage();
    }

    toggleChange = () => {
        this.language = this.language === 'EN' ? 'UA' : 'EN';
        this.saveLanguageToStorage();
    };

    private saveLanguageToStorage() {
        localStorage.setItem('app_language', this.language);
    }
    private loadLanguageFromStorage() {
        const savedLanguage = localStorage.getItem('app_language') as Language;
        if (savedLanguage && (savedLanguage === 'EN' || savedLanguage === 'UA')) {
            this.language = savedLanguage;
        }
    }

    get currentTranslation() {
        return translations[this.language];
    }

    get mainText() { return this.currentTranslation.mainText; }
    get secondaryText() { return this.currentTranslation.secondaryText; }
    get thirdText() { return this.currentTranslation.thirdText; }
    get languageFlag() { return this.currentTranslation.flag; }
    get Home() { return this.currentTranslation.Home; }
    get Projects() { return this.currentTranslation.Projects; }
    get Experience() { return this.currentTranslation.Experience; }
    get MyResume() { return this.currentTranslation.MyResume; }

    get whatIKnowItems() {
        const translatedContent = this.currentTranslation.whatIKnow;
        const categoryText = this.currentTranslation.workSkills;

        return translatedContent.map(item => ({
            ...item,
            text: categoryText,
            icon: ICONS[item.id] || <FiFileText className="carousel-icon" />,
        }));
    }

    get whatILearnItems() {
        const translatedContent = this.currentTranslation.whatILearn;
        const categoryText = this.currentTranslation.softSkills;

        return translatedContent.map(item => ({
            ...item,
            text: categoryText,
            icon: ICONS[item.id] || <FiFileText className="carousel-icon" />,
        }));
    }
    get projectsData() {
        return this.currentTranslation.projects;
    }
    get experienceData() {
        return this.currentTranslation.experience;
    }
    get DownloadResume() {
        return this.currentTranslation.DownloadResume;
    }
}

export const languageStore = new LanguageStore();