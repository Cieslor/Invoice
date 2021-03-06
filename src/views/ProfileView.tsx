import React, { FC, useState } from 'react';
import { Box, Text, VStack, Flex, Button, Icon, useToast } from '@chakra-ui/react';
import { RiSaveFill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { currentUser } from 'state';
import { AvatarPicker } from 'components';
import { uploadAvatar, updatePhotoUrl, storage, auth } from 'firebaseAPI';
import { errorToast } from 'helpers';

export const ProfileView: FC = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [user, setUser] = useRecoilState(currentUser);
  const { t } = useTranslation('Profile');
  const history = useHistory();
  const toast = useToast();

  const onAvatarChange = (file: File | null) => setAvatar(file);

  const handleSavingError = () => toast(errorToast(t('AVATAR_UPLOAD_ERROR')));

  const saveChanges = async () => {
    setIsSaving(true);
    await uploadAvatar(avatar as File).on('state_changed', undefined, handleSavingError, () => {
      storage
        .ref('avatars')
        .child(avatar!.name)
        .getDownloadURL()
        .then((url) => updatePhotoUrl(url))
        .then(() => {
          const currentUser = auth.currentUser;
          setUser({
            email: currentUser?.email ?? '',
            photoURL: currentUser?.photoURL ?? '',
            uid: currentUser?.uid ?? '',
          });
          history.push('/');
        })
        .catch(() => toast(errorToast(t('AVATAR_UPLOAD_ERROR'))))
        .finally(() => setIsSaving(false));
    });
  };

  return (
    <Box w="100%" maxW="730px" mx={[6, 12, '120px']}>
      <Helmet>
        <title>{t('TITLE')}</title>
      </Helmet>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text as="h2" textStyle="h1" mb={2}>
            {t('PROFILE')}
          </Text>
          <Text textStyle="body_1" color="invoice.coolGrey">
            {user?.email ?? ''}
          </Text>
        </Box>
        {!!avatar && (
          <Button
            variant="primary-with-icon"
            isLoading={isSaving}
            onClick={saveChanges}
            leftIcon={
              <Flex w={8} h={8} justifyContent="center" alignItems="center" bg="white" borderRadius="50%">
                <Icon as={RiSaveFill} w={4} h={4} color="invoice.mediumPurple" />
              </Flex>
            }
          >
            {t('SAVE')}
          </Button>
        )}
      </Flex>
      <VStack spacing={5} alignItems="flex-start" mt={[12, 16]}>
        <AvatarPicker onChange={onAvatarChange} />
      </VStack>
    </Box>
  );
};
