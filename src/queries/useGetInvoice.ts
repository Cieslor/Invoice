import { useQuery } from 'react-query';
import { getInvoice } from 'firebaseAPI';
import { InvoiceFromFirestore } from 'models';

export const useGetInvoice = (invoiceId: string) => {
  return useQuery<InvoiceFromFirestore | undefined>(['invoice', invoiceId], () => getInvoice(invoiceId), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
