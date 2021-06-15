import React, { FC } from 'react';
import { Wrap, Button, useToast, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { InvoiceStatus } from 'models';
import { useDeleteInvoice } from 'mutations';
import { successToast, errorToast } from 'helpers';
import { DeletionModal } from 'components';

interface IInvoiceDetailsActionsProps {
  id: string;
  status: InvoiceStatus;
}

export const InvoiceDetailsActions: FC<IInvoiceDetailsActionsProps> = ({ id, status }) => {
  const { t } = useTranslation('InvoiceDetails');
  const { mutateAsync: deleteInvoice } = useDeleteInvoice();
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

  console.log(id, status);
  return (
    <Wrap w="100%" spacing={4} sx={{ '& > ul': { flexWrap: 'nowrap' } }}>
      <Button variant="secondary">{t('EDIT')}</Button>
      <Button id="delete-invoice-button" variant="action-red" onClick={onOpen}>
        {t('DELETE')}
      </Button>
      {status === InvoiceStatus.Pending && (
        <Button id="mark-as-paid-invoice-button" variant="primary">
          {t('MARK_AS_PAID')}
        </Button>
      )}
      <DeletionModal id={id} onDelete={handleInvoiceDelete} isOpen={isOpen} onClose={onClose} />
    </Wrap>
  );
};
