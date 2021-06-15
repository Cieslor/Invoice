import React, { FC } from 'react';
import { Flex, useColorModeValue, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { InvoiceDetailsHeader, InvoiceDetailsDataPresentation, InvoiceDetailsActions } from 'components';
import { useGetInvoice } from 'queries';
import { transparentBgScrollbar } from 'helpers';

export const InvoiceDetailsView: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isFetching } = useGetInvoice(id);

  const actionsContainerBg = useColorModeValue('white', 'invoice.spaceCadet');

  return (
    <Flex w="100%" maxW="730px" h="100%" flexDirection="column" ml={[0, 4, '120px']} mr={[0, 4, 4, '120px']} px={2}>
      <Box
        h="100%"
        overflow="auto"
        mb={['87px', '87px', 8]}
        px={[2, 2, 0]}
        sx={transparentBgScrollbar(useColorModeValue('invoice.lavenderWeb', 'invoice.ebonyClay'))}
      >
        <InvoiceDetailsHeader id={id} status={data?.status} isLoading={isLoading || isFetching} />
        <InvoiceDetailsDataPresentation id={id} data={data} isLoading={isLoading || isFetching} />
        {!!data?.status && (
          <Flex
            position="fixed"
            left="0"
            bottom="0"
            display={['flex', 'flex', 'none']}
            w="100%"
            pl={4}
            pr={6}
            py={5}
            justifyContent="center"
            bg={actionsContainerBg}
            boxShadow="0px 10px 10px -10px rgba(72, 84, 159, 0.100397)"
            sx={{
              '& > div': {
                width: 'auto',
              },
            }}
          >
            <InvoiceDetailsActions id={id} status={data?.status} />
          </Flex>
        )}
      </Box>
    </Flex>
  );
};
