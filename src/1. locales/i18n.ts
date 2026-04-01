import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './en.json';
import translationEs from './es.json';
import translationPt from './pt.json';
import translationFr from './fr.json';

const initI18n = async () => {
  await i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: translationEn,
        },
        es: {
          translation: translationEs,
        },
        pt: {
          translation: translationPt,
        },
        fr: {
          translation: translationFr,
        },
      },
      lng: 'pt',
      fallbackLng: 'pt',
      interpolation: {
        escapeValue: false,
      },
    });
};

export { initI18n, i18n as default };
