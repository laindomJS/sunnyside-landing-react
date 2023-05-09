import { useState } from 'react'
import { Flex, Image, Icon } from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import NavbarMenu from './NavbarMenu'

import logo from '/logo.svg'

export const Navbar = () => {

  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

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
      <NavbarMenu condition={open} />   
      <Icon 
        as={!open ? FaBars : FaTimes} 
        boxSize={6}
        display={{ base:'static', md:'none' }} 
        onClick={handleMenu} 
        color='white' 
      />
    </Flex>
  )
} 