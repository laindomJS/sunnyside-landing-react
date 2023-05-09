import { Grid } from '@chakra-ui/react'
import { GridItems } from './GridItems'

export const MainContainer = () => {
  return (
    <Grid 
      as='section'
      max='100%' 
      h='fit-content'
      templateColumns={{ base:'repeat(1, 1fr)', md:'repeat(2,1fr)' }}
      templateRows={{ base:'repeat(1, 1fr)', md:'repeat(3, 1fr)' }}
    >
      <GridItems />
    </Grid>
  )
}