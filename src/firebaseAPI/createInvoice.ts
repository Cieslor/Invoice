import { firestore } from 'firebaseAPI';
import { Invoice } from 'models';

export const createInvoice = (invoice: Invoice) => {
  return firestore.collection('invoice').add(invoice);
};
