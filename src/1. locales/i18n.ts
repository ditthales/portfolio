// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const fetchTranslations = async (locale:string) => {
  try {
    const response = await fetch(`https://portfolio-back-74d75b4d278b.herokuapp.com/get${locale}JSON`);
    const translations = await response.json();
    return translations;
  } catch (error) {
    console.error('Error fetching translations:', error);
    return {};
  }
};

const initI18n = async () => {
  const translationEn = await fetchTranslations('En');
  const translationEs = await fetchTranslations('Es');
  const translationPt = await fetchTranslations('Pt');
  const translationFr = await fetchTranslations('Fr');

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
      lng: 'pt', // Idioma padrão
      fallbackLng: 'pt', // Idioma de fallback
      interpolation: {
        escapeValue: false,
      },
    });
};

export { initI18n, i18n as default };
