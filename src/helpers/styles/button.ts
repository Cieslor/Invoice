export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '1.5rem',
  },
  sizes: {
    md: {
      px: ['1rem', '1.5rem'],
      py: '1rem',
      h: 'max-content',
      fontSize: '0.75rem',
      lineHeight: '1.25em',
      letterSpacing: '-0.25px',
    },
    long: {
      px: '1.5rem',
      py: '1rem',
      h: 'max-content',
      w: '100%',
      fontSize: '0.75rem',
      lineHeight: '1.25em',
      letterSpacing: '-0.25px',
    },
  },
  variants: {
    primary: {
      bg: 'invoice.mediumSlateBlue',
      color: 'white',
      _hover: {
        bg: 'invoice.mediumPurple',
      },
    },
    'primary-with-icon': {
      pr: '1rem',
      pl: '0.5rem !important',
      py: '0.5rem',
      bg: 'invoice.mediumSlateBlue',
      color: 'white',
      _hover: {
        bg: 'invoice.mediumPurple',
      },
    },
    secondary: ({ colorMode }: { colorMode: string }) => ({
      bg: colorMode === 'dark' ? 'invoice.ebonyClay' : 'invoice.selago',
      color: colorMode === 'dark' ? 'invoice.lavenderWeb' : 'invoice.glaucous',
      _hover: {
        bg: colorMode === 'dark' ? 'white' : 'invoice.lavenderWeb',
      },
    }),
    action: ({ colorMode }: { colorMode: string }) => ({
      bg: 'invoice.oxfordBlue',
      color: colorMode === 'dark' ? 'invoice.lavenderWeb' : 'invoice.coolGrey',
      _hover: {
        bg: colorMode === 'dark' ? 'invoice.spaceCadet' : 'invoice.richBlack',
      },
    }),
    'action-red': {
      bg: 'invoice.redSalsa',
      color: 'white',
      _hover: {
        bg: 'invoice.lightCoral',
      },
    },
    'action-light': {
      bg: 'invoice.selago',
      color: 'invoice.glaucous',
      _hover: {
        bg: 'invoice.lavenderWeb',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
