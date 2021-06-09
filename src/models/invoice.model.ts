import { ItemFields } from 'models';

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

export interface IInvoiceBillingInfo {
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

export interface Invoice extends IInvoiceBillingInfo {
  invoiceItems: (ItemFields & { totalPrice: number })[];
  userUid: string;
  status: InvoiceStatus;
  createdAt: Date;
}
