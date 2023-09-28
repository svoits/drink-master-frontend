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

export default function UserInfoModal({ ...props }) {
  const {
    user: { avatarURL, name },
  } = useAuth();

  const [username, setUsername] = useState(name);
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSizeFile = 5242880;
    if (file.size > maxSizeFile) {
      //tostify
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
  };

  useEffect(() => {
    if (avatarURL) {
      setAvatar(avatarURL);
    }
  }, [avatarURL]);

  return (
    <Modal {...props}>
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
              <FiEdit2 size={14} />
            </EditIconWrapper>
          </NameInputWrapper>
          <SubmitBtn type="submit">Save changes</SubmitBtn>
        </Form>
      </Formik>
    </Modal>
  );
}
