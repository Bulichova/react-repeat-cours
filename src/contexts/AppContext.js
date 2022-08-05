import { createContext } from 'react'

const navLinks = [
  { id: '1', label: 'Home', path: '', iconName: 'home' },
  { id: '2', label: 'Our work', path: 'our-work', iconName: 'team' },
  { id: '3', label: 'What we do', path: 'what-we-do', iconName: 'calendar' },
  { id: '4', label: 'About us', path: 'about-us', iconName: 'documents' },
  {
    id: '5',
    label: 'Get in touch',
    path: 'get-in-touch',
    iconName: 'projects',
  },
]

const user = {
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/JPEG_example_down.jpg/350px-JPEG_example_down.jpg',
  name: {
    firstName: 'Ta',
    lastName: 'Bu',
  },
}

export const AppContext = createContext({ navLinks,user })
