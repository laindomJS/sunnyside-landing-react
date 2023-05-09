import { chakra, Image, Box, Flex } from '@chakra-ui/react'
import { FooterIcons } from './FooterIcons'
import FooterMenuItem from './FooterMenuItem'

export const Footer = () => {
  return (
    <chakra.footer 
      w='100%' 
      h='320px'
      display='flex'
      alignItems='center'
      justifyContent='center'
      bgColor='primary.desaturated-cyan'
    >

      <Box 
        w={{ base:'100%',  md:'60%'}}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Image 
          w='160px'
          mb='2rem'
          color='primary.dark-moderate-cyan' 
          src='/logo.svg' 
          alt='logo of the sunnyside company' 
        />

        <Flex mt='1rem'>
          <FooterMenuItem text='About' />
          <FooterMenuItem text='Services' />
          <FooterMenuItem text='Projects' />
        </Flex>

        <FooterIcons />

      </Box>
    
    </chakra.footer>
  )
}