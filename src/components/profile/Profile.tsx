import React, { FC } from 'react';
import { Menu, Avatar, MenuButton, MenuList, useColorModeValue, MenuDivider } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { logOut } from 'firebaseAPI';
import { ProfileMenuItem } from 'components';
import { userPhotoUrl } from 'state';

export const Profile: FC = () => {
  const history = useHistory();

  const { t } = useTranslation('Profile');

  const userAvatarUrl = useRecoilValue(userPhotoUrl);

  const handleLogout = async () => {
    await logOut()
      .then(() => history.push('/signin'))
      .catch((error) => console.log(error));
  };
  return (
    <Menu autoSelect={false} placement="right-start">
      <MenuButton
        as={Avatar}
        src={userAvatarUrl ?? BsFillPersonFill}
        cursor="pointer"
        w={[7, 10, 12]}
        h={[7, 10, 12]}
        bg="invoice.mediumSlateBlue"
      />
      <MenuList
        minWidth="150px"
        bgColor={useColorModeValue('invoice.oxfordBlue', 'invoice.spaceCadet')}
        borderColor="whiteAlpha.300"
      >
        <ProfileMenuItem onClick={() => history.push('/profile')}>{t('PROFILE')}</ProfileMenuItem>
        <MenuDivider />
        <ProfileMenuItem onClick={handleLogout}>{t('LOG_OUT')}</ProfileMenuItem>
      </MenuList>
    </Menu>
  );
};
