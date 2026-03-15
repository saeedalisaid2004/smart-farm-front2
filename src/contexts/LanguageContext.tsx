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
