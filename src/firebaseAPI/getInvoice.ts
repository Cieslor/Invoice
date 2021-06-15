import { firestore } from 'firebaseAPI';
import { InvoiceFromFirestore } from 'models';

export const getInvoice = (invoiceId: string) => {
  return firestore
    .collection('invoice')
    .doc(invoiceId)
    .get()
    .then((invoice) => invoice.data() as InvoiceFromFirestore)
    .catch((error) => {
      throw error;
    });
};
