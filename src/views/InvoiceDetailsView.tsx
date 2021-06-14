import React, { FC } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { InvoiceDetailsHeader, InvoiceDetailsDataPresentation } from 'components';
import { useGetInvoice } from 'queries';
import { InvoiceFromFirestore } from 'models';
import { transparentBgScrollbar } from 'helpers';

export const InvoiceDetailsView: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isFetching } = useGetInvoice(id);

  return (
    <Flex
      w="100%"
      maxW="730px"
      h="100%"
      flexDirection="column"
      ml={[2, 6, '120px']}
      mr={[2, 6, 6, '120px']}
      px={2}
      overflow="auto"
      sx={transparentBgScrollbar(useColorModeValue('invoice.lavenderWeb', 'invoice.ebonyClay'))}
    >
      <InvoiceDetailsHeader id={id} status={data?.data()?.status} isLoading={isLoading || isFetching} />
      <InvoiceDetailsDataPresentation
        id={id}
        data={data?.data() as InvoiceFromFirestore}
        isLoading={isLoading || isFetching}
      />
    </Flex>
  );
};
