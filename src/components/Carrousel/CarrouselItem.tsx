import { Flex, Text, Box } from '@chakra-ui/react';

interface CarrouselItemProps {
  urlImage: string;
  title: string;
  description: string;
}

export const CarrouselItem = ({
  urlImage,
  title,
  description,
}: CarrouselItemProps) => {
  return (
    <Flex
      bgRepeat="no-repeat"
      bgPosition="center"
      bgImage={`url('${urlImage}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`}
      w="100%"
      h={['250', '450px']}
      bgSize="cover"
      bgBlendMode="overlay"
      objectFit="cover"
      align="center"
      justify="center"
    >
      <Box textAlign="center">
        <Text color="gray.50" fontWeight="700" fontSize={['2xl', '5xl']}>
          {title}
        </Text>
        <Text color="gray.100" fontWeight="700" fontSize={['xs', '2xl']}>
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
