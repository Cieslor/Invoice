import { useQuery } from 'react-query';
import { getInvoice } from 'firebaseAPI';

export const useGetInvoice = (invoiceId: string) => {
  return useQuery(['invoice', invoiceId], () => getInvoice(invoiceId), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
