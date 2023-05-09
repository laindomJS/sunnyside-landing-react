import { chakra } from '@chakra-ui/react'
import { HeaderContainer } from './components/header/HeaderContainer'
import { MainContainer } from './components/main/MainContainer'
import { Testimonials } from './components/testimonials/Testimonials'

function App() {
  return (
    <chakra.main minH='100vh' maxW='100%'>
      <HeaderContainer />
      <MainContainer />
      <Testimonials />
    </chakra.main>
  )
}

export default App
