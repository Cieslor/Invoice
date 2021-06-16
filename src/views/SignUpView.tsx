import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { SignUp, ColorModeSwitcher, Logo } from 'components';

export const SignUpView: FC = () => {
  const { t } = useTranslation('SignUp');
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Helmet>
        <title>{t('TITLE')}</title>
      </Helmet>
      <Flex position="absolute" top="0" left="0" w="100%" p={5} justifyContent="space-between">
        <Logo />
        <ColorModeSwitcher />
      </Flex>
      <SignUp />
    </Flex>
  );
};
