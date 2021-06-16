import React, { FC, useState } from 'react';
import { useTranslation, TFuncKey } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Flex,
  useColorModeValue,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ErrorAlert } from 'components';
import { signInYupSchema } from 'helpers';
import { useSignIn } from 'mutations';

interface ISignInFormData {
  email: string;
  password: string;
}

export const SignIn: FC = () => {
  const { t } = useTranslation('SignIn');

  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignInFormData>({
    resolver: yupResolver(signInYupSchema()),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const clearError = () => setError('');

  const { mutateAsync: signIn } = useSignIn();

  const onSubmit = async (data: ISignInFormData) => {
    const { email, password } = data;
    await signIn({ email, password }).catch((error: { code: string; message: string }) => setError(error.code));
  };

  return (
    <Box
      w="100%"
      maxW="420px"
      borderRadius="0.5rem"
      p={10}
      m={5}
      backgroundColor={useColorModeValue('white', 'invoice.ebonyClay')}
      boxShadow="0px 10px 10px -10px rgba(72, 84, 159, 0.100397)"
      textAlign="center"
    >
      <Text as="h2" textStyle="h2" color={useColorModeValue('invoice.richBlack', 'white')} mb={6}>
        {t('SIGN_IN')}
      </Text>
      {error && (
        <Box mb={6}>
          <ErrorAlert>{t([`ERROR.${error}` as TFuncKey<'SignIn'>, 'ERROR.GENERIC'])}</ErrorAlert>
        </Box>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5}>
          <FormControl id="email" isInvalid={!!errors.email?.message} onChange={clearError}>
            <Flex justifyContent="space-between">
              <FormLabel>{t('EMAIL')}</FormLabel>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </Flex>
            <Input {...register('email')} />
          </FormControl>
          <FormControl id="password" isInvalid={!!errors.password?.message} onChange={clearError}>
            <Flex justifyContent="space-between">
              <FormLabel>{t('PASSWORD')}</FormLabel>
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            </Flex>
            <Input type="password" {...register('password')} />
          </FormControl>
          <Text textStyle="body_1">
            {t('DONT_HAVE_ACCOUNT')}
            <ChakraLink as={Link} to="/signup" ml={2} fontWeight="700">
              {t('SIGN_UP')}
            </ChakraLink>
          </Text>
          <Button type="submit" variant="primary" isLoading={isSubmitting}>
            {t('SIGN_IN')}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
