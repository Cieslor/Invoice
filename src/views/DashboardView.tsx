import React, { FC } from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
import { CreateNewInvoice } from 'components';
import { useGetPaginatedInvoices } from 'queries';
import { useCreateInvoice } from 'mutations';
import { Invoice, InvoiceStatus } from 'models';

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
  const { data, fetchNextPage } = useGetPaginatedInvoices('rQby9VVrzAWrqNuLrhujBqV57JC3', []);

  const { mutateAsync } = useCreateInvoice();

  return (
    <Box w="100%" maxW="730px" mx={[6, 12, '120px']} pt={[8, 14, 0]}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="h2" textStyle="h1">
          Invoices
        </Text>
        <CreateNewInvoice />
      </Flex>
      {data && data.pages[0].docs.map((item, index) => <p key={index}>{item.id}</p>)}
      <Button onClick={() => fetchNextPage()}>test</Button>
      <Button onClick={async () => await mutateAsync(mockInvoice)}>Create</Button>
    </Box>
  );
};
