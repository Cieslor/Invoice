export const customSelectStyles = (
  colorMode: string,
  colors: { [key: string]: string },
  isInvalid: boolean = false
) => ({
  container: (provided: { [key: string]: string }) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: { [key: string]: string }) => ({
    ...provided,
    backgroundColor: colorMode === 'dark' ? colors.spaceCadet : 'white',
    borderRadius: '0.25rem',
    borderWidth: '1px',
    borderColor: isInvalid
      ? `${colors.redSalsa} !important`
      : colorMode === 'dark'
      ? colors.ebonyClay
      : colors.lawenderWeb,
    cursor: 'pointer',
    '&:hover': {
      borderColor: colorMode === 'dark' ? colors.ebonyClay : colors.mediumPurple,
    },
    '&:focus': {
      borderColor: colorMode === 'dark' ? colors.ebonyClay : colors.mediumPurple,
    },
  }),
  valueContainer: (provided: { [key: string]: string }) => ({
    ...provided,
    padding: '1rem 1.25rem',
    margin: '1px 0',
    fontSize: '0.75rem',
    lineHeight: '1.25em',
    letterSpacing: '-0.25px',
  }),
  singleValue: (provided: { [key: string]: string }) => ({
    ...provided,
    fontWeight: 700,
    margin: 0,
    color: colorMode === 'dark' ? 'white' : colors.richBlack,
  }),
  input: () => ({
    padding: 0,
    '& input': {
      width: 0,
    },
  }),
  placeholder: (provided: { [key: string]: string }) => ({
    ...provided,
    color: colorMode === 'dark' ? 'white' : colors.richBlack,
    fontWeight: 700,
    opacity: colorMode === 'dark' ? 1 : 0.4,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided: { [key: string]: string }) => ({
    ...provided,
    color: isInvalid ? `${colors.redSalsa} !important` : colors.mediumSlateBlue,
    '&:hover': {
      color: colors.mediumSlateBlue,
    },
  }),
  menu: (provided: { [key: string]: string }) => ({
    ...provided,
    backgroundColor: colorMode === 'dark' ? colors.ebonyClay : 'white',
    borderRadius: '0.5rem',
    boxShadow: colorMode === 'dark' ? '0px 10px 20px rgba(0, 0, 0, 0.25)' : '0px 10px 20px rgba(72, 84, 159, 0.25)',
    overflow: 'hidden',
  }),
  menuList: (provided: { [key: string]: string }) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided: { [key: string]: string }, state: { isSelected: boolean }) => ({
    ...provided,
    padding: '1rem 1.25rem',
    color:
      colorMode === 'dark'
        ? state.isSelected
          ? colors.mediumPurple
          : colors.lawenderWeb
        : state.isSelected
        ? colors.mediumSlateBlue
        : colors.richBlack,
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: '1.25em',
    letterSpacing: '-0.25px',
    backgroundColor: colorMode === 'dark' ? colors.ebonyClay : 'white',
    cursor: 'pointer',
    '&:hover': {
      color: colorMode === 'dark' ? colors.mediumPurple : colors.mediumSlateBlue,
      backgroundColor: colorMode === 'dark' ? colors.ebonyClay : 'white',
    },
    '&:not(:last-child)': {
      borderBottom: `1px solid ${colorMode === 'dark' ? colors.spaceCadet : colors.lavenderWeb}`,
    },
  }),
});
