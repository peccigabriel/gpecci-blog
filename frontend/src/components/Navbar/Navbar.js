import { Grid, GridItem, Link, HStack } from '@chakra-ui/react'
import Brand from 'components/Brand'

export default function Navbar() {
  return (
    <Grid
      as="nav"
      padding="8px 80px"
      templateColumns="1fr 1fr"
      bg="brand.white"
      boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
      alignItems="center"
    >
      <GridItem>
        <Brand />
      </GridItem>
      <GridItem>
        <HStack justifyContent="flex-end" spacing={8}>
          <Link fontSize={20} href="/articles">
            Artigos
          </Link>
          <Link fontSize={20} href="/about">
            Sobre
          </Link>
        </HStack>
      </GridItem>
    </Grid>
  )
}
