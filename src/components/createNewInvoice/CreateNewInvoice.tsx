import React, { FC, useState } from 'react';
import { Button, Icon, Text, Flex, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { HiPlusSm } from 'react-icons/hi';
import { useRecoilValue } from 'recoil';
import { currentUser } from 'state';
import { FormSlideInContainer, InvoiceForm } from 'components';
import { InvoiceFormMode, InvoiceBillingInfo, InvoiceItem, InvoiceStatus } from 'models';
import { useCreateInvoice } from 'mutations';
import { errorToast, successToast } from 'helpers';

export const CreateNewInvoice: FC = () => {
  const [showNewInvoiceForm, setShowNewInvoiceForm] = useState<boolean>(false);
  const { t } = useTranslation(['Common', 'InvoiceForm']);
  const toast = useToast();
  const user = useRecoilValue(currentUser);

  const { mutateAsync: createNew } = useCreateInvoice();

  const onSaveAndSend = async (billingInfo: InvoiceBillingInfo, invoiceItems: InvoiceItem[]) => {
    await createNew({
      ...billingInfo,
      invoiceItems,
      userUid: user?.uid ?? '',
      createdAt: new Date(),
      status: InvoiceStatus.Pending,
    })
      .then(() => {
        setShowNewInvoiceForm(false);
        toast(successToast(t('InvoiceForm:INVOICE_SEND_SUCCESSFULLY')));
      })
      .catch(() => toast(errorToast(t('InvoiceForm:ERROR_SENDING_INVOICE'))));
  };

  const onSaveAsDraft = async (billingInfo: InvoiceBillingInfo, invoiceItems: InvoiceItem[]) => {
    await createNew({
      ...billingInfo,
      invoiceItems,
      userUid: user?.uid ?? '',
      createdAt: new Date(),
      status: InvoiceStatus.Draft,
    })
      .then(() => {
        setShowNewInvoiceForm(false);
        toast(successToast(t('InvoiceForm:INVOICE_SEND_SUCCESSFULLY')));
      })
      .catch(() => toast(errorToast(t('InvoiceForm:ERROR_SENDING_INVOICE'))));
  };

  return (
    <>
      <Button
        variant="primary-with-icon"
        leftIcon={
          <Flex w={8} h={8} justifyContent="center" alignItems="center" bg="white" borderRadius="50%">
            <Icon as={HiPlusSm} color="invoice.mediumSlateBlue" w={5} h={5} />
          </Flex>
        }
        onClick={() => setShowNewInvoiceForm(true)}
      >
        <Text display={['none', 'block']}>{t('Common:NEW_INVOICE')}</Text>
        <Text display={['block', 'none']}>{t('Common:NEW')}</Text>
      </Button>
      <FormSlideInContainer showContent={showNewInvoiceForm} close={() => setShowNewInvoiceForm(false)}>
        <InvoiceForm
          mode={InvoiceFormMode.New}
          onCancel={() => setShowNewInvoiceForm(false)}
          onSave={onSaveAndSend}
          onDraftSave={onSaveAsDraft}
        />
      </FormSlideInContainer>
    </>
  );
};
