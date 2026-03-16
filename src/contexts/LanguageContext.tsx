import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "ar";

const translations = {
  en: {
    // Admin sidebar
    "admin.dashboard": "Admin Dashboard",
    "admin.users": "User Management",
    "admin.system": "System Management",
    "admin.reports": "System Reports",
    "admin.settings": "Settings",
    // Dashboard sidebar
    "dashboard.welcome": "Welcome",
    "dashboard.plantDisease": "Plant Disease Detection",
    "dashboard.animalWeight": "Animal Weight Estimation",
    "dashboard.cropRecommendation": "Crop Recommendation",
    "dashboard.soilAnalysis": "Soil Type Analysis",
    "dashboard.fruitQuality": "Fruit Quality Analysis",
    "dashboard.chatbot": "Smart Farm Chatbot",
    "dashboard.reports": "Reports",
    "dashboard.settings": "Settings",
    // Settings page
    "settings.title": "Settings",
    "settings.subtitle": "Manage your account and application preferences",
    "settings.profile": "Profile Settings",
    "settings.fullName": "Full Name",
    "settings.email": "Email",
    "settings.phone": "Phone Number",
    "settings.saveProfile": "Save Profile",
    "settings.theme": "Theme Preference",
    "settings.lightMode": "Light Mode",
    "settings.darkMode": "Dark Mode",
    "settings.language": "Language Selection",
    "settings.notifications": "Notification Preferences",
    "settings.emailNotifications": "Email Notifications",
    "settings.analysisAlerts": "Analysis Completion Alerts",
    "settings.weeklyReport": "Weekly Report Summary",
    "settings.pushNotifications": "Push Notifications",
    "settings.emailAlerts": "Email Alerts",
    "settings.profileUpdated": "Profile updated",
    "settings.profileSaved": "Your profile settings have been saved.",
    "settings.settingsSaved": "Settings saved",
    "settings.profileUpdatedDesc": "Your profile has been updated.",
    // Header
    "header.notifications": "Notifications",
    "header.myAccount": "My Account",
    "header.profile": "Profile",
    "header.logout": "Logout",
    // Common
    "common.farmer": "Farmer",
    "common.admin": "Admin",
    "app.name": "Smart Farm AI",
    "common.chooseImage": "Choose Image",
    "common.analyzeImage": "Analyze Image",
    "common.uploadHint": "Click below to upload an image",
    // Dashboard main
    "dashboard.welcomeUser": "Welcome",
    "dashboard.useAI": "Use AI to improve your farming decisions",
    "dashboard.plantDiseaseDesc": "Detect plant diseases early using AI image analysis.",
    "dashboard.animalWeightDesc": "Estimate animal weight accurately without physical scales.",
    "dashboard.cropRecommendationDesc": "Get the best crop suggestions based on soil and climate data.",
    "dashboard.soilAnalysisDesc": "Analyze soil fertility and type using AI.",
    "dashboard.fruitQualityDesc": "Classify fruit quality and detect defects.",
    "dashboard.chatbotDesc": "Ask questions and get instant farming advice.",
    // Plant Disease
    "plantDisease.title": "Plant Disease Detection (CNN)",
    // Animal Weight
    "animalWeight.title": "Animal Weight Estimation",
    // Fruit Quality
    "fruitQuality.title": "Fruit Quality Analysis",
    // Crop Recommendation
    "crop.title": "Crop Recommendation (ML)",
    "crop.envParams": "Environmental Parameters",
    "crop.temperature": "Temperature (°C)",
    "crop.humidity": "Humidity (%)",
    "crop.rainfall": "Rainfall (mm)",
    "crop.soilType": "Soil Type",
    "crop.selectSoil": "Select soil type",
    "crop.clay": "Clay",
    "crop.sandy": "Sandy",
    "crop.loamy": "Loamy",
    "crop.silt": "Silt",
    "crop.peaty": "Peaty",
    "crop.chalky": "Chalky",
    "crop.recommend": "Recommend Crop",
    // Soil Analysis
    "soil.title": "Soil Type Analysis",
    "soil.manualInput": "Manual Soil Properties Input",
    "soil.ph": "Soil pH",
    "soil.moisture": "Moisture Level (%)",
    "soil.nitrogen": "Nitrogen (N)",
    "soil.phosphorus": "Phosphorus (P)",
    "soil.potassium": "Potassium (K)",
    "soil.analyze": "Analyze Soil Properties",
    // Chatbot
    "chatbot.title": "Smart Farm Chatbot (NLP)",
    "chatbot.heading": "Smart Farm Chatbot",
    "chatbot.subtitle": "NLP-powered assistant for all your farming questions",
    "chatbot.assistant": "AI Farm Assistant",
    "chatbot.online": "Online",
    "chatbot.greeting": "Hello! I'm your Smart Farm AI assistant. How can I help you today?",
    "chatbot.demoResponse": "Thank you for your question! This is a demo response. Connect to an AI backend for real answers.",
    "chatbot.placeholder": "Type your question...",
    // Reports
    "reports.title": "Reports",
    "reports.subtitle": "Access and download all AI-generated reports and analyses",
    "reports.exportAll": "Export All",
    "reports.totalReports": "Total Reports",
    "reports.thisMonth": "This Month",
    "reports.vsLastMonth": "vs Last Month",
    "reports.download": "Download",
    "reports.plantReport": "Plant Disease Analysis Report",
    "reports.plantReportDesc": "45 images analyzed, 3 diseases detected",
    "reports.livestockReport": "Livestock Weight Monitoring",
    "reports.livestockReportDesc": "156 animals tracked, avg weight: 425kg",
    "reports.cropReport": "Crop Yield Forecast",
    "reports.cropReportDesc": "Seasonal prediction for 12 crop varieties",
    "reports.soilReport": "Soil Quality Assessment",
    "reports.soilReportDesc": "pH, moisture, and nutrient analysis",
    // Profile
    "profile.title": "Profile",
    "profile.editProfile": "Edit Profile",
    "profile.personalInfo": "Personal Information",
    "profile.accountDetails": "Account Details",
    "profile.fullName": "Full Name",
    "profile.email": "Email",
    "profile.phone": "Phone",
    "profile.memberSince": "Member Since",
    "profile.location": "Location",
    "profile.locationValue": "Smart Farm Region",
    "profile.role": "Role",
    // Login
    "login.title": "Smart Farm AI",
    "login.subtitle": "Sign in to manage your smart farm",
    "login.email": "Email",
    "login.emailPlaceholder": "Enter your email",
    "login.password": "Password",
    "login.passwordPlaceholder": "Enter your password",
    "login.role": "Role",
    "login.selectRole": "Select your role",
    "login.signIn": "Sign In",
    "login.signingIn": "Signing in...",
    "login.noAccount": "Don't have an account?",
    "login.signUp": "Sign up",
    // Register
    "register.title": "Create New Account",
    "register.subtitle": "Register now to access all features",
    "register.backHome": "Back to Home",
    "register.fullName": "Full Name",
    "register.fullNamePlaceholder": "Enter your full name",
    "register.email": "Email",
    "register.password": "Password",
    "register.agree": "I agree to the",
    "register.terms": "Terms & Conditions",
    "register.createAccount": "Create Account",
    "register.creating": "Creating account...",
    "register.hasAccount": "Already have an account?",
    "register.signIn": "Sign In",
    "register.joinTitle": "Join us today",
    "register.joinSubtitle": "Start your journey with us and enjoy an integrated management experience",
    // Index
    "index.brand": "Dashboard",
    "index.login": "Sign In",
    "index.register": "Create Account",
    "index.badge": "Integrated Management Platform",
    "index.heroTitle1": "Manage your business with",
    "index.heroTitle2": "ease and precision",
    "index.heroDesc": "A comprehensive dashboard that provides all the tools you need to manage your platform, from tracking statistics to user management",
    "index.tryFree": "Try it free now",
    "index.featuresTitle": "Features that make your work easier",
    "index.featuresDesc": "We offer a set of integrated tools to manage your work efficiently",
    "index.feat1Title": "Advanced Analytics",
    "index.feat1Desc": "Track your platform's performance with detailed reports and interactive charts",
    "index.feat2Title": "User Management",
    "index.feat2Desc": "Full user management with multi-level permissions",
    "index.feat3Title": "Maximum Security",
    "index.feat3Desc": "High-level security to protect your data and customer information",
    "index.feat4Title": "Super Speed",
    "index.feat4Desc": "Fast and reliable performance ensuring a smooth experience for all users",
    "index.ctaTitle": "Start your journey with us today",
    "index.ctaDesc": "Join thousands of users who manage their businesses efficiently",
    "index.ctaButton": "Create Free Account",
    "index.footer": "© 2024 Dashboard. All rights reserved.",
  },
  ar: {
    // Admin sidebar
    "admin.dashboard": "لوحة تحكم المسؤول",
    "admin.users": "إدارة المستخدمين",
    "admin.system": "إدارة النظام",
    "admin.reports": "تقارير النظام",
    "admin.settings": "الإعدادات",
    // Dashboard sidebar
    "dashboard.welcome": "الرئيسية",
    "dashboard.plantDisease": "كشف أمراض النبات",
    "dashboard.animalWeight": "تقدير وزن الحيوان",
    "dashboard.cropRecommendation": "توصيات المحاصيل",
    "dashboard.soilAnalysis": "تحليل نوع التربة",
    "dashboard.fruitQuality": "تحليل جودة الفاكهة",
    "dashboard.chatbot": "مساعد المزرعة الذكي",
    "dashboard.reports": "التقارير",
    "dashboard.settings": "الإعدادات",
    // Settings page
    "settings.title": "الإعدادات",
    "settings.subtitle": "إدارة حسابك وتفضيلات التطبيق",
    "settings.profile": "إعدادات الملف الشخصي",
    "settings.fullName": "الاسم الكامل",
    "settings.email": "البريد الإلكتروني",
    "settings.phone": "رقم الهاتف",
    "settings.saveProfile": "حفظ الملف الشخصي",
    "settings.theme": "تفضيل المظهر",
    "settings.lightMode": "الوضع الفاتح",
    "settings.darkMode": "الوضع الداكن",
    "settings.language": "اختيار اللغة",
    "settings.notifications": "تفضيلات الإشعارات",
    "settings.emailNotifications": "إشعارات البريد الإلكتروني",
    "settings.analysisAlerts": "تنبيهات اكتمال التحليل",
    "settings.weeklyReport": "ملخص التقرير الأسبوعي",
    "settings.pushNotifications": "الإشعارات الفورية",
    "settings.emailAlerts": "تنبيهات البريد الإلكتروني",
    "settings.profileUpdated": "تم تحديث الملف الشخصي",
    "settings.profileSaved": "تم حفظ إعدادات ملفك الشخصي.",
    "settings.settingsSaved": "تم حفظ الإعدادات",
    "settings.profileUpdatedDesc": "تم تحديث ملفك الشخصي.",
    // Header
    "header.notifications": "الإشعارات",
    "header.myAccount": "حسابي",
    "header.profile": "الملف الشخصي",
    "header.logout": "تسجيل الخروج",
    // Common
    "common.farmer": "مزارع",
    "common.admin": "مسؤول",
    "app.name": "المزرعة الذكية",
    "common.chooseImage": "اختر صورة",
    "common.analyzeImage": "تحليل الصورة",
    "common.uploadHint": "اضغط أدناه لرفع صورة",
    // Dashboard main
    "dashboard.welcomeUser": "مرحباً",
    "dashboard.useAI": "استخدم الذكاء الاصطناعي لتحسين قراراتك الزراعية",
    "dashboard.plantDiseaseDesc": "اكتشف أمراض النباتات مبكراً باستخدام تحليل الصور بالذكاء الاصطناعي.",
    "dashboard.animalWeightDesc": "تقدير وزن الحيوانات بدقة بدون موازين فعلية.",
    "dashboard.cropRecommendationDesc": "احصل على أفضل توصيات المحاصيل بناءً على بيانات التربة والمناخ.",
    "dashboard.soilAnalysisDesc": "تحليل خصوبة ونوع التربة باستخدام الذكاء الاصطناعي.",
    "dashboard.fruitQualityDesc": "تصنيف جودة الفاكهة واكتشاف العيوب.",
    "dashboard.chatbotDesc": "اطرح أسئلة واحصل على نصائح زراعية فورية.",
    // Plant Disease
    "plantDisease.title": "كشف أمراض النبات (CNN)",
    // Animal Weight
    "animalWeight.title": "تقدير وزن الحيوان",
    // Fruit Quality
    "fruitQuality.title": "تحليل جودة الفاكهة",
    // Crop Recommendation
    "crop.title": "توصيات المحاصيل (ML)",
    "crop.envParams": "المعايير البيئية",
    "crop.temperature": "درجة الحرارة (°م)",
    "crop.humidity": "الرطوبة (%)",
    "crop.rainfall": "هطول الأمطار (مم)",
    "crop.soilType": "نوع التربة",
    "crop.selectSoil": "اختر نوع التربة",
    "crop.clay": "طينية",
    "crop.sandy": "رملية",
    "crop.loamy": "طميية",
    "crop.silt": "غرينية",
    "crop.peaty": "خثية",
    "crop.chalky": "طباشيرية",
    "crop.recommend": "توصية المحصول",
    // Soil Analysis
    "soil.title": "تحليل نوع التربة",
    "soil.manualInput": "إدخال خصائص التربة يدوياً",
    "soil.ph": "حموضة التربة (pH)",
    "soil.moisture": "مستوى الرطوبة (%)",
    "soil.nitrogen": "النيتروجين (N)",
    "soil.phosphorus": "الفوسفور (P)",
    "soil.potassium": "البوتاسيوم (K)",
    "soil.analyze": "تحليل خصائص التربة",
    // Chatbot
    "chatbot.title": "مساعد المزرعة الذكي (NLP)",
    "chatbot.heading": "مساعد المزرعة الذكي",
    "chatbot.subtitle": "مساعد ذكي مدعوم بالذكاء الاصطناعي لجميع أسئلتك الزراعية",
    "chatbot.assistant": "مساعد المزرعة الذكي",
    "chatbot.online": "متصل",
    "chatbot.greeting": "مرحباً! أنا مساعدك الذكي للمزرعة. كيف يمكنني مساعدتك اليوم؟",
    "chatbot.demoResponse": "شكراً لسؤالك! هذا رد تجريبي. قم بالاتصال بخدمة الذكاء الاصطناعي للحصول على إجابات حقيقية.",
    "chatbot.placeholder": "اكتب سؤالك...",
    // Reports
    "reports.title": "التقارير",
    "reports.subtitle": "الوصول وتحميل جميع التقارير والتحليلات المولدة بالذكاء الاصطناعي",
    "reports.exportAll": "تصدير الكل",
    "reports.totalReports": "إجمالي التقارير",
    "reports.thisMonth": "هذا الشهر",
    "reports.vsLastMonth": "مقارنة بالشهر الماضي",
    "reports.download": "تحميل",
    "reports.plantReport": "تقرير تحليل أمراض النبات",
    "reports.plantReportDesc": "45 صورة تم تحليلها، 3 أمراض تم اكتشافها",
    "reports.livestockReport": "مراقبة وزن المواشي",
    "reports.livestockReportDesc": "156 حيوان تم تتبعه، متوسط الوزن: 425 كجم",
    "reports.cropReport": "توقعات إنتاج المحاصيل",
    "reports.cropReportDesc": "توقعات موسمية لـ 12 نوع محصول",
    "reports.soilReport": "تقييم جودة التربة",
    "reports.soilReportDesc": "تحليل الحموضة والرطوبة والمغذيات",
    // Profile
    "profile.title": "الملف الشخصي",
    "profile.editProfile": "تعديل الملف",
    "profile.personalInfo": "المعلومات الشخصية",
    "profile.accountDetails": "تفاصيل الحساب",
    "profile.fullName": "الاسم الكامل",
    "profile.email": "البريد الإلكتروني",
    "profile.phone": "الهاتف",
    "profile.memberSince": "عضو منذ",
    "profile.location": "الموقع",
    "profile.locationValue": "منطقة المزرعة الذكية",
    "profile.role": "الدور",
    // Login
    "login.title": "المزرعة الذكية",
    "login.subtitle": "سجل دخولك لإدارة مزرعتك الذكية",
    "login.email": "البريد الإلكتروني",
    "login.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "login.password": "كلمة المرور",
    "login.passwordPlaceholder": "أدخل كلمة المرور",
    "login.role": "الدور",
    "login.selectRole": "اختر دورك",
    "login.signIn": "تسجيل الدخول",
    "login.signingIn": "جاري تسجيل الدخول...",
    "login.noAccount": "ليس لديك حساب؟",
    "login.signUp": "إنشاء حساب",
    // Register
    "register.title": "إنشاء حساب جديد",
    "register.subtitle": "سجل الآن للوصول إلى جميع الميزات",
    "register.backHome": "العودة للرئيسية",
    "register.fullName": "الاسم الكامل",
    "register.fullNamePlaceholder": "أدخل اسمك الكامل",
    "register.email": "البريد الإلكتروني",
    "register.password": "كلمة المرور",
    "register.agree": "أوافق على",
    "register.terms": "الشروط والأحكام",
    "register.createAccount": "إنشاء الحساب",
    "register.creating": "جاري إنشاء الحساب...",
    "register.hasAccount": "لديك حساب بالفعل؟",
    "register.signIn": "تسجيل الدخول",
    "register.joinTitle": "انضم إلينا اليوم",
    "register.joinSubtitle": "ابدأ رحلتك معنا واستمتع بتجربة إدارة متكاملة",
    // Index
    "index.brand": "لوحة التحكم",
    "index.login": "تسجيل الدخول",
    "index.register": "إنشاء حساب",
    "index.badge": "منصة إدارة متكاملة",
    "index.heroTitle1": "إدارة أعمالك بكل",
    "index.heroTitle2": "سهولة ودقة",
    "index.heroDesc": "لوحة تحكم شاملة توفر لك جميع الأدوات التي تحتاجها لإدارة منصتك، من تتبع الإحصائيات إلى إدارة المستخدمين",
    "index.tryFree": "جرّب الآن مجاناً",
    "index.featuresTitle": "مميزات تجعل عملك أسهل",
    "index.featuresDesc": "نقدم لك مجموعة من الأدوات المتكاملة لإدارة عملك بكفاءة عالية",
    "index.feat1Title": "إحصائيات متقدمة",
    "index.feat1Desc": "تتبع أداء منصتك بتقارير مفصلة ورسوم بيانية تفاعلية",
    "index.feat2Title": "إدارة المستخدمين",
    "index.feat2Desc": "إدارة كاملة للمستخدمين مع صلاحيات متعددة المستويات",
    "index.feat3Title": "حماية قصوى",
    "index.feat3Desc": "أمان عالي المستوى لحماية بياناتك ومعلومات عملائك",
    "index.feat4Title": "سرعة فائقة",
    "index.feat4Desc": "أداء سريع وموثوق يضمن تجربة سلسة لجميع المستخدمين",
    "index.ctaTitle": "ابدأ رحلتك معنا اليوم",
    "index.ctaDesc": "انضم إلى آلاف المستخدمين الذين يديرون أعمالهم بكفاءة عالية",
    "index.ctaButton": "إنشاء حساب مجاني",
    "index.footer": "© 2024 لوحة التحكم. جميع الحقوق محفوظة.",
  },
} as const;

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem("language") as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
