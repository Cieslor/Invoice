import React, { FC } from 'react';
import { Flex, Box, Text, HStack } from '@chakra-ui/react';
import { CreateNewInvoice, InvoiceList, InvoiceStatusFilter } from 'components';

export const DashboardView: FC = () => {
  return (
    <Flex
      w="100%"
      maxW="730px"
      h="100%"
      flexDirection="column"
      ml={[2, 12, '120px']}
      mr={[2, 12, 6, '120px']}
      pt={[8, 14, 0]}
    >
      <Flex justifyContent="space-between" alignItems="center" px={[4, 0]}>
        <Text as="h2" textStyle="h1">
          Invoices
        </Text>
        <HStack alignItems="center" spacing={[5, 5, 10]}>
          <Box>
            <InvoiceStatusFilter />
          </Box>
          <CreateNewInvoice />
        </HStack>
      </Flex>
      <Box w="100%" h="calc(100% - 48px)" pt={[8, 14, 16]} pb={4} pl={[4, 0]}>
        <InvoiceList />
      </Box>
    </Flex>
  );
};
