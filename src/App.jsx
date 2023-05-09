import { chakra } from '@chakra-ui/react'
import { HeaderContainer } from './components/header/HeaderContainer'
import { MainContainer } from './components/main/MainContainer'
import { Testimonials } from './components/testimonials/Testimonials'
import { Gallery } from './components/gallery/Gallery'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <chakra.main minH='100vh' maxW='100%'>
      <HeaderContainer />
      <MainContainer />
      <Testimonials />
      <Gallery />
      <Footer />
    </chakra.main>
  )
}

export default App
