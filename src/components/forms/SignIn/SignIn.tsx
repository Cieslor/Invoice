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
import { signInYupSchema } from 'components';
import { signIn } from 'firebaseAPI';
import { SignInAndUpResponse } from 'models';
import { currentUser } from 'state';

interface ISignInFormData {
  email: string;
  password: string;
}

export const SignIn: FC = () => {
  const { t } = useTranslation('SignIn');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignInFormData>({
    resolver: yupResolver(signInYupSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const history = useHistory();

  const setCurrentUser = useSetRecoilState(currentUser);

  const onSubmit = async (data: ISignInFormData) => {
    const { email, password } = data;
    await signIn(email, password)
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
        {t('SIGN_IN')}
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
