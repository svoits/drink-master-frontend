import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../redux/auth/auth-operation';
// import { format } from "date-fns";
import FormError from '../FormError/FormError';
import { format } from 'date-fns';

// import DatePicker from '../StyledDatepicker/StyledDatepicker';
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
import {
  AuthForm,
  Input,
  Button,
  TogglePasswordButton,
  PasswordInputWrap,
  StyledShowPasswordIcon,
  StyledDontShowPasswordIcon,

} from './SignupForm.styled';
// const today = new Date();
const initialValues = { name: '', dateOfBirth: '', email: '', password: '' };
const schema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is required'),
  dateOfBirth: Yup.date().required('dateOfBirth is required'),
  // .matches(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date format (DD-MM-YYYY)'),
  // .test("max-date", "Future date not allowed", function (value) {
  //   if (!value) return true;
  //   const [day, month, year] = value.split('-');
  //   const birthDate = new Date(`${year}-${month}-${day}`);
  //   return birthDate <= today;
  // }),
  email: Yup.string()
    .email('Invalid email format, test@mail.com')
    .required('Email is required')
    .matches(/\.(com|net)$/, 'Email must end with .com or .net'),
  password: Yup.string()
    .min(3, 'Password must be 3 characters at minimum')
    .required('Password is required')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

export default function SignupForm() {
  // const [selectedDate, setSelectedDate] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { name, dateOfBirth, email, password } = values;
    const birthDate = format(new Date(dateOfBirth), "yyyy-MM-dd'T'HH:mm:ssXXX");
    console.log('Name: ', name);
    console.log('birthDate: ', birthDate);
    console.log('email: ', email);
    console.log('password: ', password);

    dispatch(signUp({ name, birthDate, email, password }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <AuthForm>
          <>
            <Input type="text" name="name" placeholder="Name" />
            <FormError name="name" />

            <StyledDatepicker
              name="dateOfBirth"
              value={values.dateOfBirth}
              setFieldValue={setFieldValue}
            />
            <FormError name="dateOfBirth" />

            <Input type="email" name="email" placeholder="Email" />
            <FormError name="email" />
           <PasswordInputWrap>
            <Input
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              name="password"
              placeholder="Password"
            />
            <FormError name="password" />
            <TogglePasswordButton type="button" onClick={handleTogglePassword}>
              {showPassword ? <StyledDontShowPasswordIcon  /> : <StyledShowPasswordIcon />}
              </TogglePasswordButton>
            </PasswordInputWrap>
          </>

          <Button type="submit">Sign Up</Button>
        </AuthForm>
      )}
    </Formik>
  );
}
