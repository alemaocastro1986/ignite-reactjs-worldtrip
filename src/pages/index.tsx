import { Flex, Divider, Image, Text, VStack, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import { Banner } from '../components/Banner';
import { TravelLinks } from '../components/TravelLinks';
import { Carrousel } from '../components/Carrousel';

SwiperCore.use([Pagination, Navigation]);

export default function Home() {
  return (
    <Flex direction="column" align="center">
      <Banner />
      <TravelLinks />
      <Divider
        maxW={['60px', '100px']}
        mt={['8', '20']}
        mb={['8', '20']}
        borderColor="gray.500"
        borderWidth="1px"
      />

      <Text fontSize={['xl', '4xl']} textAlign="center" fontWeight="500">
        Vamos Nessa? <br />
        Então escolha seu continente.
      </Text>

      <Carrousel />
    </Flex>
  );
}
