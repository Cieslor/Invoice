import { useInfiniteQuery } from 'react-query';
import { InvoiceStatus } from 'models';
import { getInvoices } from 'firebaseAPI';
import { invoicesQueryLimit } from 'utilities';

export const useGetPaginatedInvoices = (userUid: string, status: InvoiceStatus[]) => {
  return useInfiniteQuery(
    ['invoices', ...status],
    ({ pageParam }) => {
      return getInvoices.apply(null, [userUid, status, pageParam]);
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.length < invoicesQueryLimit ? undefined : lastPage[lastPage.length - 1].createdAt;
      },
      enabled: Boolean(userUid),
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
};
