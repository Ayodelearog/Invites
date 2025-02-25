import * as Localization from "expo-localization"
import { I18n } from "i18n-js"

// Import all locales
import en from "./en.json"
import fr from "./fr.json"

const translations = {
  en,
  fr,
}

const i18n = new I18n(translations)

// Set the locale once at the beginning of your app.
i18n.locale = Localization.getLocales()[0].languageCode ?? "en"

// When a value is missing from a language it'll fall back to another language with the key present.
i18n.enableFallback = true

export default i18n

