import { PropTypes } from 'prop-types'
import { Text } from '@chakra-ui/react'

const FooterMenuItem = ({ text }) => {
  return (
    <Text 
      mx={{ base:'1rem', md:'3rem' }} 
      color='primary.dark-moderate-cyan'
      cursor='pointer'
      transition='color .2s ease-in'
      _hover={{ color:'white' }}
    >
      {text}
    </Text>
  )
}

FooterMenuItem.propTypes = {
  text: PropTypes.string
}

export default FooterMenuItem