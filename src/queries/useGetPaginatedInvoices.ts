import { useInfiniteQuery } from 'react-query';
import { InvoiceStatus } from 'models';
import { getInvoices } from 'firebaseAPI';

export const useGetPaginatedInvoices = (userUid: string, status: InvoiceStatus[]) => {
  return useInfiniteQuery(
    ['invoices', ...status],
    ({ pageParam }) => {
      return getInvoices.apply(null, [userUid, status, pageParam]);
    },
    {
      getNextPageParam: (lastPage) => lastPage.docs[lastPage.docs.length - 1],
      enabled: Boolean(userUid),
    }
  );
};
