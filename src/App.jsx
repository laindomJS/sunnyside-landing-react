import { Box } from '@chakra-ui/react'
import { HeaderContainer } from './components/header/HeaderContainer'

function App() {
  return (
    <Box as='main' minH='100vh' maxW='100%'>
      <HeaderContainer />
    </Box>
  )
}

export default App
