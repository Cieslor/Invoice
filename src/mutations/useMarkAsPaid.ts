import { useMutation, useQueryClient } from 'react-query';
import { markAsPaid } from 'firebaseAPI';
import { InvoiceFromFirestore, InvoiceStatus } from 'models';

export const useMarkAsPaid = () => {
  const queryClient = useQueryClient();
  return useMutation((invoiceId: string) => markAsPaid(invoiceId), {
    onMutate: async (id) => {
      await queryClient.cancelQueries(['invoice', id]);

      const previousInvoice = queryClient.getQueryData<InvoiceFromFirestore>(['invoice', id]);

      queryClient.setQueryData(['invoice', id], {
        ...previousInvoice,
        status: InvoiceStatus.Paid,
      });

      return { previousInvoice };
    },
    onError: (_, id, context: any) => {
      if (context?.previousInvoice) {
        queryClient.setQueryData(['invoice', id], context.previousInvoice);
      }
    },
    onSettled: (id) => {
      queryClient.invalidateQueries(['invoice', id]);
      queryClient.invalidateQueries('invoices');
    },
  });
};
