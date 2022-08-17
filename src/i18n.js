import * as locales from './locales'

function getLangFromBrowser() {
  return window.navigator.language
}

function checkLangFromBrowserList() {
  // console.log('browser langs list', window.navigator.language)
  // console.log('locales', locales)
  return window.navigator.languages.find((lang) => {
    // console.log('lang', lang)
    // console.log('locales', locales[lang])
    return locales[lang]
  })
}

function getLangFromLocalStorage() {
  return localStorage.getItem('lang')
}

function getInitLang() {
  let lsLang = getLangFromLocalStorage()
  lsLang = lsLang === 'ua' ? 'uk' : lsLang
  // console.log('lsLang', lsLang)
  if (locales[lsLang]) {
    return lsLang
  }

  const browserLang = getLangFromBrowser()
  // console.log('browserLang', browserLang)
  // console.log(locales[browserLang])
  if (locales[browserLang]) {
    return browserLang
  }

  const checkLangFromBrowser = checkLangFromBrowserList()
  if (locales[checkLangFromBrowser]) {
    return checkLangFromBrowser
  }
  return 'en'
}

export const lang = getInitLang()
console.log('lang', lang)

function getLocalesByLang(lang) {
  return locales[lang]
}

const currentLocales = getLocalesByLang(lang)
console.log('currentLocales', currentLocales)

export function getLocale(key) {
  return currentLocales[key] || key
}
// console.log(getLocale('owr_work'))
// console.log(getLocale('get_in_touch'))
