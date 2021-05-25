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
  useColorMode,
  Text,
} from '@chakra-ui/react';
import { signUpYupSchema } from 'components';

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
  const { colorMode } = useColorMode();

  const onSubmit = (data: ISignUpFormData) => console.log(data);

  return (
    <Box
      w="100%"
      maxW="420px"
      borderRadius="0.5rem"
      p={10}
      backgroundColor={colorMode === 'dark' ? 'invoice.spaceCadet' : 'white'}
      textAlign="center"
    >
      <Text as="h2" textStyle="h2" color={colorMode === 'dark' ? 'white' : 'invoice.richBlack'} mb={6}>
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
