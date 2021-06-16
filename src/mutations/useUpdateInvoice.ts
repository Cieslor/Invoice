import { useMutation, useQueryClient } from 'react-query';
import { updateInvoice } from 'firebaseAPI';
import { Invoice, InvoiceFromFirestore } from 'models';

export const useUpdateInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ invoice, documentId }: { invoice: Invoice; documentId: string }) => updateInvoice(invoice, documentId),
    {
      onMutate: async ({ invoice, documentId }) => {
        await queryClient.cancelQueries(['invoice', documentId]);

        const previousInvoice = queryClient.getQueryData<InvoiceFromFirestore>(['invoice', documentId]);

        queryClient.setQueryData(['invoice', documentId], {
          ...invoice,
          id: documentId,
        });

        return { previousInvoice };
      },
      onError: (_, { documentId }, context: any) => {
        if (context?.previousInvoice) {
          queryClient.setQueryData(['invoice', documentId], context.previousInvoice);
        }
      },
      onSettled: (id) => {
        queryClient.invalidateQueries('invoices');
        queryClient.invalidateQueries(['invoice', id]);
      },
    }
  );
};
