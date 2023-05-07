import { PropTypes } from 'prop-types'
import { Button } from "@chakra-ui/react"


const MenuOption = ({ text, contact }) => {
  return (
    <Button 
      as='a' 
      variant={!contact ? 'ghost' : 'solid'} 
      bgColor={contact ? 'white' : null} 
      color={contact ? 'black' : 'white'} 
      fontFamily={contact ? 'heading' : 'body'}
      borderRadius={contact ? '20px' : null}
      h={contact ? '50px' : null}
      w={contact ? '120px' : null}
      fontSize='18px'
      mx='1rem' 
      transition='.2s ease-in'
      cursor='pointer'
      _hover={{ transform:'scale(1.1)' }}
    >
      {text}
    </Button>
  )
}

MenuOption.propTypes = {
  text: PropTypes.string,
  contact: PropTypes.string
}

export default MenuOption
