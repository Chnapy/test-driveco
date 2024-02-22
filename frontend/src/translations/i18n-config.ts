import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { HttpBackendOptions } from "i18next-http-backend";
import { Language, Parameters } from "@driveco/shared";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init<HttpBackendOptions>({
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false, // not needed in react-based app
    },
    load: "languageOnly",
    fallbackLng: "en",

    detection: {
      order: ["navigator"],
    },

    backend: {
      loadPath: "http://127.0.0.1:3000/parameters.json",
      requestOptions: {
        method: "GET",
      },
      parse: (data, languages = "en") => {
        const language = (
          Array.isArray(languages) ? languages[0] : languages
        ) as Language;

        const { translations }: Parameters = JSON.parse(data);

        return translations[language];
      },
    },
  });
