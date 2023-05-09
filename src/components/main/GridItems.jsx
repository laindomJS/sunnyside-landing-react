import { GridItem, Box, Heading, Text } from "@chakra-ui/react"
import ItemText from "./ItemText"

export const GridItems = () => {
  return (
    <>
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
        order={{ base:'-1', md:'1' }}
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
        order={{ base: null, md:'1' }}
      />

      <ItemText 
        title='Stand out to the right audience'
        text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, well build and extend you brand in digital places.'
      />

      <GridItem
        bgImage={{
          base:'url(/images/mobile/image-photography.jpg)',
          md:'url(/images/desktop/image-photography.jpg)'
        }}
        h={{ base:'650px', md:'full' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPosition='center'
        order='2'
        display='flex'
        alignItems='flex-end'
        justifyContent='center'
      >
        <Box 
          w={{ base:'80%', md:'55%'}} 
          m='3rem'
          textAlign='center'
        >
          <Heading as='h3' fontSize='28px' color='primary.dark-blue' mb='1rem'>
            Photography
          </Heading>
          <Text color='primary.dark-blue'>
            Increase your credibility by getting the most stunning, high-quality photos that improve your bussiness image.
          </Text>
        </Box>
      </GridItem>

      <GridItem
        bgImage={{
          base:'url(/images/mobile/image-graphic-design.jpg)',
          md:'url(/images/desktop/image-graphic-design.jpg)'
        }}
        h={{ base:'650px', md:'full' }}
        display='flex'
        alignItems='flex-end'
        justifyContent='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPosition='center'
        order='1'
      >
        <Box 
          w={{base:'80%', md:'55%'}} 
          m='3rem'
          textAlign='center'
        >
          <Heading as='h3' fontSize='28px' color='primary.dark-desaturated-cyan' mb='1rem'>
            Graphic Design
          </Heading>
          <Text color='primary.dark-desaturated-cyan'>
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.
          </Text>
        </Box>
      </GridItem>
    </>
  )
}