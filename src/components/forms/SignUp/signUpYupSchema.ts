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
