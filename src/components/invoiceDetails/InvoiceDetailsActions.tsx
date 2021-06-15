import React, { FC } from 'react';
import { Wrap, Button, useToast, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { InvoiceStatus } from 'models';
import { useDeleteInvoice, useMarkAsPaid } from 'mutations';
import { successToast, errorToast } from 'helpers';
import { DeletionModal } from 'components';

interface IInvoiceDetailsActionsProps {
  id: string;
  status: InvoiceStatus;
}

export const InvoiceDetailsActions: FC<IInvoiceDetailsActionsProps> = ({ id, status }) => {
  const { t } = useTranslation('InvoiceDetails');
  const { mutateAsync: deleteInvoice } = useDeleteInvoice();
  const { mutateAsync: markAsPaid } = useMarkAsPaid();
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleInvoiceDelete = async () => {
    await deleteInvoice(id)
      .then(() => {
        history.replace('/');
        toast(successToast(t('DELETE_SUCCESS')));
      })
      .catch(() => toast(errorToast(t('DELETE_ERROR'))));
  };

  const handleMarkAsPaid = async () => {
    await markAsPaid(id)
      .then(() => {
        toast(successToast(t('MARK_AS_PAID_SUCCESS')));
      })
      .catch(() => toast(errorToast(t('MARK_AS_PAID_ERROR'))));
  };

  return (
    <Wrap w="100%" spacing={4} sx={{ '& > ul': { flexWrap: 'nowrap', justifyContent: 'flex-end' } }}>
      <Button variant="secondary">{t('EDIT')}</Button>
      <Button id="delete-invoice-button" variant="action-red" onClick={onOpen}>
        {t('DELETE')}
      </Button>
      {status === InvoiceStatus.Pending && (
        <Button id="mark-as-paid-invoice-button" variant="primary" onClick={handleMarkAsPaid}>
          {t('MARK_AS_PAID')}
        </Button>
      )}
      <DeletionModal id={id} onDelete={handleInvoiceDelete} isOpen={isOpen} onClose={onClose} />
    </Wrap>
  );
};
