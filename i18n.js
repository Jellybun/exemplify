// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './src/app/locales/en.json';
import mn from './src/app/locales/mn.json';



const resources = {
  en: {
    translation: {
      greeting: {
        hello: "hiho"
      }
    },
  },
  mn: {
    translation: mn,
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
