'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/common.json';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: en
      }
    },
    defaultNS: 'common',
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    debug: process.env.NODE_ENV === 'development'
  });

export default i18n; 