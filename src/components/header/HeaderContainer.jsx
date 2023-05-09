import { chakra } from '@chakra-ui/react'
import { Navbar } from '../navbar/Navbar'
import { HeaderContent } from './HeaderContent'

export const HeaderContainer = () => {
  return (
    <chakra.header 
      maxW='100vw' 
      h={{base:'540px', md:'650px' }}
      bgImage={{
        base:'url(/images/mobile/image-header.jpg)',  
        md:'url(/images/desktop/image-header.jpg)'
      }} 
      bgPosition='center' 
      bgRepeat='no-repeat' 
      bgSize='cover'
    >
      <Navbar />
      <HeaderContent />
    </chakra.header>
  )
}