import { firestore } from 'firebaseAPI';

export const deleteInvoice = (invoiceId: string) => {
  return firestore.collection('invoice').doc(invoiceId).delete();
};
