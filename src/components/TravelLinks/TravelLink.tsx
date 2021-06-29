import { Flex, Image, Box, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelLinkProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export const TravelLink = ({ title, imageUrl, imageAlt }: TravelLinkProps) => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      direction={['row', 'column']}
      align="center"
      p={[3, 0]}
      flex="1"
      justifyContent="center"
    >
      {isLargeScreen ? (
        <Image src={imageUrl} alt={imageAlt} w="85px" h="85px" mb="2" />
      ) : (
        <Box w="2" h="2" bg="yellow.500" borderRadius="50%" mr="2"></Box>
      )}
      <Text fontSize={['lg', '2xl']} fontWeight="600" whiteSpace="nowrap">
        {title}
      </Text>
    </Flex>
  );
};
