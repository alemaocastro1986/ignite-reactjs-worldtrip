import { Flex, Text, Stack, Box } from '@chakra-ui/react';
import { InfoData } from './InfoData';
export const ContinentDetais = () => {
  return (
    <Flex
      maxW="1140px"
      width="100%"
      marginTop={[0, '20']}
      align="center"
      justify="space-between"
      direction={['column', 'column', 'column', 'row']}
    >
      <Text
        fontWeight="normal"
        fontSize={['14px', 'xl']}
        textAlign="justify"
        flex="1"
        maxW="600px"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Stack
        direction="row"
        spacing="auto"
        width="100%"
        maxW="420px"
        mt={['16px', 0]}
      >
        <InfoData quantity={50} title="Países" />
        <InfoData quantity={60} title="Línguas" />
        <InfoData
          quantity={27}
          title="Cidades +100"
          hasInfo
          infoText="more +100 cities"
        />
      </Stack>
    </Flex>
  );
};
