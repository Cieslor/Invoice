export const FormLabel = {
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    color: colorMode === 'dark' ? 'invoice.lavenderWeb' : 'invoice.glaucous',
    fontSize: '0.75rem',
    lineHeight: '1.25em',
    letterSpacing: '-0.25px',
    _invalid: {
      color: 'invoice.redSalsa',
    },
  }),
};
