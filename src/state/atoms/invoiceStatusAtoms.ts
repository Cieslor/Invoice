import { atom } from 'recoil';
import { InvoiceStatus } from 'models';

export const selectedStatusFilters = atom({
  key: 'selectedStatusFilters',
  default: [] as InvoiceStatus[],
});
