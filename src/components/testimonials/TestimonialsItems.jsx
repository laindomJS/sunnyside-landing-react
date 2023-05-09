import { Flex } from '@chakra-ui/react'
import TestimonialCard from './TestimonialCard'

const profiles = [
  {
    id: 1,
    name: 'Emily R.',
    ocupattion: 'Marketing Director',
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    image: '/images/image-emily.jpg'
  },
  {
    id: 2,
    name: 'Thomas S.',
    ocupattion: 'Chief Operating Officer',
    text: 'Sunnysides enthusiasm coupled with their keen interest in our brands success made it a satisfaying and enjoyable experience.',
    image: '/images/image-thomas.jpg'
  },
  {
    id: 3,
    name: 'Jennie F.',
    ocupattion: 'Bussiness Owner',
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    image: '/images/image-jennie.jpg'
  }
]


export const TestimonialsItems = () => {
  return (
    <Flex 
      direction={{ base:'column', md:'row' }}
      justifyContent='space-between' 
      alignItems='center' 
      mt='5rem'
    >
      {profiles.map(profile => (
        <TestimonialCard key={profile.id} {...profile} />
      ))}
    </Flex>
  )
}