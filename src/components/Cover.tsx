import { Box, Flex, Text } from '@chakra-ui/react';

export const Cover = () => {
  return (
    <Flex
      w="100vw"
      h={['150px', '500px']}
      alignItems="center"
      bgImage={`url('https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&h=500&q=80')`}
      justify="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgBlendMode="overlay"
      objectFit="cover"
      py={['59']}
    >
      <Box
        maxW="1140px"
        width="100%"
        height="100%"
        display="flex"
        justifyContent={['center', 'end']}
        alignItems={['center', 'flex-end']}
        px="4"
      >
        <Text fontSize={['3xl', '5xl']} color="gray.50" fontWeight="600">
          Europa
        </Text>
      </Box>
    </Flex>
  );
};
