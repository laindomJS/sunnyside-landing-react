import { PropTypes } from 'prop-types'
import { GridItem, Heading, Text } from '@chakra-ui/react'

const ItemText = ({ title, text }) => {
  return (
    <GridItem 
    bgColor='white' 
    p={{ base:'1.4rem', md:'7rem' }}
    textAlign={{ base:'center', md:'left' }}
  >
    <Heading 
      mt={{ base:'1rem', md:null }}
      w={{ base:'fit-content', md:'360px' }} 
      fontSize={{ base:'26px', md:'35px' }} 
      fontWeight='800' 
      color='neutral.very-dark-desaturated-blue'
    >
      {title}
    </Heading>

    <Text 
      mt='1.5rem' 
      lineHeight={{ base:1.7, md:null }}
      w={{ base:'100%', md:'90%' }} 
      fontSize={{ base:'15px', md:null }}
      mb='1rem'
      color='neutral.dark-grayish-blue'
    >
      {text}
    </Text>
  </GridItem>
  )
}

ItemText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default ItemText