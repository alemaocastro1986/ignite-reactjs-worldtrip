import { VStack, Flex, Text, Stack, Box } from '@chakra-ui/react';
import { CountryList } from '../../components/CountryList';
import { Cover } from '../../components/Cover';
import { ContinentDetais } from '../../components/ContinentDetais';

const ContinentDetails = () => {
  return (
    <Flex align="center" direction="column">
      <Cover />
      <VStack px="16px" pb="16px" pt="24px">
        <ContinentDetais />
        <CountryList />
      </VStack>
    </Flex>
  );
};

export default ContinentDetails;
