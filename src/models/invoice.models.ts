export type InvoiceFormMode = 'New' | 'Edit';

export type InvoiceStatus = 'Pending' | 'Draft' | 'Paid' | 'None';

export enum InvoiceFormModeEnum {
  New = 'New',
  Edit = 'Edit',
}

export enum InvoiceStatusEnum {
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
