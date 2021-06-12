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
        return lastPage.docs.length < invoicesQueryLimit ? undefined : lastPage.docs[lastPage.docs.length - 1];
      },
      enabled: Boolean(userUid),
      staleTime: Infinity,
    }
  );
};
