import React, { FC } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface IDeletionModalProps {
  id: string;
  onDelete: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export const DeletionModal: FC<IDeletionModalProps> = ({ id, onDelete, onClose, isOpen }) => {
  const { t } = useTranslation('InvoiceDetails');

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
      <ModalOverlay />
      <ModalContent
        p={8}
        bg={useColorModeValue('white', 'invoice.spaceCadet')}
        borderRadius="0.5rem"
        boxShadow="0px 10px 10px -10px rgba(72, 84, 159, 0.100397)"
      >
        <ModalHeader p={0} mb={4}>
          <Text textStyle="h2">{t('CONFIRM_DELETION')}</Text>
        </ModalHeader>
        <Text textStyle="body_1" lineHeight="22px" color="invoice.coolGrey" mb={4}>
          {t('DELETION_DIALOG', { id })}
        </Text>
        <ModalFooter p={0}>
          <Button variant="secondary" onClick={onClose} mr={2}>
            {t('CANCEL')}
          </Button>
          <Button
            variant="action-red"
            onClick={() => {
              onClose();
              onDelete();
            }}
          >
            {t('DELETE')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
