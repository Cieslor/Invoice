import React, { FC } from 'react';
import { Flex, Button, useToast, useDisclosure, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { InvoiceStatus, InvoiceFromFirestore } from 'models';
import { useDeleteInvoice, useMarkAsPaid } from 'mutations';
import { successToast, errorToast } from 'helpers';
import { DeletionModal, EditInvoice } from 'components';

interface IInvoiceDetailsActionsProps {
  id: string;
  data: InvoiceFromFirestore;
}

export const InvoiceDetailsActions: FC<IInvoiceDetailsActionsProps> = ({ id, data }) => {
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
    <Flex w="100%" flexWrap="nowrap" justifyContent="flex-end">
      {data.status !== InvoiceStatus.Paid && (
        <Box mr={4} minW="60px">
          <EditInvoice data={data} />
        </Box>
      )}
      <Button id="delete-invoice-button" variant="action-red" onClick={onOpen} mr={4}>
        {t('DELETE')}
      </Button>
      {data.status === InvoiceStatus.Pending && (
        <Button id="mark-as-paid-invoice-button" variant="primary" onClick={handleMarkAsPaid}>
          {t('MARK_AS_PAID')}
        </Button>
      )}
      <DeletionModal id={id} onDelete={handleInvoiceDelete} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
