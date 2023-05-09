import { PropTypes } from 'prop-types'
import { GridItem, Heading, Text, Box } from '@chakra-ui/react'

const ItemText = ({ title, text }) => {
  return (
    <GridItem 
      bgColor='white' 
      p={{ base:null, md:'7rem' }}
      h={{ base:'fit-content', md:null }}
      textAlign={{ base:'center', md:'left' }}
      order={{ base:null, md:'1' }}
    >
      <Box
        m={{ base:'2.2rem', md:'0px' }}
      >
        <Heading 
          as='h2'
          w={{ base:'fit-content', md:'360px' }} 
          mx={{ base:'auto', md: '0px' }}
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

        <Text 
          mx={{ base:'auto', md:'0px' }}
          w='fit-content'
          mt='2rem' 
          fontSize='16px'
          fontFamily='heading' 
          fontWeight='800'
          textTransform='uppercase'
          color='neutral.very-dark-desaturated-blue'
          cursor='pointer'  
          borderBottom='2px solid'
          borderColor={title === 'Stand out to the right audience' ? 'primary.soft-red' : 'primary.yellow'}
          transition='.2s ease-in all'
          _hover={{ borderBottomWidth: '6px' }}
        >
          Learn More
        </Text>
      </Box>
  </GridItem>
  )
}

ItemText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default ItemText