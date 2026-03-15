import AdminLayout from "@/components/admin/AdminLayout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Settings, User, Palette, Globe, Bell } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminSettings = () => {
  const { toast } = useToast();
  const { t, language, setLanguage } = useLanguage();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSave = () => {
    toast({ title: t("settings.settingsSaved"), description: t("settings.profileUpdatedDesc") });
  };

  return (
    <AdminLayout title={t("settings.title")}>
      <div className="space-y-6 max-w-2xl">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">{t("settings.title")}</h1>
            <p className="text-muted-foreground">{t("settings.subtitle")}</p>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
              <User className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground">{t("settings.profile")}</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-foreground">{t("settings.fullName")}</Label>
              <Input defaultValue="Farm Owner" className="h-11 rounded-lg" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-foreground">{t("settings.email")}</Label>
              <Input defaultValue="owner@smartfarm.com" className="h-11 rounded-lg" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-foreground">{t("settings.phone")}</Label>
              <Input defaultValue="+1234567890" className="h-11 rounded-lg" />
            </div>
            <Button onClick={handleSave} className="w-full h-11 rounded-lg text-sm font-medium">
              {t("settings.saveProfile")}
            </Button>
          </div>
        </div>

        {/* Theme Preference */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
              <Palette className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground">{t("settings.theme")}</h3>
          </div>
          <div className="space-y-2">
            <label className="flex items-center gap-3 border border-border rounded-lg px-4 py-3 cursor-pointer hover:bg-secondary/30 transition-colors">
              <input type="radio" name="theme" value="light" checked={theme === "light"} onChange={() => setTheme("light")} className="w-4 h-4 accent-primary" />
              <span className="text-sm font-medium text-foreground">{t("settings.lightMode")}</span>
            </label>
            <label className="flex items-center gap-3 border border-border rounded-lg px-4 py-3 cursor-pointer hover:bg-secondary/30 transition-colors">
              <input type="radio" name="theme" value="dark" checked={theme === "dark"} onChange={() => setTheme("dark")} className="w-4 h-4 accent-primary" />
              <span className="text-sm font-medium text-foreground">{t("settings.darkMode")}</span>
            </label>
          </div>
        </div>

        {/* Language Selection */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
              <Globe className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground">{t("settings.language")}</h3>
          </div>
          <Select value={language} onValueChange={(val) => setLanguage(val as "en" | "ar")}>
            <SelectTrigger className="h-11 rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Notification Preferences */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
              <Bell className="w-4 h-4 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground">{t("settings.notifications")}</h3>
          </div>
          <div className="space-y-2">
            <label className="flex items-center justify-between border border-border rounded-lg px-4 py-3 cursor-pointer hover:bg-secondary/30 transition-colors">
              <span className="text-sm font-medium text-foreground">{t("settings.pushNotifications")}</span>
              <Checkbox defaultChecked className="h-5 w-5" />
            </label>
            <label className="flex items-center justify-between border border-border rounded-lg px-4 py-3 cursor-pointer hover:bg-secondary/30 transition-colors">
              <span className="text-sm font-medium text-foreground">{t("settings.emailAlerts")}</span>
              <Checkbox defaultChecked className="h-5 w-5" />
            </label>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
