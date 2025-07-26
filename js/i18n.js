// Internationalization (i18n) Configuration
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            education: "Education",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            title: "Hi, I'm Charlie Yang",
            subtitle: "MSCS @ Brown | SDE Intern @ AWS Kiro",
            description: "Passionate about AI system development, Agentic AI, LLM application development, multimodal development, and Computer Vision for medical research. Currently working as an intern at Kiro, where I lead the development of context compaction functionality. Experienced in building Computer Vision Systems and developing Web Apps for healthcare applications.",
            getInTouch: "Get In Touch",
            learnMore: "Learn More"
        },
        about: {
            title: "About Me",
            paragraph1: "I'm a dedicated AI engineer and software developer currently pursuing my Master's degree in Computer Science at Brown University. I have extensive experience in building Computer Vision Systems and developing Web Apps, particularly focused on medical imaging and AI for healthcare applications.",
            paragraph2: "My interests include AI system development, Agentic AI, Software Development, and LLM & Computer Vision for medical research. I'm currently working on development of Agentic AI IDE at AWS Kiro, where I gained hands-on experience in LLM context management, TypeScript & JavaScript development, and MCP. Besides my technical work, I'm also a Personal Trainer at Brown Nelson Fitness Center!",
            yearsExperience: "Years Experience",
            projectsCompleted: "Projects Completed",
            technologies: "Technologies"
        },
        experience: {
            title: "Experience",
            "aws-kiro": {
                title: "Software Engineer Intern",
                company: "Amazon Web Services (AWS) - Kiro",
                date: "Jun 2025 - Present",
                location: "Seattle, WA",
                bullet1: "Led design and productization of context management system for Agentic AI IDE",
                bullet2: "Developed modular framework combining hierarchical context compaction and RAG",
                bullet3: "Integrated context system into production pipelines with LLM context management",
                description: "Working on the development of Agentic AI IDE, focusing on context management and LLM integration.",
                responsibility1: "Independently led the design and productization of the context management system for Agentic AI IDE, enabling efficient multi-turn memory handling and scalable LLM interaction",
                responsibility2: "Developed a modular, switchable framework combining hierarchical context compaction, importance-based tagging, memory bank, and RAG, supporting flexible deployment and ablation testing",
                responsibility3: "Designed and ran internal experiments and benchmarks to evaluate context strategies under token and latency constraints, in collaboration with senior applied scientists from the SCI team",
                responsibility4: "Integrated the context system into production pipelines, supporting dynamic retrieval, compact history injection, and future extensions toward agentic reasoning",
                responsibility5: "Fixed key UI issues in the chat interface and IDE layout, improving usability and interface consistency",
                achievement1: "Led independent design and productization of context management system",
                achievement2: "Developed modular framework for flexible deployment",
                achievement3: "Collaborated with senior applied scientists on experiments",
                achievement4: "Integrated system into production pipelines"
            },
            "brown-health": {
                title: "Research Intern",
                company: "Brown University Health",
                date: "Mar 2025 - Present",
                location: "Providence, RI",
                bullet1: "Developing web-based platform for AI-generated medical reports",
                bullet2: "Deployed VILA-M3 vision-language model for medical report generation",
                bullet3: "Processed 10,000+ brain MRI images and developed automated preprocessing pipeline",
                bullet4: "Deployed nnU-Net v2 for automated brain stroke lesion segmentation",
                bullet5: "Built with Python (Flask), JavaScript, and real-time LLM inference"
            },
            "rici": {
                title: "Lead Web Developer & Designer",
                company: "Rhode Island Coalition for Israel",
                date: "Dec 2024 - Feb 2025",
                location: "Providence, RI",
                bullet1: "Revamped RICI website with responsive design and interactive forms",
                bullet2: "Integrated MailChimp for automated campaigns and user engagement",
                bullet3: "Optimized UI/UX using Google Analytics and responsive design",
                bullet4: "Collaborated with team members to deliver user-focused solutions"
            },
            "shukun-tech": {
                title: "Algorithm Engineering Intern",
                company: "Shukun Technology Co., Ltd",
                date: "May 2024 - Aug 2024",
                location: "Beijing, China",
                bullet1: "Improved brain region segmentation and tumor detection for 5,000+ patients",
                bullet2: "Constructed tree-structured data system for 3D brain region segmentation",
                bullet3: "Processed 10,000+ MRI brain images from five major hospitals"
            },
            "casia": {
                title: "Software and Machine Learning Engineer Intern",
                company: "Institute of Automation, Chinese Academy of Sciences",
                date: "May 2023 - May 2024",
                location: "Beijing, China",
                bullet1: "Obtained software patent and secured national grant for ICU monitoring",
                bullet2: "Designed real-time patient monitoring system with hybrid algorithm",
                bullet3: "Developed React-based web app for patient data visualization",
                bullet4: "Built multi-modal HCI system for medical service robot with action recognition"
            }
        },
        education: {
            title: "Education",
            "brown": {
                degree: "Master of Science in Computer Science",
                school: "Brown University",
                date: "Sep 2024 - May 2026",
                location: "Providence, Rhode Island, United States",
                summary: "Currently pursuing advanced studies in computer science with focus on AI, machine learning, and software engineering."
            },
            "ustb": {
                degree: "Bachelor of Engineering in Artificial Intelligence",
                school: "University of Science and Technology Beijing",
                date: "Sep 2020 - Jul 2024",
                location: "Beijing, China",
                summary: "Graduated with honors (GPA: 3.83/4.0). Dean's Medal Recipient for outstanding academic performance, leadership, and significant contributions to university projects."
            }
        },
        skills: {
            title: "Skills & Technologies",
            languages: "Languages",
            frameworks: "Frameworks",
            developerTools: "Developer Tools",
            libraries: "Libraries"
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Let's Connect",
            description: "I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just say hello!"
        },
        common: {
            clickForDetails: "Click for details →",
            backToExperience: "Back to Experience",
            backToEducation: "Back to Education",
            experienceNotFound: "Experience not found",
            educationNotFound: "Education not found",
            internship: "Internship",
            graduateProgram: "Graduate Program",
            undergraduateProgram: "Undergraduate Program",
            keyResponsibilities: "Key Responsibilities",
            technologiesUsed: "Technologies Used",
            keyAchievements: "Key Achievements",
            areasOfFocus: "Areas of Focus",
            activitiesLeadership: "Activities & Leadership",
            keyAchievementsAwards: "Key Achievements & Awards",
            gpa: "GPA"
        },
        footer: {
            copyright: "© 2024 Charlie Yang. All rights reserved."
        },
        test: {
            title: "Language Test Page",
            navigation: "Navigation",
            hero: "Hero Section",
            common: "Common Elements"
        },
        demo: {
            title: "Bilingual Website Demo",
            description: "Welcome to the bilingual demo of Charlie Yang's personal website! This website supports both Chinese and English languages. Try clicking the language switcher buttons in the top right corner to see the magic happen.",
            viewFull: "View Full Website",
            readGuide: "Read Guide",
            features: "Key Features",
            feature1: "Complete bilingual support (Chinese/English)",
            feature2: "Automatic language preference saving",
            feature3: "Responsive design for all devices",
            feature4: "Smooth language switching animation"
        }
    },
    zh: {
        nav: {
            home: "首页",
            about: "关于我",
            experience: "工作经历",
            education: "教育背景",
            skills: "技能技术",
            contact: "联系方式"
        },
        hero: {
            title: "你好，我是杨新烨",
            subtitle: "布朗大学计算机科学硕士 | AWS Kiro 软件工程师实习生",
            description: "热衷于AI系统开发、智能代理AI、LLM应用开发、多模态开发和医疗研究计算机视觉。作为Kiro组实习生，我负责上下文压缩功能开发。在构建计算机视觉系统和开发医疗应用Web应用方面经验丰富。",
            getInTouch: "联系我",
            learnMore: "了解更多"
        },
        about: {
            title: "关于我",
            paragraph1: "我是一名专注的AI工程师和软件开发者，目前正在布朗大学攻读计算机科学硕士学位。我在构建计算机视觉系统和开发Web应用方面经验丰富，特别专注于医学影像和医疗AI应用。",
            paragraph2: "我的兴趣包括AI系统开发、智能代理AI、软件开发以及用于医疗研究的LLM和计算机视觉。我目前在AWS Kiro从事智能代理AI IDE的开发工作，在那里获得了LLM上下文管理、TypeScript和JavaScript开发以及MCP的实践经验。除了技术工作，我还是布朗大学Nelson健身中心的私人教练！",
            yearsExperience: "年工作经验",
            projectsCompleted: "完成项目",
            technologies: "技术栈"
        },
        experience: {
            title: "工作经历",
            "aws-kiro": {
                title: "软件工程师实习生",
                company: "亚马逊云服务 (AWS) - Kiro",
                date: "2025年6月 - 至今",
                location: "西雅图，华盛顿州",
                bullet1: "主导智能代理AI IDE上下文管理系统的设计和产品化",
                bullet2: "开发结合层次化上下文压缩和RAG的模块化框架",
                bullet3: "将上下文系统集成到生产流水线中，实现LLM上下文管理",
                description: "从事智能代理AI IDE的开发工作，专注于上下文管理和LLM集成。",
                responsibility1: "独立主导智能代理AI IDE上下文管理系统的设计和产品化，实现高效的多轮记忆处理和可扩展的LLM交互",
                responsibility2: "开发结合层次化上下文压缩、重要性标记、记忆库和RAG的模块化可切换框架，支持灵活部署和消融测试",
                responsibility3: "设计并运行内部实验和基准测试，在token和延迟约束下评估上下文策略，与SCI团队的高级应用科学家合作",
                responsibility4: "将上下文系统集成到生产流水线中，支持动态检索、紧凑历史注入和面向智能代理推理的未来扩展",
                responsibility5: "修复聊天界面和IDE布局中的关键UI问题，提高可用性和界面一致性",
                achievement1: "主导上下文管理系统的独立设计和产品化",
                achievement2: "开发用于灵活部署的模块化框架",
                achievement3: "与高级应用科学家合作进行实验",
                achievement4: "将系统集成到生产流水线中"
            },
            "brown-health": {
                title: "研究实习生",
                company: "布朗大学健康中心",
                date: "2025年3月 - 至今",
                location: "普罗维登斯，罗德岛州",
                bullet1: "开发基于Web的AI生成医疗报告平台",
                bullet2: "部署VILA-M3视觉语言模型用于医疗报告生成",
                bullet3: "处理10,000+脑部MRI图像并开发自动化预处理流水线",
                bullet4: "部署nnU-Net v2用于自动化脑卒中病变分割",
                bullet5: "使用Python (Flask)、JavaScript和实时LLM推理构建"
            },
            "rici": {
                title: "首席Web开发工程师兼设计师",
                company: "罗德岛以色列联盟",
                date: "2024年12月 - 2025年2月",
                location: "普罗维登斯，罗德岛州",
                bullet1: "重新设计RICI网站，采用响应式设计和交互式表单",
                bullet2: "集成MailChimp用于自动化营销活动和用户参与",
                bullet3: "使用Google Analytics和响应式设计优化UI/UX",
                bullet4: "与团队成员协作，提供以用户为中心的解决方案"
            },
            "shukun-tech": {
                title: "算法工程实习生",
                company: "数坤科技有限公司",
                date: "2024年5月 - 2024年8月",
                location: "北京，中国",
                bullet1: "为5,000+患者改进脑区分割和肿瘤检测",
                bullet2: "构建3D脑区分割的树状数据结构系统",
                bullet3: "处理来自五家主要医院的10,000+脑部MRI图像"
            },
            "casia": {
                title: "软件和机器学习工程师实习生",
                company: "中国科学院自动化研究所",
                date: "2023年5月 - 2024年5月",
                location: "北京，中国",
                bullet1: "获得ICU监护软件专利并获得国家资助",
                bullet2: "设计具有混合算法的实时患者监护系统",
                bullet3: "开发基于React的患者数据可视化Web应用",
                bullet4: "构建具有动作识别的医疗服务机器人多模态人机交互系统"
            }
        },
        education: {
            title: "教育背景",
            "brown": {
                degree: "计算机科学理学硕士",
                school: "布朗大学",
                date: "2024年9月 - 2026年5月",
                location: "普罗维登斯，罗德岛州，美国",
                summary: "目前正在攻读计算机科学高级学位，专注于人工智能、机器学习和软件工程。"
            },
            "ustb": {
                degree: "人工智能工程学士",
                school: "北京科技大学",
                date: "2020年9月 - 2024年7月",
                location: "北京，中国",
                summary: "以优异成绩毕业（GPA: 3.83/4.0）。获得院长奖章，表彰在学术表现、领导力和对大学项目的重大贡献方面的杰出成就。"
            }
        },
        skills: {
            title: "技能与技术",
            languages: "编程语言",
            frameworks: "框架",
            developerTools: "开发工具",
            libraries: "库"
        },
        contact: {
            title: "联系我",
            subtitle: "Connect一下吧!",
            description: "我总是对新的机会和令人兴奋的项目感兴趣。如果你想合作或只是想打个招呼，请随时联系我！"
        },
        common: {
            clickForDetails: "点击查看详情 →",
            backToExperience: "返回工作经历",
            backToEducation: "返回教育背景",
            experienceNotFound: "未找到工作经历",
            educationNotFound: "未找到教育背景",
            internship: "实习生",
            graduateProgram: "研究生项目",
            undergraduateProgram: "本科生项目",
            keyResponsibilities: "主要职责",
            technologiesUsed: "使用的技术",
            keyAchievements: "主要成就",
            areasOfFocus: "重点领域",
            activitiesLeadership: "活动与领导力",
            keyAchievementsAwards: "主要成就与奖项",
            gpa: "GPA"
        },
        footer: {
            copyright: "© 2024 杨新烨. 版权所有."
        },
        test: {
            title: "语言测试页面",
            navigation: "导航",
            hero: "主要部分",
            common: "通用元素"
        },
        demo: {
            title: "双语网站演示",
            description: "欢迎来到杨新烨个人网站的双语演示！这个网站支持中文和英文两种语言。试试点击右上角的语言切换按钮，看看神奇的效果。",
            viewFull: "查看完整网站",
            readGuide: "阅读指南",
            features: "主要功能",
            feature1: "完整的中英文双语支持",
            feature2: "自动保存语言偏好",
            feature3: "响应式设计，适配所有设备",
            feature4: "流畅的语言切换动画"
        }
    }
};

// Current language (default to Chinese)
let currentLang = 'en';

// Initialize i18n
function initI18n() {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    // Immediately update language buttons to prevent flickering
    updateLanguageButtons();
    
    // Apply translations
    applyTranslations();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Get translation for a specific key
function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// Switch language
function switchLanguage(lang) {
    if (translations[lang] && lang !== currentLang) {
        currentLang = lang;
        
        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update language buttons
        updateLanguageButtons();
        
        // Apply translations
        applyTranslations();
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Dispatch custom event for language change
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
}

// Update language button states
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Add event listeners for language buttons
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    setupLanguageSwitcher();
    
    // Show language switcher after initialization to prevent flickering
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.classList.add('loaded');
    }
});

// Export functions for use in other scripts
window.i18n = {
    switchLanguage,
    getTranslation,
    applyTranslations,
    currentLang: () => currentLang
}; 