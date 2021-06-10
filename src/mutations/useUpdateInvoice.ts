import { useMutation } from 'react-query';
import { updateInvoice } from 'firebaseAPI';
import { Invoice } from 'models';

export const useUpdateInvoice = () => {
  return useMutation(
    ({ invoice, documentId }: { invoice: Invoice; documentId: string }) => updateInvoice(invoice, documentId),
    {
      onSuccess: (response) => {
        console.log(response);
      },
    }
  );
};
