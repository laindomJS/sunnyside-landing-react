import { Grid, GridItem } from '@chakra-ui/react'

export const Gallery = () => {
  return (
    <Grid
      w='100%'
      h='400px'
      templateColumns={{ base:'repeat(2, 1fr)', md:'repeat(4,1fr)' }}
      templateRows={{ base:'repeat(2, 1fr)', md:'repeat(1, 1fr)' }}
    >

      <GridItem 
        bgImage={{ 
          base:'url(/images/mobile/image-gallery-milkbottles.jpg)', 
          md:'url(/images/desktop/image-gallery-milkbottles.jpg)'
        }} 
        bgSize='cover'
        bgPosition='center'
        bgRepeat='no-repeat'
      />

      <GridItem 
        bgImage={{ 
          base:'url(/images/mobile/image-gallery-orange.jpg)', 
          md:'url(/images/desktop/image-gallery-orange.jpg)'
        }} 
        bgSize='cover'
        bgPosition='center'
        bgRepeat='no-repeat'
      />

      <GridItem 
        bgImage={{ 
          base:'url(/images/mobile/image-gallery-cone.jpg)', 
          md:'url(/images/desktop/image-gallery-cone.jpg)'
        }} 
        bgSize='cover'
        bgPosition='center'
        bgRepeat='no-repeat'
      />

      
      <GridItem 
        bgImage={{ 
          base:'url(/images/mobile/image-gallery-sugar-cubes.jpg)', 
          md:'url(/images/desktop/image-gallery-sugarcubes.jpg)'
        }} 
        bgSize='cover'
        bgPosition='center'
        bgRepeat='no-repeat'
      />


    </Grid>
  )
}