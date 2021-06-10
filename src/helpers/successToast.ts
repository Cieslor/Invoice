import { ToastPosition } from '@chakra-ui/react';

interface SuccessToastReturnType {
  title: string | undefined;
  description: string | undefined;
  status: 'success';
  duration: number;
  isClosable: boolean;
  position: ToastPosition;
}

export const successToast = (description?: string, title?: string): SuccessToastReturnType => ({
  title: title,
  description: description,
  status: 'success',
  duration: 3000,
  isClosable: true,
  position: 'top-right',
});
