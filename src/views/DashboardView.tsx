import React, { FC, useState } from 'react';
import { Flex, Box, Text, Button, Icon } from '@chakra-ui/react';
import { HiPlusSm } from 'react-icons/hi';
import { FormSlideInContainer, InvoiceForm } from 'components';

export const DashboardView: FC = () => {
  const [showNewInvoiceForm, setShowNewInvoiceForm] = useState<boolean>(false);
  return (
    <Box w="100%" maxW="730px" mx={[6, 12, '120px']} pt={[8, 14, 0]}>
      <FormSlideInContainer showContent={showNewInvoiceForm} close={() => setShowNewInvoiceForm(false)}>
        <InvoiceForm mode="New" />
      </FormSlideInContainer>
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="h2" textStyle="h1">
          Invoices
        </Text>
        <Button
          variant="primary-with-icon"
          leftIcon={
            <Flex w={8} h={8} justifyContent="center" alignItems="center" bg="white" borderRadius="50%">
              <Icon as={HiPlusSm} color="invoice.mediumSlateBlue" w={5} h={5} />
            </Flex>
          }
          onClick={() => setShowNewInvoiceForm(true)}
        >
          <Text display={['none', 'block']}>New Invoice</Text>
          <Text display={['block', 'none']}>New</Text>
        </Button>
      </Flex>
    </Box>
  );
};
