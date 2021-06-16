import React, { FC } from 'react';
import { Flex, useColorModeValue, Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { InvoiceDetailsHeader, InvoiceDetailsDataPresentation, InvoiceDetailsActions, ErrorAlert } from 'components';
import { useGetInvoice } from 'queries';
import { transparentBgScrollbar } from 'helpers';

export const InvoiceDetailsView: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('InvoiceDetails');

  const { data, isLoading, isFetching, isError } = useGetInvoice(id);

  const actionsContainerBg = useColorModeValue('white', 'invoice.spaceCadet');

  return (
    <Flex w="100%" maxW="730px" h="100%" flexDirection="column" ml={[0, 4, '120px']} mr={[0, 4, 4, '120px']} px={2}>
      <Helmet>
        <title>{t('TITLE', { id })}</title>
      </Helmet>
      <Box
        h="100%"
        overflow="auto"
        mb={['87px', '87px', 8]}
        px={[2, 2, 0]}
        sx={transparentBgScrollbar(useColorModeValue('invoice.lavenderWeb', 'invoice.ebonyClay'))}
      >
        <InvoiceDetailsHeader id={id} data={data} isLoading={isLoading || isFetching} isError={isError} />
        {isError ? (
          <ErrorAlert>{t('DETAILS_ERROR')}</ErrorAlert>
        ) : (
          <InvoiceDetailsDataPresentation id={id} data={data} isLoading={isLoading || isFetching} />
        )}
        {!!data && (
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
            <InvoiceDetailsActions id={id} data={data} />
          </Flex>
        )}
      </Box>
    </Flex>
  );
};
