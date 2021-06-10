import { ValidationMessage } from 'models';

type ValidationMethodReturnType = { isValid: boolean; validationErrorMessage: ValidationMessage | '' };

export const validateItemName = (itemName: string): ValidationMethodReturnType => {
  return itemName === ''
    ? {
        isValid: false,
        validationErrorMessage: ValidationMessage.REQUIRED,
      }
    : { isValid: true, validationErrorMessage: '' };
};

export const validateQuantity = (quantity: number): ValidationMethodReturnType => {
  return quantity === undefined
    ? {
        isValid: false,
        validationErrorMessage: ValidationMessage.REQUIRED,
      }
    : quantity < 1
    ? {
        isValid: false,
        validationErrorMessage: ValidationMessage.GREATER_THAN_OR_EQUAL,
      }
    : { isValid: true, validationErrorMessage: '' };
};

export const validatePrice = (price: number): ValidationMethodReturnType => {
  return price === undefined
    ? {
        isValid: false,
        validationErrorMessage: ValidationMessage.REQUIRED,
      }
    : price < 0.01
    ? {
        isValid: false,
        validationErrorMessage: ValidationMessage.GREATER_THAN_OR_EQUAL,
      }
    : { isValid: true, validationErrorMessage: '' };
};
