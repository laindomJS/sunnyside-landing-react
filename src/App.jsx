import { chakra } from '@chakra-ui/react'
import { HeaderContainer } from './components/header/HeaderContainer'
import { MainContainer } from './components/main/MainContainer'

function App() {
  return (
    <chakra.main minH='100vh' maxW='100%'>
      <HeaderContainer />
      <MainContainer />
    </chakra.main>
  )
}

export default App
