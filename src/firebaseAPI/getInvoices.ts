import { firestore } from 'firebaseAPI';
import { InvoiceStatus, InvoiceFromFirestore, FirestoreTimestamp } from 'models';
import { invoicesQueryLimit } from 'utilities';

export const getInvoices = (userId: string, status: InvoiceStatus[], lastDocCreatedAt?: FirestoreTimestamp) => {
  let query = firestore.collection('invoice').where('userUid', '==', userId);
  if (!!status.length) {
    query = query.where('status', 'in', status);
  }

  query = query.orderBy('createdAt', 'desc');

  if (!!lastDocCreatedAt) {
    query = query.startAfter(lastDocCreatedAt);
  }

  return query
    .limit(invoicesQueryLimit)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs.map(
        (invoice) =>
          ({
            id: invoice.ref.id,
            ...invoice.data(),
            invoiceDate: invoice.data().invoiceDate.toDate(),
            createdAt: invoice.data().createdAt.toDate(),
          } as InvoiceFromFirestore)
      );
    })
    .catch((error) => {
      throw error;
    });
};
