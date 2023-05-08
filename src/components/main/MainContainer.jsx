import { Grid, GridItem } from '@chakra-ui/react'
import ItemText from './ItemText'

export const MainContainer = () => {
  return (
    <Grid 
      as='section'
      w='100%' 
      h={{ base:'fit-content', md:'950px' }}
      templateColumns={{ base:'repeat(1, 1fr)', md:'repeat(2,1fr)' }}
      templateRows={{ base:'repeat(1, 1fr)', md:'repeat(2, 1fr)' }}
    >
      
      <ItemText 
        title='Transform your brand'
        text='We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your client through compelling visuals that do most of the marketing for you.'
      />
      
      <GridItem 
        bgImage={{ 
          base:'url(/images/mobile/image-transform.jpg)', 
          md:'url(/images/desktop/image-transform.jpg)' 
      }}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPosition='center'
        h={{ base:'350px', md:'full' }}
        order={{ base:'-1', md:null }}
      />

      <GridItem   
        bgImage={{ 
          base:'url(/images/mobile/image-stand-out.jpg)', 
          md:'url(/images/desktop/image-stand-out.jpg)' 
      }}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPosition='center' 
        h={{ base:'350px', md:'full' }}  
      />

      <ItemText 
        title='Stand out to the right audience'
        text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend you brand in digital places.'
      />

    </Grid>
  )
}