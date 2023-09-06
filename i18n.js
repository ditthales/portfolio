// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '/src/locales/en.json'; // Arquivo de tradução em inglês
import translationES from '/src/locales/es.json'; // Arquivo de tradução em espanhol
import translationPT from '/src/locales/pt.json'; // Arquivo de tradução em português
import translationFR from '/src/locales/fr.json'; // Arquivo de tradução em francês

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      pt: {
        translation: translationPT,
      },
      fr: {
        translation: translationFR,
      }
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Idioma de fallback
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
