import React, { FC } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { CreateNewInvoice, InvoiceList, InvoiceStatusFilter } from 'components';

export const DashboardView: FC = () => {
  const { t } = useTranslation('InvoiceList');
  return (
    <Flex w="100%" maxW="730px" h="100%" flexDirection="column" ml={[2, 8, '120px']} mr={[2, 8, 6, '120px']}>
      <Helmet>
        <title>{t('TITLE')}</title>
      </Helmet>
      <Flex justifyContent="space-between" alignItems="center" px={[4, 0]}>
        <Text as="h2" textStyle="h1">
          Invoices
        </Text>
        <Flex alignItems="center">
          <Box mr={[5, 5, 10]}>
            <InvoiceStatusFilter />
          </Box>
          <CreateNewInvoice />
        </Flex>
      </Flex>
      <Box w="100%" h="calc(100% - 48px)" pt={[8, 14, 16]} pb={4} pl={[4, 0]}>
        <InvoiceList />
      </Box>
    </Flex>
  );
};
