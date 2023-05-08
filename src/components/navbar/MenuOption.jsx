import { PropTypes } from 'prop-types'
import { Button } from "@chakra-ui/react"

const MenuOption = ({ text, contact }) => {
  return (
    <Button 
      as='a' 
      variant={!contact ? 'ghost' : 'solid'} 
      bgColor={{ 
        base:contact ? 'primary.yellow' : 'transparent', 
        md:contact ? 'white' : null 
      }}
      color={{ 
        base:contact ? 'neutral.very-dark-desaturated-blue' : 'neutral.grayish-blue', 
        md:contact ? 'black' : 'white'  
      }}
      mx={{ base:'0px', md:'1rem' }}
      my={{ base:'.5rem', md:'0px' }}
      fontFamily={contact ? 'heading' : 'body'}
      borderRadius={contact ? '20px' : null}
      h={contact ? '45px' : null}
      w={contact ? '120px' : null}
      fontSize='18px'
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
