import React, { FC } from 'react';
import { Flex, Text, Spinner } from '@chakra-ui/react';
import { ErrorAlert } from 'components';

interface IFileInputProps {
  loading: boolean;
  fileName: string;
  isError: boolean;
  errorText: string;
}

export const FileInput: FC<IFileInputProps> = ({ loading, fileName, isError, errorText }) => {
  return (
    <Flex alignItems="center" ml={5}>
      {loading && <Spinner color="invoice.mediumSlateBlue" size="xs" />}
      {fileName && !loading && <Text textStyle="body_1">{fileName}</Text>}
      {isError && !loading && <ErrorAlert>{errorText}</ErrorAlert>}
    </Flex>
  );
};
