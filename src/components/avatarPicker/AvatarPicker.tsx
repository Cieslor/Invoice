import React, { FC, useEffect } from 'react';
import { Flex, Avatar, Box, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiPlusSm } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
import { useRecoilValue } from 'recoil';
import { useFilePicker } from 'use-file-picker';
import { userPhotoUrl } from 'state';
import { FileInput } from 'components';

interface IAvatarPickerProps {
  onChange: (file: File | null) => void;
}

export const AvatarPicker: FC<IAvatarPickerProps> = ({ onChange }) => {
  const userAvatarUrl = useRecoilValue(userPhotoUrl);

  const [openFileSelector, { filesContent, loading, clear, errors, plainFiles }] = useFilePicker({
    accept: 'image/*',
    multiple: false,
    maxFileSize: 20,
    limitFilesConfig: { max: 1 },
    readAs: 'DataURL',
  });

  const { t } = useTranslation('Profile');

  useEffect(() => {
    if (!!plainFiles.length) {
      onChange(plainFiles[0]);
    } else {
      onChange(null);
    }
  }, [plainFiles]);

  return (
    <Box>
      <Text textStyle="h3" mb={4}>
        {t('AVATAR')}
      </Text>
      <Flex alignItems="center">
        <Box position="relative">
          <Avatar
            boxSize={['70px', '80px']}
            objectFit="cover"
            src={filesContent[0]?.content || userAvatarUrl}
            icon={<BsFillPersonFill fontSize="4rem" color="white" />}
            bg="invoice.mediumSlateBlue"
            borderRadius="0.5rem"
          />
          <Flex
            position="absolute"
            right="-5px"
            bottom="-5px"
            w="30px"
            h="30px"
            justifyContent="center"
            alignItems="center"
            bg={!!filesContent.length ? 'invoice.redSalsa' : 'invoice.mediumPurple'}
            borderRadius="50%"
            cursor="pointer"
            onClick={() => {
              if (!!filesContent.length) {
                clear();
              } else {
                openFileSelector();
              }
            }}
          >
            {!!filesContent.length ? (
              <Icon as={ImCross} color="white" w="10px" h="10px" />
            ) : (
              <Icon as={HiPlusSm} color="white" w={5} h={5} />
            )}
          </Flex>
        </Box>
        <FileInput
          loading={loading}
          fileName={filesContent[0]?.name}
          isError={!!errors.length}
          errorText={t('AVATAR_UPLOAD_ERROR')}
        />
      </Flex>
    </Box>
  );
};
