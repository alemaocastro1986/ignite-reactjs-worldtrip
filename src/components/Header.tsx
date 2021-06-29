import { Flex, Image, IconButton } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

export const Header = () => {
  const { asPath, push } = useRouter();

  const isDetailsPage = asPath.startsWith('/continent');

  function handleHome() {
    push('/');
  }
  return (
    <Flex
      as="header"
      h={['50px', '80px', '100px']}
      align="center"
      justify="center"
    >
      <Flex
        maxW="1140px"
        w="100%"
        align="center"
        justify="center"
        position="relative"
      >
        {isDetailsPage && (
          <IconButton
            pos="absolute"
            onClick={handleHome}
            left="0"
            _hover={{
              color: 'yellow.500',
            }}
            aria-label="Back to Home"
            variant="unstyled"
            icon={<IoIosArrowBack size={24} color="gray.500" />}
          />
        )}
        <Image
          src="../images/logo.svg"
          alt="logo"
          h={46}
          height={['20px', '40px', 'auto']}
        />
      </Flex>
    </Flex>
  );
};
