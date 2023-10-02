import { FiEdit2 } from 'react-icons/fi';
import {
  Backdrop,
  EditProfile,
  LogoutBtn,
  Wrapper,
} from './UserLogoPopup.styled';

import { useState } from 'react';

import UserInfoModal from '../UserInfoModal/UserInfoModal';
import LogoutModal from '../LogoutModal/LogoutModal';

export default function UserLogoPopup({ isPopupOpen, handleClosePopup }) {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleToggleUserModal = () => {
    setIsUserInfoModalOpen((state) => !state);
    handleClosePopup();
  };

  const handleToggleLogoutModal = () => {
    setIsLogoutModalOpen((state) => !state);
    handleClosePopup();
  };

  return (
    <>
      <Wrapper ispopupopen={isPopupOpen.toString()}>
        <EditProfile onClick={handleToggleUserModal}>
          Edit profile <FiEdit2 size={14} />
        </EditProfile>
        <LogoutBtn onClick={handleToggleLogoutModal}>Log out</LogoutBtn>
      </Wrapper>

      <UserInfoModal
        isOpen={isUserInfoModalOpen}
        handleClose={handleToggleUserModal}
      />
      <LogoutModal
        isOpen={isLogoutModalOpen}
        handleClose={handleToggleLogoutModal}
      />
      <Backdrop
        ispopupopen={isPopupOpen.toString()}
        onClick={handleClosePopup}
      />
    </>
  );
}
