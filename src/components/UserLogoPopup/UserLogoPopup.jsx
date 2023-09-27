import { FiEdit2 } from 'react-icons/fi';
import { EditProfile, LogoutBtn, Wrapper } from './UserLogoPopup.styled';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/auth/auth-operation';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import LogoutModal from '../LogoutModal/LogoutModal';

export default function UserLogoPopup({ isPopupOpen }) {
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleToggleUserModal = () => {
    setIsUserInfoModalOpen((state) => !state);
  };

  const handleToggleLogoutModal = () => {
    setIsLogoutModalOpen((state) => !state);
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
