import { ref, computed, watch } from 'vue'
import { ruLocale } from '@/locales/ru'
import { enLocale } from '@/locales/en'
import type { LocaleKey } from '@/types/locale'

const LOCALE_STORAGE_KEY = 'preferred-locale'

const availableLocales = {
  ru: ruLocale,
  en: enLocale,
} as const

type AvailableLocale = keyof typeof availableLocales

const currentLocale = ref<AvailableLocale>('ru')

// Load locale from localStorage or browser language on initialization
const initializeLocale = () => {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as AvailableLocale | null
  const browserLang = navigator.language.split('-')[0] as AvailableLocale

  if (stored && availableLocales[stored]) {
    currentLocale.value = stored
  } else if (availableLocales[browserLang]) {
    currentLocale.value = browserLang
  } else {
    currentLocale.value = 'ru' // Default fallback
  }
}

// Save locale changes to localStorage
watch(
  currentLocale,
  (newLocale) => {
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
  },
  { immediate: false },
)

export function useLocale() {
  const locale = computed(() => availableLocales[currentLocale.value])

  const setLocale = (newLocale: AvailableLocale) => {
    if (availableLocales[newLocale]) {
      currentLocale.value = newLocale
    }
  }

  const toggleLocale = () => {
    const currentIndex = Object.keys(availableLocales).indexOf(currentLocale.value)
    const nextIndex = (currentIndex + 1) % Object.keys(availableLocales).length
    const nextLocale = Object.keys(availableLocales)[nextIndex] as AvailableLocale
    setLocale(nextLocale)
  }

  const t = (key: LocaleKey|string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let value: any = locale.value

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation missing for key: ${key}`)
        return key
      }
    }

    if (typeof value === 'string' && params) {
      // Replace placeholders like {age}, {name} with actual values
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        const paramValue = params[paramKey]
        return paramValue !== undefined ? String(paramValue) : match
      })
    }

    return typeof value === 'string' ? value : key
  }

  return {
    locale,
    currentLocale: computed(() => currentLocale.value),
    availableLocales: Object.keys(availableLocales) as AvailableLocale[],
    setLocale,
    toggleLocale,
    t,
    initializeLocale,
  }
}
