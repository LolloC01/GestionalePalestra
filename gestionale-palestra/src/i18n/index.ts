import type { i18n } from 'i18next'
import { initReactI18next } from 'react-i18next'
import EN from './en'
import IT from './it'

export type Locale = 'en' | 'el' | 'bg' | 'ro'

export const FALLBACK_LANGUAGE = 'it'

export const initLocale = (i18n: i18n, locale?: Locale) => {
  return i18n.use(initReactI18next).init({
    ns: Object.keys(IT),
    defaultNS: 'common',
    resources: {
      en: EN,
      it: IT
    },
    lng: locale,
    fallbackLng: FALLBACK_LANGUAGE,
    debug: false,
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    },
    returnNull: false,
    compatibilityJSON: 'v4'
  })
}
