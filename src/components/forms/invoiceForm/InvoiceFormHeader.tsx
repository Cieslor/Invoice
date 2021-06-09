import React, { FC } from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InvoiceFormMode } from 'models';

interface IInvoiceFormHeaderProps {
  mode: InvoiceFormMode;
}

export const InvoiceFormHeader: FC<IInvoiceFormHeaderProps> = ({ mode }) => {
  const { t } = useTranslation('InvoiceForm');
  return (
    <>
      {mode === InvoiceFormMode.New ? (
        <Text as="h2" textStyle="h2_bigger" mb={[6, 12]}>
          {t('NEW_INVOICE')}
        </Text>
      ) : (
        <Flex alignItems="center" mb={[6, 12]}>
          <Text as="h2" textStyle="h2_bigger">
            {t('EDIT')}
          </Text>
          <Box as="span" textStyle="h2_bigger" color="invoice.coolGrey">
            #
          </Box>
          <Text as="h2" textStyle="h2_bigger">
            123456
          </Text>
        </Flex>
      )}
    </>
  );
};
