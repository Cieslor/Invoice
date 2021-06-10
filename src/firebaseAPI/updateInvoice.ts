import { firestore } from 'firebaseAPI';
import { Invoice } from 'models';

export const updateInvoice = (invoice: Invoice, documentId: string) => {
  return firestore.collection('invoice').doc(documentId).set(invoice);
};
