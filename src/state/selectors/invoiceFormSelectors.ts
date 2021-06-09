import { invoiceItems } from 'state';
import { selector } from 'recoil';
import { validateItemName, validateQuantity, validatePrice } from 'helpers';

export const invoiceItemsAfterValidation = selector({
  key: 'InvoiceItemsAfterValidation',
  get: ({ get }) => {
    const items = get(invoiceItems);

    return items.map((invoiceItem) => {
      const { itemName, quantity, price } = invoiceItem;

      return {
        fields: { itemName, quantity, price, totalPrice: quantity * price },
        validation: {
          itemName: validateItemName(itemName),
          quantity: validateQuantity(quantity),
          price: validatePrice(price),
        },
      };
    });
  },
});

export const areInvoiceItemsValid = selector({
  key: 'areInvoiceItemsValid',
  get: ({ get }) => {
    const items = get(invoiceItemsAfterValidation);

    return items.every(
      ({ validation: { itemName, quantity, price } }) => itemName.isValid && quantity.isValid && price.isValid
    );
  },
});
