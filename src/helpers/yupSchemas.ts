import { yup } from 'i18n';
import { TFunction } from 'i18next';

export const signUpYupSchema = (t: TFunction) =>
  yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6).label(t('SignUp:PASSWORD')),
    confirmPassword: yup
      .string()
      .required()
      .test(
        'is-equal',
        t('Validation:ISEQUAL', { field: t('SignUp:CONFIRM_PASSWORD'), compared: t('SignUp:PASSWORD') }),
        (value, context) => value === context.parent.password
      ),
  });

export const signInYupSchema = () =>
  yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

export const invoiceBillingInfoYupSchema = () =>
  yup.object().shape({
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
    paymentTerms: yup.number().required(),
    projectDescription: yup.string().required(),
  });
