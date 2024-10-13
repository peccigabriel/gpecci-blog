import Layout from 'components/Layout'
import { Heading, Text, Box } from '@chakra-ui/react'

function App() {
  return (
    <Layout>
      <Box padding="20px">
        <Heading as="h1" size="xl" mb="20px">
          Welcome to My Blog
        </Heading>
        <Text fontSize="lg">
          Explore the latest articles on technology, coding tips, and more.
        </Text>
      </Box>
    </Layout>
  )
}

export default App
