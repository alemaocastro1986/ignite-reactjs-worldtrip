import { Box, forwardRef, Text, Tooltip } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

interface InfoDataProps {
  quantity: number;
  title: string;
  hasInfo?: boolean;
  infoText?: string;
}

export const InfoData = ({
  quantity,
  title,
  hasInfo,
  infoText,
}: InfoDataProps) => {
  return (
    <Box
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems={['flex-start', 'center']}
    >
      <Text color="yellow.500" fontWeight="semibold" fontSize={['24px', '5xl']}>
        {quantity}
      </Text>
      <Box display="flex" alignItems="baseline" justifyContent="space-between">
        <Text fontSize={['18px', '2xl']} fontWeight="semibold">
          {title}
        </Text>
        {hasInfo && (
          <Box marginLeft="7px">
            <Tooltip ml="8px" label={infoText} fontSize="md">
              <span>
                <RiInformationLine color="#D6D8DB" />
              </span>
            </Tooltip>
          </Box>
        )}
      </Box>
    </Box>
  );
};
