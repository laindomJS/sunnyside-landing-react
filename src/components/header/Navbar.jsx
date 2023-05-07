import { Flex, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.svg'
import MenuOption from './MenuOption'

export const Navbar = () => {
  return (
    <Flex 
      as='nav' 
      w='100%' 
      h='fit' 
      justifyContent='space-between' 
      alignItems='center' 
      p={{base:'1.8rem', md:'2.5rem'}} 
      position='relative'
    >
      <Image w='150px' src={logo} alt='the logo of sunnyside company' cursor='pointer' />
      <Flex w='fit-content' alignItems='center' display={{ base: 'none', md: 'static' }}>
        <MenuOption text='About' />
        <MenuOption text='Services' />
        <MenuOption text='Projects' />
        <MenuOption text='Contact' contact='true' />
      </Flex>
      <Text display={{ base:'static', md:'none' }}>open</Text>
    </Flex>
  )
} 