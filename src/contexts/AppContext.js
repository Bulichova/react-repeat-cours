import { createContext } from 'react'
import { getLocale } from '../i18n'

const navLinks = [
  { id: '1', label: getLocale('home'), path: '', iconName: 'home' },
  { id: '2', label: getLocale('our_work'), path: 'our-work', iconName: 'team' },
  {
    id: '3',
    label: getLocale('what_we_do'),
    path: 'what-we-do',
    iconName: 'calendar',
  },
  {
    id: '4',
    label: getLocale('about_us'),
    path: 'about-us',
    iconName: 'documents',
  },
  {
    id: '5',
    label: getLocale('get_in_touch'),
    path: 'get-in-touch',
    iconName: 'projects',
  },
]

const user = {
  avatar:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/JPEG_example_down.jpg/350px-JPEG_example_down.jpg',
  name: {
    firstName: 'Ta',
    lastName: 'Bu',
  },
}

export const AppContext = createContext({ navLinks, user })
