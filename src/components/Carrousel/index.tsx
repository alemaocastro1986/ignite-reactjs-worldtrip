import { Box, Flex, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CarrouselItem } from './CarrouselItem';

export const Carrousel = () => {
  return (
    <Box
      maxW="1240px"
      width="100%"
      h={['250px', '450px']}
      mb={[6, 10]}
      mt={['8', '20']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <CarrouselItem
            urlImage="https://images.unsplash.com/photo-1603318445632-b5f58ba351a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            title="Ásia"
            description="O continente mais diversificado."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrouselItem
            urlImage="https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            title="Ocêania"
            description="O continente mais isolado."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrouselItem
            urlImage="https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            title="Europa"
            description="O Continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrouselItem
            urlImage="https://images.unsplash.com/photo-1596337231519-894df47ad02b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
            title="América do Norte"
            description="O Continente dos grandes espetáculos."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrouselItem
            urlImage="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=798&q=80"
            title="América do Sul"
            description="O Continente dos países tropicais."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
