import { TFunction } from 'i18next';
enum PaymentTerms {
  Day1 = '1 day',
  Day7 = '7 days',
  Day14 = '14 days',
  Day30 = '30 days',
}
export const invoiceFormPaymentTerms = (t: TFunction) => [
  { value: PaymentTerms.Day1, label: t('InvoiceForm:DAYS_WITH_COUNT', { count: 1 }) },
  { value: PaymentTerms.Day7, label: t('InvoiceForm:DAYS_WITH_COUNT', { count: 7 }) },
  { value: PaymentTerms.Day14, label: t('InvoiceForm:DAYS_WITH_COUNT', { count: 14 }) },
  { value: PaymentTerms.Day30, label: t('InvoiceForm:DAYS_WITH_COUNT', { count: 30 }) },
];
