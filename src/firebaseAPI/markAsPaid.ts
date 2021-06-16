import { firestore } from 'firebaseAPI';
import { InvoiceStatus } from 'models';

export const markAsPaid = (invoiceId: string) => {
  return firestore.collection('invoice').doc(invoiceId).update({
    status: InvoiceStatus.Paid,
  });
};
