import { TFunction } from 'i18next';
import * as Yup from 'yup';

export const buildYupLocale = (_: unknown, t: TFunction) => {
  Yup.setLocale({
    mixed: {
      required: t('Validation:REQUIRED'),
    },
    string: {
      email: t('Validation:EMAIL'),
    },
  });
};

export const yup = Yup;
