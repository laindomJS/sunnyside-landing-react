import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Fraunces', sans-serif`,
    body: `'Barlow', sans-serif`
  },
  colors: {
    primary: {
      'soft-red': 'hsl(7, 99%, 70%)',
      'yellow': 'hsl(51, 100%, 49%)',
      'dark-desaturated-cyan': 'hsl(167, 40%, 24%)', // graphic design text
      'dark-blue': 'hsl(198, 62%, 26%)', // photography text
      'dark-moderate-cyan': 'hsl(168, 34%, 41%)', // footer
      'desaturated-cyan': '#91D3C3' // footer bg
    },
    neutral: {
      'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
      'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
      'dark-grayish-blue': 'hsl(232, 10%, 55%)',
      'grayish-blue': 'hsl(210, 4%, 67%)'
    }
  }
})