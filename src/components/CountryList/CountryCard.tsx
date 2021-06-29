import { Box, Text, Image } from '@chakra-ui/react';

export const CountryCard: React.FC = () => {
  return (
    <Box
      minW="256px"
      minH="279px"
      bg="white"
      borderWidth="thin"
      borderStyle="solid"
      borderColor="rgba(255, 186, 8, 0.5)"
      borderRadius="4px"
    >
      <Image
        src="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="euro 1"
        borderRadius="4px 4px 0 0"
      />
      <Box
        display="flex"
        p="6"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text fontFamily="Barlow" fontWeight="semibold">
            Londres
          </Text>
          <Text fontFamily="Barlow" fontWeight="normal" mt="4">
            Reino Unido
          </Text>
        </Box>
        <Image
          src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png"
          alt="euro united"
          w="30px"
          h="30px"
          borderRadius="50%"
        />
      </Box>
    </Box>
  );
};
