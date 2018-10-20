import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const opts = {
  fallbackLng: 'en',
  ns: ['base'],
  defaultNS: 'base',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
};

i18n.use(Backend);
i18n.use(LanguageDetector);

export default i18n.init(opts);
