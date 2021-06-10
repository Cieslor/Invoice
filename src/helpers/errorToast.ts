import { ToastPosition } from '@chakra-ui/react';

interface ErrorToastReturnType {
  title: string | undefined;
  description: string | undefined;
  status: 'error';
  duration: number;
  isClosable: boolean;
  position: ToastPosition;
}

export const errorToast = (description?: string, title?: string): ErrorToastReturnType => ({
  title: title,
  description: description,
  status: 'error',
  duration: 3000,
  isClosable: true,
  position: 'top-right',
});
