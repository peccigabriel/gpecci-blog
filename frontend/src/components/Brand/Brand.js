import { Text, Link } from '@chakra-ui/react'
import { brandName } from 'constants/commons'

export default function Brand() {
  return (
    <Link href="/" _hover={{ textDecoration: 'none' }}>
      <Text fontSize="4xl" fontFamily="brand">
        {brandName}
      </Text>
    </Link>
  )
}
