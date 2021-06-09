export enum ValidationMessage {
  REQUIRED,
  GREATER_THAN_OR_EQUAL,
}

type Validation = {
  isValid: boolean;
  validationErrorMessage: ValidationMessage | '';
};

export type ItemFields = {
  itemName: string;
  quantity: number;
  price: number;
};

export interface InvoiceItem {
  fields: ItemFields & { totalPrice: number };
  validation: {
    itemName: Validation;
    quantity: Validation;
    price: Validation;
  };
}
