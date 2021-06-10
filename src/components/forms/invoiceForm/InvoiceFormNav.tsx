import React, { FC } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InvoiceStatus } from 'models';

interface IInvoiceFormNavProps {
  status: InvoiceStatus;
  onCancel: () => void;
  onSave: () => void;
  onDraftSave: () => void;
}

export const InvoiceFormNav: FC<IInvoiceFormNavProps> = ({ status, onCancel, onSave, onDraftSave }) => {
  const { t } = useTranslation('InvoiceForm');
  const isNew = status === InvoiceStatus.None;
  const isPending = status === InvoiceStatus.Pending;
  const isDraft = status === InvoiceStatus.Draft;

  return (
    <Flex justifyContent={isNew || isDraft ? 'space-between' : 'flex-end'}>
      <Button variant={isPending ? 'secondary' : 'action-light'} onClick={onCancel}>
        {isNew ? t('DISCARD') : t('CANCEL')}
      </Button>
      <Flex ml={2}>
        {(isNew || isDraft) && (
          <Button variant="action" onClick={onDraftSave}>
            {isNew ? t('SAVE_AS_DRAFT') : t('SAVE_CHANGES')}
          </Button>
        )}
        <Button variant="primary" ml={2} onClick={onSave}>
          {isPending ? t('SAVE_CHANGES') : t('SAVE_AND_SEND')}
        </Button>
      </Flex>
    </Flex>
  );
};
