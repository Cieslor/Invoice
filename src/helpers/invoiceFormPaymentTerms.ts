import { TFunction } from 'i18next';

export const invoiceFormPaymentTerms = (t: TFunction) => [
  { value: 1, label: t('InvoiceForm:DAYS_WITH_COUNT', { count: 1 }) },
  { value: 7, label: t('InvoiceForm:DAYS_WITH_COUNT', { count: 7 }) },
  { value: 14, label: t('InvoiceForm:DAYS_WITH_COUNT', { count: 14 }) },
  { value: 30, label: t('InvoiceForm:DAYS_WITH_COUNT', { count: 30 }) },
];
