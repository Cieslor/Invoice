import { useMutation, useQueryClient } from 'react-query';
import { deleteInvoice } from 'firebaseAPI';

export const useDeleteInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation((invoiceId: string) => deleteInvoice(invoiceId), {
    onSuccess: () => {
      queryClient.invalidateQueries('invoices');
    },
  });
};
