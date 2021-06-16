import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { SignIn, ColorModeSwitcher, Logo } from 'components';

export const SignInView: FC = () => {
  const { t } = useTranslation('SignIn');
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Helmet>
        <title>{t('TITLE')}</title>
      </Helmet>
      <Flex position="absolute" top="0" left="0" w="100%" justifyContent="space-between" p={5}>
        <Logo />
        <ColorModeSwitcher />
      </Flex>
      <SignIn />
    </Flex>
  );
};
