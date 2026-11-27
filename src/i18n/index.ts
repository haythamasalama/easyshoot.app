import data from "./data.json";

export const SITE = "https://easyshoot.app";
export const APP_STORE_URL = "https://apps.apple.com/app/easyshoot-screenshot-markup/id6829547113";
// The version on the App Store and the day it came out, for search engines.
export const SUPPORT_EMAIL = "support@easyshoot.app";
// Apple's Standard EULA governs apps on the App Store that don't ship their own license.
export const TERMS_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
export const X_URL = "https://x.com/haythamasalama";
export const AUTHOR_URL = "https://haythamasalama.me";
export const APP_VERSION = "1.1.0";
export const APP_RELEASED = "2026-11-10";

export const LANGS = ["en", "ar", "fr", "es", "de"] as const;
export type Lang = (typeof LANGS)[number];

export interface SiblingApp { logo: string; name: string; url: string; about: Record<Lang, string> }

export const SIBLING_APPS: SiblingApp[] = [
  { logo: "runarks", name: "Runarks", url: "https://runarks.com/", about: {
    en: "Governed access to production databases", ar: "وصول مضبوط إلى قواعد بيانات الإنتاج", fr: "Accès encadré aux bases de données de production",
    es: "Acceso controlado a bases de datos de producción", de: "Kontrollierter Zugriff auf Produktionsdatenbanken" } },
  { logo: "pr-sift", name: "PR Sift", url: "https://haythamasalama.github.io/pr-sift/", about: {
    en: "Chrome extension for pull request reviews", ar: "إضافة Chrome لمراجعة طلبات الدمج", fr: "Extension Chrome pour relire les pull requests",
    es: "Extensión de Chrome para revisar pull requests", de: "Chrome-Erweiterung für Pull-Request-Reviews" } },
  { logo: "whatsapp-business-monitor", name: "WhatsApp Business Monitor", url: "https://wbm.haythamasalama.me/", about: {
    en: "Dashboard for WhatsApp Business", ar: "لوحة متابعة لواتساب للأعمال", fr: "Tableau de bord pour WhatsApp Business",
    es: "Panel para WhatsApp Business", de: "Dashboard für WhatsApp Business" } },
  { logo: "sound-sticker-maker", name: "Sound Sticker Maker", url: "https://sound-sticker-maker.haythamasalama.me/", about: {
    en: "WhatsApp stickers that play sound", ar: "ملصقات واتساب بالصوت", fr: "Des stickers WhatsApp qui jouent du son",
    es: "Stickers de WhatsApp con sonido", de: "WhatsApp-Sticker mit Ton" } },
];

export const LANG_NAMES: Record<Lang, string> = { en: "English", ar: "العربية", fr: "Français", es: "Español", de: "Deutsch" };
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", ar: "ar_AR", fr: "fr_FR", es: "es_ES", de: "de_DE" };

const ui = data.ui as Record<Lang, Record<string, string>>;

export const pagePath = (lang: Lang) => (lang === "en" ? "/" : `/${lang}/`);
export const dirOf = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");

export function useT(lang: Lang) {
  const live = Boolean(APP_STORE_URL);
  return (key: string): string => {
    const k = live && ui.en[`${key}Live`] ? `${key}Live` : key;
    return ui[lang][k] ?? ui.en[k] ?? key;
  };
}

export const tabsFor = (lang: Lang) => (data.tabs as Record<Lang, { t: string; b: string; k: string[] }[]>)[lang];
export const shotAlts = (lang: Lang) => (data.shots as Record<Lang, string[]>)[lang];

// The privacy and support pages exist in English and Arabic only.
export const privacyPath = (lang: Lang) => (lang === "ar" ? "/ar/privacy.html" : "/privacy.html");
export const supportPath = (lang: Lang) => (lang === "ar" ? "/ar/support.html" : "/support.html");
export const accessibilityPath = (lang: Lang) => (lang === "ar" ? "/ar/accessibility.html" : "/accessibility.html");
