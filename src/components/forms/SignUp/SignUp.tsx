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
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useHistory, Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { signUpYupSchema } from 'components';
import { createUser } from 'firebaseAPI';
import { SignInAndUpResponse } from 'models';
import { currentUser } from 'state';

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
    formState: { errors, isSubmitting },
  } = useForm<ISignUpFormData>({
    resolver: yupResolver(signUpYupSchema(t)),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  });

  const history = useHistory();

  const setCurrentUser = useSetRecoilState(currentUser);

  const onSubmit = async (data: ISignUpFormData) => {
    const { email, password } = data;
    await createUser(email, password)
      .then((data: SignInAndUpResponse) => {
        setCurrentUser(data.user);
        history.push('/');
      })
      .catch((error) => console.log(error));
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
          <Text textStyle="body_1">
            {t('ALREADY_HAVE_ACCOUNT')}
            <ChakraLink as={Link} to="/signin" ml={2} fontWeight="700">
              {t('SIGN_IN')}
            </ChakraLink>
          </Text>
          <Button type="submit" variant="primary" isLoading={isSubmitting}>
            {t('SIGNUP')}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
