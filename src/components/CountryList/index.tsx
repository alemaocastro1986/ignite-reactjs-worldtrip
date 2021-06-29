import { Flex, Text, SimpleGrid } from '@chakra-ui/react';
import { CountryCard } from './CountryCard';

export const CountryList = () => {
  return (
    <Flex
      mt={['32px', '20']}
      maxW="1140px"
      w="100%"
      flexDirection="column"
      py="10"
    >
      <Text fontWeight="medium" fontSize={['24px', '3xl']}>
        Cidades +100
      </Text>
      <SimpleGrid
        columns={[1, 4]}
        px={['44px', 0]}
        spacing={['20px', '45px']}
        mt={['20px', '10']}
      >
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </SimpleGrid>
    </Flex>
  );
};
