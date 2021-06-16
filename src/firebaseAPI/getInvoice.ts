import { firestore } from 'firebaseAPI';
import { InvoiceFromFirestore } from 'models';

export const getInvoice = (invoiceId: string) => {
  return firestore
    .collection('invoice')
    .doc(invoiceId)
    .get()
    .then(
      (invoice) =>
        ({
          id: invoice.ref.id,
          ...invoice.data(),
          invoiceDate: invoice.data()?.invoiceDate.toDate(),
          createdAt: invoice.data()?.createdAt.toDate(),
        } as InvoiceFromFirestore)
    )
    .catch((error) => {
      throw error;
    });
};
