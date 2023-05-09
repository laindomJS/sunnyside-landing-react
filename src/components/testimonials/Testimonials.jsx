import { Box, Heading, chakra } from '@chakra-ui/react'
import { TestimonialsItems } from './TestimonialsItems' 

export const Testimonials = () => {
  return (
    <chakra.section 
      w='100%' 
      h='fit-content'
      bgColor='white' 
      display='flex' 
      justifyContent='center' 
      alignItems='center'
      textAlign='center'
      p={{ md:'4rem' }}
      py={{ base:'3rem' }}
    >
      <Box w='90%'>
        <Heading 
          as='h3' 
          letterSpacing='3px' 
          textTransform='uppercase'
          color='neutral.grayish-blue'  
          fontSize='22px'
        >
          Client Testimonials
          </Heading>
          <TestimonialsItems />
      </Box>
    </chakra.section>
  )
}