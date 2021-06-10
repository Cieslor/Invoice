import { firestore } from 'firebaseAPI';
import { InvoiceStatus, FirestoreDocument } from 'models';

export const getInvoices = (userId: string, status: InvoiceStatus[], lastDoc?: FirestoreDocument) => {
  let query = firestore.collection('invoice').where('userUid', '==', userId);
  if (!!status.length) {
    query = query.where('status', 'in', status);
  }

  query = query.orderBy('createdAt', 'desc');

  if (!!lastDoc) {
    query = query.startAfter(lastDoc);
  }

  return query.limit(15).get();
};
