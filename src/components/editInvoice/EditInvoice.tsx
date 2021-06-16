import React, { FC, useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FormSlideInContainer, InvoiceForm } from 'components';
import { InvoiceFormMode, InvoiceBillingInfo, InvoiceItem, InvoiceFromFirestore } from 'models';
import { useUpdateInvoice } from 'mutations';
import { errorToast, successToast } from 'helpers';

interface IEditInvoiceProps {
  data: InvoiceFromFirestore;
}

export const EditInvoice: FC<IEditInvoiceProps> = ({ data }) => {
  const [showEditInvoiceForm, setShowEditInvoiceForm] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { t } = useTranslation(['Common', 'InvoiceForm']);
  const toast = useToast();

  const { invoiceItems, ...rest } = data;

  const { mutateAsync: edit } = useUpdateInvoice();

  const handleEdit = async (billingInfo: InvoiceBillingInfo, invoiceItems: InvoiceItem[]) => {
    setIsSubmitting(true);
    await edit({
      invoice: {
        ...rest,
        ...billingInfo,
        invoiceItems,
      },
      documentId: rest.id,
    })
      .then(() => {
        setShowEditInvoiceForm(false);
        toast(successToast(t('InvoiceForm:INVOICE_EDITED_SUCCESSFULLY')));
      })
      .catch(() => toast(errorToast(t('InvoiceForm:ERROR_EDITING_INVOICE'))))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setShowEditInvoiceForm(true)}>
        {t('Common:EDIT')}
      </Button>
      <FormSlideInContainer showContent={showEditInvoiceForm} onClose={() => setShowEditInvoiceForm(false)}>
        <InvoiceForm
          id={rest.id}
          mode={InvoiceFormMode.Edit}
          status={rest.status}
          onCancel={() => setShowEditInvoiceForm(false)}
          onSave={handleEdit}
          isSubmitting={isSubmitting}
          invoiceItems={invoiceItems}
          defaultValues={rest}
        />
      </FormSlideInContainer>
    </>
  );
};
