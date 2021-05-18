import React from "react";
import { useColorMode, Button, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Button onClick={toggleColorMode}>{colorMode}</Button>
      <Text mt={5}>{t("INVOICES")}</Text>
    </Flex>
  );
};

export default App;
