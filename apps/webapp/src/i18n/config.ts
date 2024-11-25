import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'

import common from './locales/fr/common.json'

export enum Locales {
  FR = 'fr',
  EN = 'en',
}

export const config: InitOptions = {
  debug: false,
  ns: ['common', 'errors'],
  defaultNS: 'common',
  fallbackNS: 'common',
  resources: {
    [Locales.FR]: {
      common: common,
    },
  },
  lng: Locales.FR,
  fallbackLng: Locales.FR,
  interpolation: {
    escapeValue: false,
  },
}

i18n.use(initReactI18next).init(config)

export const locales = [
  { locale: Locales.FR, name: 'Français' },
  { locale: Locales.EN, name: 'English' },
]

export default i18n
