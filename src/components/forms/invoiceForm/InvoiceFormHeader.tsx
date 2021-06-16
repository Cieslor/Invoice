import React, { FC } from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { InvoiceFormMode } from 'models';

interface IInvoiceFormHeaderProps {
  mode: InvoiceFormMode;
  id?: string;
}

export const InvoiceFormHeader: FC<IInvoiceFormHeaderProps> = ({ mode, id }) => {
  const { t } = useTranslation('InvoiceForm');
  return (
    <>
      {mode === InvoiceFormMode.New ? (
        <>
          <Helmet>
            <title>{t('TITLE_NEW')}</title>
          </Helmet>
          <Text as="h2" textStyle="h2_bigger" mb={[6, 12]}>
            {t('NEW_INVOICE')}
          </Text>
        </>
      ) : (
        <Flex alignItems="center" mb={[6, 12]}>
          <Helmet>
            <title>{t('TITLE_EDIT', { id })}</title>
          </Helmet>
          <Text as="h2" textStyle="h2_bigger" mr={2}>
            {t('EDIT')}
          </Text>
          <Box as="span" textStyle="h2_bigger" color="invoice.coolGrey">
            #
          </Box>
          <Text as="h2" textStyle="h2_bigger" textTransform="uppercase" isTruncated>
            {id}
          </Text>
        </Flex>
      )}
    </>
  );
};
