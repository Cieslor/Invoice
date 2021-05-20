export const Input = {
  baseStyle: {
    borderRadius: '0.25rem',
  },
  sizes: {
    md: {
      field: {
        px: '1.25rem',
        py: '1rem',
        h: 'auto',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: '1.25em',
        letterSpacing: '-0.25px',
      },
    },
  },
  variants: {
    outline: ({ colorMode }: { colorMode: string }) => ({
      field: {
        bg: colorMode === 'dark' ? 'invoice.spaceCadet' : 'white',
        borderWidth: '1px',
        borderColor: colorMode === 'dark' ? 'invoice.ebonyClay' : 'invoice.lavenderWeb',
        color: colorMode === 'dark' ? 'white' : 'invoice.richBlack',
        _focus: {
          borderColor: colorMode === 'dark' ? 'invoice.ebonyClay' : 'invoice.mediumPurple',
        },
        _invalid: {
          borderColor: 'invoice.redSalsa',
        },
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
