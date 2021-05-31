import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Common from './en/common.json';
import Validation from './en/validation.json';
import SignUp from './en/signUp.json';
import SignIn from './en/signIn.json';
import Profile from './en/profile.json';
import { buildYupLocale } from 'i18n';

export const resources = {
  en: {
    Common,
    Validation,
    SignUp,
    SignIn,
    Profile,
  },
} as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      lng: 'en',
      fallbackLng: 'en',
      ns: ['Common', 'Validation', 'SignUp', 'SignIn', 'Profile'],
      defaultNS: 'Common',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
      resources,
    },
    buildYupLocale
  );

export default i18n;
