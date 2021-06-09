import { atom } from 'recoil';
import { ItemFields } from 'models';

export const invoiceItems = atom<ItemFields[]>({
  key: 'InvoiceItems',
  default: [],
});

export const showItemValidationErrors = atom({
  key: 'showItemValidationErrors',
  default: false,
});
