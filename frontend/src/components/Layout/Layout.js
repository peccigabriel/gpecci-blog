import Navbar from 'components/Navbar'
import theme from 'src/theme'
import { ChakraProvider } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {children}
    </ChakraProvider>
  )
}
