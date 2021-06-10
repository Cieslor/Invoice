import { useMutation, useQueryClient } from 'react-query';
import { createInvoice } from 'firebaseAPI';
import { Invoice } from 'models';

export const useCreateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation((invoice: Invoice) => createInvoice(invoice), {
    onSuccess: () => {
      queryClient.refetchQueries(['invoices']);
    },
  });
};
