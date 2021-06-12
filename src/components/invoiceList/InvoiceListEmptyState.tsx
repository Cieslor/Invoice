import React, { FC } from 'react';
import { Flex, Text, useColorModeValue, Image } from '@chakra-ui/react';
import { useTranslation, Trans } from 'react-i18next';
import EmptyStateIllustration from 'assets/illustration-empty.svg';

export const InvoiceListEmptyState: FC = () => {
  const { t } = useTranslation('InvoiceList');

  return (
    <Flex h="80%" justifyContent="center" alignItems="center" flexDirection="column">
      <Image src={EmptyStateIllustration} mb={16} />
      <Text textStyle="h2" mb={6} color={useColorModeValue('invoice.richBlack', 'white')}>
        {t('THERE_IS_NOTHING')}
      </Text>
      <Text textStyle="body_1" maxW="220px" color={useColorModeValue('invoice.coolGrey', 'invoice.lavenderWeb')}>
        <Trans t={t} i18nKey="CREATE_A_NEW_INVOICE">
          Create a new invoice by clicking the <strong>New Invoice</strong> button and get started
        </Trans>
      </Text>
    </Flex>
  );
};
