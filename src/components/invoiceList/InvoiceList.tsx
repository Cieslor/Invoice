import React, { FC } from 'react';
import { VStack, useColorModeValue, Box, Skeleton } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { useGetPaginatedInvoices } from 'queries';
import { transparentBgScrollbar } from 'helpers';
import { selectedStatusFilters } from 'state';
import { InvoiceListItem, InvoiceListEmptyState, ErrorAlert } from 'components';
import { InvoiceFromFirestore } from 'models/invoice.model';

export const InvoiceList: FC = () => {
  const selectedFilters = useRecoilValue(selectedStatusFilters);
  const { t } = useTranslation('InvoiceList');

  const { data, hasNextPage, fetchNextPage, isLoading, isFetching, isError } = useGetPaginatedInvoices(
    'rQby9VVrzAWrqNuLrhujBqV57JC3',
    selectedFilters
  );

  const invoices = data?.pages.flat();

  const skeletonColorScheme = useColorModeValue('whiteAlpha', 'blackAlpha');

  return (
    <Box
      id="invoice-list-scrollable"
      w="100%"
      h="100%"
      maxH="100%"
      pr={2}
      overflowY="auto"
      sx={transparentBgScrollbar(useColorModeValue('invoice.lavenderWeb', 'invoice.ebonyClay'))}
    >
      {invoices?.length !== 0 ? (
        <InfiniteScroll
          hasMore={!!hasNextPage}
          next={fetchNextPage}
          dataLength={invoices?.length ?? 0}
          loader={<Skeleton h={['130px', '72px']} mt={4} borderRadius="6px" colorScheme={skeletonColorScheme} />}
          scrollableTarget="invoice-list-scrollable"
          style={{ height: '100%' }}
        >
          <VStack spacing={4}>
            {invoices?.map((invoice) => (
              <InvoiceListItem key={invoice.id} data={invoice as InvoiceFromFirestore} />
            ))}
          </VStack>
        </InfiniteScroll>
      ) : (
        <InvoiceListEmptyState />
      )}
      {(isLoading || isFetching) && (
        <Skeleton h={['130px', '72px']} mt={4} borderRadius="6px" colorScheme={skeletonColorScheme} />
      )}
      {isError && <ErrorAlert>{t('ERROR')}</ErrorAlert>}
    </Box>
  );
};
