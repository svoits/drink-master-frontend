import { Formik } from 'formik';
import { HiPlusSm } from 'react-icons/hi';

import Modal from '../Modal/Modal';
import {
  ChangeNameInput,
  Form,
  IconWrapper,
  Image,
  InputWrapper,
  SelectAvatarInput,
  SubmitBtn,
} from './UserInfoModal.styled';
import { useAuth } from '../../redux/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/auth/auth-operation';

export default function UserInfoModal({ ...props }) {
  const {
    user: { avatarURL, name },
  } = useAuth();
  console.log(avatarURL, name);
  const [username, setUsername] = useState(name);
  console.log(username);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    setUsername(name);
  }, [name]);

  return (
    <Modal {...props}>
      <Formik
        initialValues={{ file: '', name }}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(updateUser(values));
        }}
      >
        {({ setFieldValue }) => (
          <Form encType="multipart/form-data">
            <InputWrapper>
              <Image src={avatarURL} />
              <SelectAvatarInput
                type="file"
                name="file"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setFieldValue('file', event.target.files[0]);
                }}
              />
              <IconWrapper>
                <HiPlusSm size={24} />
              </IconWrapper>
            </InputWrapper>
            <ChangeNameInput
              type="text"
              name="name"
              value={username}
              onChange={handleInputChange}
            />
            <SubmitBtn type="submit">Save changes</SubmitBtn>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
