import { PropTypes } from 'prop-types'
import { chakra, Box, Image, Heading, Text } from '@chakra-ui/react'

const TestimonialCard = (profile) => {
  return (
    <chakra.article 
      display='flex' 
      alignItems='center' 
      flexDirection='column' 
      justifyContent='center' 
      mx={{base:'0px', md:'2rem'}}
      my={{ base:'2rem', md:'0px' }}
    >
    
      <Image w={20} h={20} borderRadius='50%' src={profile.image} alt={profile.name} />
      <Text mt='2rem' color='neutral.very-dark-grayish-blue'>
        {profile.text}
      </Text>
    
      <Box mt={{ base:'2rem', md:'4rem' }}>
        <Heading as='h3' fontSize='20px' color='neutral.very-dark-desaturated-blue'>
          {profile.name}
        </Heading>
        <Text color='neutral.grayish-blue' mt='.5rem'>
          {profile.ocupattion}
        </Text>
      </Box>
  
  </chakra.article>
  )
}

TestimonialCard.propTypes = {
  profile: PropTypes.object
}

export default TestimonialCard