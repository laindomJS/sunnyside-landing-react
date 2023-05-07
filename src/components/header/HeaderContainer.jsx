import { chakra } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { HeaderContent } from './HeaderContent'

export const HeaderContainer = () => {
  return (
    <chakra.header 
      w='100%' 
      h='100vh' 
      bgImage={{base:'url(/images/mobile/image-header.jpg)',  md:'url(/images/desktop/image-header.jpg)'}} 
      bgPosition='center' 
      bgRepeat='no-repeat' 
      bgSize='cover'
    >
      <Navbar />
      <HeaderContent />
    </chakra.header>
  )
}