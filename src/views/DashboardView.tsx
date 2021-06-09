import React, { FC, useState } from 'react';
import { Flex, Box, Text, Button, Icon } from '@chakra-ui/react';
import { HiPlusSm } from 'react-icons/hi';
import { FormSlideInContainer, InvoiceForm } from 'components';
import { useGetPaginatedInvoices } from 'queries';
import { useCreateInvoice } from 'mutations';
import { InvoiceFormMode, Invoice, InvoiceStatus } from 'models';

const mockInvoice: Invoice = {
  fromStreetAddress: 'Testowa 2',
  fromCity: 'Testowo',
  fromPostCode: '43-100',
  fromCountry: 'Poland',
  toClientsName: 'Sebastian Cieslik',
  toClientsEmail: 'testowyEmail@gmail.com',
  toStreetAddress: 'Testowa 20',
  toCity: 'Katowice',
  toPostCode: '43-210',
  toCountry: 'Poland',
  invoiceDate: new Date(),
  paymentTerms: 'net30',
  projectDescription: 'Software project',
  userUid: 'rQby9VVrzAWrqNuLrhujBqV57JC3',
  status: InvoiceStatus.Pending,
  createdAt: new Date(),
  invoiceItems: [
    {
      itemName: 'Produkt 1',
      quantity: 2,
      price: 30,
      totalPrice: 60,
    },
    {
      itemName: 'Produkt 2',
      quantity: 3,
      price: 30,
      totalPrice: 90,
    },
    {
      itemName: 'Produkt 3',
      quantity: 4,
      price: 40,
      totalPrice: 160,
    },
  ],
};

export const DashboardView: FC = () => {
  const [showNewInvoiceForm, setShowNewInvoiceForm] = useState<boolean>(false);

  const { data, fetchNextPage } = useGetPaginatedInvoices('rQby9VVrzAWrqNuLrhujBqV57JC3', []);

  const { mutateAsync } = useCreateInvoice();

  console.log(
    data &&
      data.pages
        .map((page) => page.docs)
        .flat()
        .map((item) => item.data())
  );
  return (
    <Box w="100%" maxW="730px" mx={[6, 12, '120px']} pt={[8, 14, 0]}>
      <FormSlideInContainer showContent={showNewInvoiceForm} close={() => setShowNewInvoiceForm(false)}>
        <InvoiceForm mode={InvoiceFormMode.New} onCancel={() => setShowNewInvoiceForm(false)} />
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
      {data && data.pages[0].docs.map((item, index) => <p key={index}>{item.data().createdAt.seconds}</p>)}
      <Button onClick={() => fetchNextPage()}>test</Button>
      <Button onClick={async () => await mutateAsync(mockInvoice)}>Create</Button>
    </Box>
  );
};
