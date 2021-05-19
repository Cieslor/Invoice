import { extendTheme, DeepPartial, ThemeConfig } from '@chakra-ui/react';
import { colors, fonts, textStyles } from 'helpers';

const config: DeepPartial<ThemeConfig> = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  textStyles,
});
