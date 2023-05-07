import { Box, Heading, Image } from '@chakra-ui/react'
import arrow from '../../assets/icon-arrow-down.svg'

export const HeaderContent = () => {
  return (
    <Box mt='3rem' as='section'>
    <Heading 
      textTransform='uppercase' 
      textAlign={{ base:'center', md:'' }}
      fontSize={{base:'30px', md:'55px'}} 
      w='fit-content' 
      mx='auto' 
      color='white' 
      letterSpacing='10px'
    >
      We Are Creatives
    </Heading>
    <Image src={arrow} w='fit-content' mx='auto' mt='3rem' />
  </Box>
  )
}