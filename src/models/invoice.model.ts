import { ItemFields, FirestoreTimestamp } from 'models';

export enum InvoiceFormMode {
  New = 'New',
  Edit = 'Edit',
}

export enum InvoiceStatus {
  Pending = 'Pending',
  Draft = 'Draft',
  Paid = 'Paid',
  None = 'None',
}

export interface InvoiceBillingInfo {
  fromStreetAddress: string;
  fromCity: string;
  fromPostCode: string;
  fromCountry: string;
  toClientsName: string;
  toClientsEmail: string;
  toStreetAddress: string;
  toCity: string;
  toPostCode: string;
  toCountry: string;
  invoiceDate: Date;
  paymentTerms: string;
  projectDescription: string;
}

export interface InvoiceItem extends ItemFields {
  totalPrice: number;
}

export interface Invoice extends InvoiceBillingInfo {
  invoiceItems: InvoiceItem[];
  userUid: string;
  status: InvoiceStatus;
  createdAt: Date;
}

export interface InvoiceFromFirestore extends Omit<Invoice, 'invoiceDate' | 'createdAt'> {
  invoiceDate: FirestoreTimestamp;
  createdAt: FirestoreTimestamp;
}
