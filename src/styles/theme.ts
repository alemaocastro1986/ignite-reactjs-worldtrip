import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#23232E',
      '800': '#2C2F3A',
      '700': '#353C45',
      '600': '#3E4950',
      '500': '#47585B',
      '400': '#5F7171',
      '300': '#788784',
      '200': '#A9B3AD',
      '100': '#D6D8DB',
      '50': '#F5F8FA',
    },
    yellow: {
      '500': '#ffba08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500',
      },
    },
  },
});
