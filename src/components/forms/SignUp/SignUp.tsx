import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
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
} from '@chakra-ui/react';
import { signUpYupSchema } from 'components';
import { createUser } from 'firebaseAPI';

interface ISignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUp: FC = () => {
  const { t } = useTranslation('SignUp');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormData>({
    resolver: yupResolver(signUpYupSchema(t)),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = async (data: ISignUpFormData) => {
    const { email, password } = data;
    console.log(email, password);
    await createUser(email, password).catch((error) => console.log(error));
  };

  return (
    <Box
      w="100%"
      maxW="420px"
      borderRadius="0.5rem"
      p={10}
      backgroundColor={useColorModeValue('white', 'invoice.spaceCadet')}
      textAlign="center"
    >
      <Text as="h2" textStyle="h2" color={useColorModeValue('invoice.richBlack', 'white')} mb={6}>
        {t('CREATE_ACCOUNT')}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5}>
          <FormControl id="email" isInvalid={!!errors.email?.message}>
            <Flex justifyContent="space-between">
              <FormLabel>{t('EMAIL')}</FormLabel>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </Flex>
            <Input {...register('email')} />
          </FormControl>
          <FormControl id="password" isInvalid={!!errors.password?.message}>
            <Flex justifyContent="space-between">
              <FormLabel>{t('PASSWORD')}</FormLabel>
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            </Flex>
            <Input type="password" {...register('password')} />
          </FormControl>
          <FormControl id="confirmPassword" isInvalid={!!errors.confirmPassword?.message}>
            <Flex justifyContent="space-between">
              <FormLabel>{t('CONFIRM_PASSWORD')}</FormLabel>
              <FormErrorMessage>{errors?.confirmPassword?.message}</FormErrorMessage>
            </Flex>
            <Input type="password" {...register('confirmPassword')} />
          </FormControl>
          <Button type="submit" variant="primary">
            {t('SIGNUP')}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
