import {
  Box,
  Stack,
  Text,
  Image,
  Spacer,
  Flex,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export const Banner = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      width="100vw"
      maxH="335px"
      bgImage="url('images/banner_background.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={['7', '20']}
    >
      <Flex
        maxW="1240px"
        w="100%"
        height="100%"
        position="relative"
        px={['4', '6', '10', '50', '20']}
      >
        <Stack spacing="2" maxW="430px">
          <Text fontSize={['2xl', '4xl']} color="gray.50" fontWeight="500">
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize={['sm', 'md']} color="gray.300">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        {isLargeScreen && (
          <Image
            src="images/banner_airplane.svg"
            alt="airplane banner"
            position="absolute"
            transform="rotate(3deg)"
            right={20}
            top="-5"
          />
        )}
      </Flex>
    </Box>
  );
};
