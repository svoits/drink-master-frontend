import { Formik } from 'formik';
import { HiPlusSm } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';

import Modal from '../Modal/Modal';
import {
  ChangeNameInput,
  Form,
  AddIconWrapper,
  Image,
  FileInputWrapper,
  SelectAvatarInput,
  SubmitBtn,
  NameInputWrapper,
  EditIconWrapper,
} from './UserInfoModal.styled';
import { useAuth } from '../../redux/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/auth/auth-operation';
import { toast } from 'react-toastify';
import { useResize } from '../../hooks/useResize';

export default function UserInfoModal({ isOpen, handleClose }) {
  const {
    user: { avatarURL, name },
  } = useAuth();
  const { width } = useResize();

  const [username, setUsername] = useState(name);
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSizeFile = 3145728;
    if (file.size > maxSizeFile) {
      toast.error('The file size must be less than 3 MB.');
      setFile('');
      return;
    }
    setFile(file);
    setAvatar(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('name', username);

    dispatch(updateUser(formData));
    handleClose();
  };

  useEffect(() => {
    if (avatarURL) {
      setAvatar(avatarURL);
    }
  }, [avatarURL]);

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} gradient={true}>
      <Formik initialValues={{ name: username }} onSubmit={handleSubmit}>
        <Form>
          <FileInputWrapper>
            <Image src={avatar} />
            <SelectAvatarInput
              type="file"
              name="file"
              onChange={handleFileChange}
            />
            <AddIconWrapper>
              <HiPlusSm size={24} />
            </AddIconWrapper>
          </FileInputWrapper>
          <NameInputWrapper>
            <ChangeNameInput
              type="text"
              name="name"
              value={username}
              onChange={handleInputChange}
            />
            <EditIconWrapper>
              <FiEdit2 size={width < 768 ? 14 : 20} />
            </EditIconWrapper>
          </NameInputWrapper>
          <SubmitBtn type="submit">Save changes</SubmitBtn>
        </Form>
      </Formik>
    </Modal>
  );
}
