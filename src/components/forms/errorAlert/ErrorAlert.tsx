import React, { FC } from 'react';
import { Alert, AlertIcon, ScaleFade, Text } from '@chakra-ui/react';

export const ErrorAlert: FC = ({ children }) => {
  return (
    <ScaleFade initialScale={0.9} in>
      <Alert status="error" variant="solid" mb={6} borderRadius="0.25rem">
        <AlertIcon />
        <Text textStyle="body_1" textAlign="left">
          {children}
        </Text>
      </Alert>
    </ScaleFade>
  );
};
