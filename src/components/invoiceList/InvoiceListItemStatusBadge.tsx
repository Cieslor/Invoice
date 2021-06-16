import React, { FC } from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InvoiceStatus } from 'models';

interface IInvoiceListItemStatusBadgeProps {
  status: InvoiceStatus;
}

export const InvoiceListItemStatusBadge: FC<IInvoiceListItemStatusBadgeProps> = ({ status }) => {
  const { t } = useTranslation('InvoiceList');

  const draftBgColor = useColorModeValue('statusBadges.draft.bg', 'statusBadges.draft.darkBg');
  const draftTextColor = useColorModeValue('statusBadges.draft.text', 'statusBadges.draft.darkText');

  let statusText = '';
  let bgColor = '';
  let textColor = '';

  switch (status) {
    case InvoiceStatus.Pending:
      statusText = t('PENDING');
      bgColor = 'statusBadges.pending.bg';
      textColor = 'statusBadges.pending.text';
      break;
    case InvoiceStatus.Paid:
      statusText = t('PAID');
      bgColor = 'statusBadges.paid.bg';
      textColor = 'statusBadges.paid.text';
      break;
    case InvoiceStatus.Draft:
      statusText = t('DRAFT');
      bgColor = draftBgColor;
      textColor = draftTextColor;
      break;
  }

  return (
    <Box px={4} py={3} w="100px" borderRadius="6px" bg={bgColor}>
      <Text textStyle="h4" w="100%" color={textColor} display="inline-block" textAlign="center" whiteSpace="nowrap">
        <Box as="span" display="inline-block" w="8px" h="8px" mr={2} bg={textColor} borderRadius="50%" />
        {statusText}
      </Text>
    </Box>
  );
};
