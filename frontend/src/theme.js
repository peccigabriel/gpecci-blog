import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Inconsolata',
    body: 'Inconsolata',
    mono: 'Noto Sans',
    brand: 'Montserrat',
  },
  colors: {
    brand: {
      white: '#ffffff',
      offWhite: '#F6F6F4',
      darkBrown: '#251C15',
      softBrown: '#403832',
    },
  },
})

export default theme
