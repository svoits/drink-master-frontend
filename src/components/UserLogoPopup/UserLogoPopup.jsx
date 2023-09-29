import { FiEdit2 } from 'react-icons/fi';
import { EditProfile, LogoutBtn, Wrapper } from './UserLogoPopup.styled';

import { useState } from 'react';

import UserInfoModal from '../UserInfoModal/UserInfoModal';
import LogoutModal from '../LogoutModal/LogoutModal';

export default function UserLogoPopup({ isPopupOpen, handleTogglePopup }) {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleToggleUserModal = () => {
    setIsUserInfoModalOpen((state) => !state);
    handleTogglePopup();
  };

  const handleToggleLogoutModal = () => {
    setIsLogoutModalOpen((state) => !state);
    handleTogglePopup();
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
    </>
  );
}
