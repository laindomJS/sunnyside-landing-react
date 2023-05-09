import { Icon, Flex } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

export const FooterIcons = () => {
  return (
    <Flex mt='4rem'>
      <Icon 
        as={FaFacebook} 
        w={6} 
        h={6} 
        mx='1rem' 
        color='primary.dark-desaturated-cyan' 
        cursor='pointer' 
        transition='color .2s ease-in' 
        _hover={{ color:'white' }} 
      />

      <Icon 
        as={FaInstagram} 
        w={6} 
        h={6} 
        mx='1rem' 
        color='primary.dark-desaturated-cyan' 
        cursor='pointer' 
        transition='color .2s ease-in' 
        _hover={{ color:'white' }} 
      />

      <Icon 
        as={FaTwitter} 
        w={6} 
        h={6} 
        mx='1rem' 
        color='primary.dark-desaturated-cyan' 
        cursor='pointer' 
        transition='color .2s ease-in' 
        _hover={{ color:'white' }} 
      />
      
      <Icon 
        as={FaPinterest} 
        w={6} 
        h={6} 
        mx='1rem' 
        color='primary.dark-desaturated-cyan' 
        cursor='pointer' 
        transition='color .2s ease-in' 
        _hover={{ color:'white' }} 
      />

  </Flex>
  )
}