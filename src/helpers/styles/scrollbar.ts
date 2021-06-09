export const scrollbar = {
  // firefox
  scrollbarColor: '#252945 #888EB0',
  scrollbarWidth: 'thin',
  // webkit
  '&::-webkit-scrollbar-track': {
    WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.1)',
    backgroundColor: 'invoice.coolGrey',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar': {
    width: '8px',
    backgroundColor: 'invoice.coolGrey',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: 'invoice.ebonyClay',
  },
};

export const transparentBgScrollbar = (color: string) => ({
  // firefox
  scrollbarColor: `${color} transparent`,
  scrollbarWidth: 'thin',
  // webkit
  '&::-webkit-scrollbar-track': {
    WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.1)',
    backgroundColor: 'transparent',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar': {
    width: '8px',
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: color,
  },
});
