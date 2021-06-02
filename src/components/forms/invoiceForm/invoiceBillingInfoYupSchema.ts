import { yup } from 'i18n';

export const invoiceBillingInfoYupSchema = yup.object().shape({
  fromStreetAddress: yup.string().required(),
  fromCity: yup.string().required(),
  fromPostCode: yup.string().required(),
  fromCountry: yup.string().required(),
  toClientsName: yup.string().required(),
  toClientsEmail: yup.string().email().required(),
  toStreetAddress: yup.string().required(),
  toCity: yup.string().required(),
  toPostCode: yup.string().required(),
  toCountry: yup.string().required(),
  invoiceDate: yup.date().required(),
  paymentTerms: yup.string().required(),
  projectDescription: yup.string().required(),
});
