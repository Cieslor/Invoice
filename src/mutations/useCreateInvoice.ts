import { useMutation } from 'react-query';
import { createInvoice } from 'firebaseAPI';
import { Invoice } from 'models';

export const useCreateInvoice = () => {
  return useMutation((invoice: Invoice) => createInvoice(invoice), {
    onSuccess: (response) => {
      console.log(response);
    },
  });
};
