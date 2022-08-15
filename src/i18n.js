// import en from './locales/en.json'
// import uk from './locales/uk.json'
// import ru from './locales/ru.json'
import * as locales from './locales'
// const locales = { en, uk, ru }

// console.log(locales.ru)

function getlangFromBrowser() {
  return window.navigator.languages
}

function checkLangFromBrowserList() {
  // console.log('browser langs list', window.navigator.language)
  // console.log('locales', locales)
  return window.navigator.languages.filter((lang) => {
    // console.log('lang', lang)
    // console.log('locales', locales[lang])
    return locales[lang]
  })
}

const langsInList = checkLangFromBrowserList()
console.log('list', langsInList)

function getlangFromLocalStorage() {
  return localStorage.getItem('lang')
}

function getLang() {
  const browserLang = getlangFromBrowser()
  // console.log('browserLang', browserLang)
  // console.log(locales[browserLang])
  if (locales[browserLang]) {
    return browserLang
  }

  const checkLangFromBrowser = checkLangFromBrowserList()
  if (locales[checkLangFromBrowser]) {
    return checkLangFromBrowser
  }

  let lsLang = getlangFromLocalStorage()
  lsLang = lsLang === 'ua' ? 'uk' : lsLang
  console.log('lsLang', lsLang)
  if (locales[lsLang]) {
    return lsLang
  }
  return 'en'
}
const lang = getLang()
// console.log('lang', lang)

function getLocalesByLang(lang) {
  return locales[lang]
}
const currentLocales = getLocalesByLang(lang)
// console.log('result', result)
export function getLocale(key) {
  return currentLocales[key] || key
}
// console.log(getLocale('owr_work'))
// console.log(getLocale('get_in_touch'))
