import { Flex, Stack, Image, Text } from '@chakra-ui/react';

import { TravelLink } from './TravelLink';

export const TravelLinks = () => {
  return (
    <Flex w="100vw" px={['0', '12']} justify="center">
      <Stack
        mt={['8', '20']}
        px={['5', '10']}
        spacing="auto"
        maxW="1240px"
        w="100%"
        wrap="wrap"
        direction={['row']}
      >
        <TravelLink
          imageUrl="images/travels_cocktail.svg"
          imageAlt="night travel"
          title="Vida Noturna"
        />
        <TravelLink
          imageUrl="images/travels_surf.svg"
          imageAlt="beach travel"
          title="Praia"
        />
        <TravelLink
          imageUrl="images/travels_building.svg"
          imageAlt="modernl travel"
          title="Moderno"
        />
        <TravelLink
          imageUrl="images/travels_museum.svg"
          imageAlt="classictravel"
          title="classico"
        />
        <TravelLink
          imageUrl="images/travels_earth.svg"
          imageAlt="cocktail travel"
          title="e mais..."
        />
      </Stack>
    </Flex>
  );
};
