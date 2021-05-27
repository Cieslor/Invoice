import { yup } from 'i18n';

export const signInYupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
