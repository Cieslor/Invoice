import { firestore } from 'firebaseAPI';

export const getInvoice = (invoiceId: string) => {
  return firestore.collection('invoice').doc(invoiceId).get();
};
