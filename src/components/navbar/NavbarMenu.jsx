import { PropTypes } from 'prop-types'
import { Flex } from '@chakra-ui/react'
import MenuOption from './MenuOption' 

const NavbarMenu = ({ condition }) => {
  return (
    <Flex 
    position={{ base:'absolute', md:'relative', lg:'relative' }}
    direction={{ base:'column', md:'row' }}
    w={{ base:'280px', md:'fit-content' }} 
    bgColor={{ base:'white', md:'transparent' }}
    padding={{ base:'1rem', md:'0px' }}
    color={{ base:'neutral.grayish-blue', md:'inherit' }}
    top={{ base: condition ? '80px' : '-1000px', md: '0px' }}
    left='25px'
    alignItems='center' 
    transition='.3s ease-in top'
  >
    <MenuOption text='About' />
    <MenuOption text='Services' />
    <MenuOption text='Projects' />
    <MenuOption text='Contact' contact='true' />
  </Flex>
  )
}

NavbarMenu.propTypes = {
  condition: PropTypes.bool
}

export default NavbarMenu