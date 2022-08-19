import * as localesModule from './locales'

const locales = { ...localesModule }
const {
  navigator: { language, languages },
} = window

const LangFromBrowser = Object.keys(locales).find((localeCode) =>
  language.includes(localeCode),
)

const LangFromBrowserList = Object.keys(locales).find((locale) =>
  languages.find((lang) => lang).includes(locale),
)

console.log(LangFromBrowserList)

function getLangFromLocalStorage() {
  return localStorage.getItem('lang')
}

function getInitLang() {
  let lsLang = getLangFromLocalStorage()
  lsLang = lsLang === 'ua' ? 'uk' : lsLang
  if (locales[lsLang]) return lsLang
  if (LangFromBrowser) return LangFromBrowser
  if (LangFromBrowserList) return LangFromBrowserList
  return 'en'
}

export const lang = getInitLang()
// console.log('lang', lang)

function getLocalesByLang(lang) {
  return locales[lang]
}

const currentLocales = getLocalesByLang(lang)
// console.log('currentLocales', currentLocales)

export function getLocale(key) {
  return currentLocales[key] || key
}
export const setSelectedLanguages = (e) => {
  if (e.target.id === 'options-view-button') return
  console.log('value', e.target.value)
  localStorage.setItem('lang', e.target.value)
  window.location.reload()

  // if (e.target.id !== 'options-view-button') {
  //   console.log('value', e.target.value)
  //   localStorage.setItem('lang', e.target.value)
  //   window.location.reload()
  // }
}

export const availableLanguages = Object.keys(locales).map((langCode) => {
  return {
    langCode,
    label: getLocale(`${langCode}_lang`),
  }
})
