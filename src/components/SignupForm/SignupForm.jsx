import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/auth-operation';
import FormError from '../FormError/FormError';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
// import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
import DatePicker  from '../DatePicker/DatePicker';
import {
  AuthForm,
  Input,
  Button,
  TogglePasswordButton, 
  PasswordInputWrap,
  StyledShowPasswordIcon,
  StyledDontShowPasswordIcon,
  ErrorIcon,
  SuccessIcon,
} from './SignupForm.styled';


const initialValues = { name: '', dateOfBirth: '', email: '', password: '' };
const schema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is required'),
  dateOfBirth: Yup.date().required('dateOfBirth is required'),
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
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { name, dateOfBirth, email, password } = values;
    const birthDate = format(new Date(dateOfBirth), "yyyy-MM-dd'T'HH:mm:ssXXX");
    console.log(name, dateOfBirth, email, password);

    dispatch(signUp({ name, birthDate, email, password }))
      .unwrap()
      .then(() => toast.success('Registration succesfully'))
      .catch(() => toast.error('Something went wrong. Try again'));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <AuthForm>
          <>
            <PasswordInputWrap>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                error={errors.name && touched.name ? 'true' : 'false'}
                success={values.name && !errors.name ? 'true' : 'false'}
              />

              <FormError name="name" />
              {errors.name && touched.name ? (
                <ErrorIcon />
              ) : values.name && !errors.name ? (
                <SuccessIcon />
              ) : null}
            </PasswordInputWrap>

            <div>
              
                
            
              <DatePicker
                type="text"
                value={values.dateOfBirth}
                setFieldValue={setFieldValue} 
                placeholder="dd/mm/yyyy"
              />
              {/* <StyledDatepicker
                name="dateOfBirth"
                value={values.dateOfBirth}
                setFieldValue={setFieldValue}
                error={
                  errors.dateOfBirth && touched.dateOfBirth ? 'true' : 'false'
                }
                success={
                  values.dateOfBirth && !errors.dateOfBirth ? 'true' : 'false'
                }
              /> */}
              <FormError name="dateOfBirth" />
            </div>

            <PasswordInputWrap>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                error={errors.email && touched.email ? 'true' : 'false'}
                success={values.email && !errors.email ? 'true' : 'false'}
              />
              <FormError name="email" />
              {errors.email && touched.email ? (
                <ErrorIcon />
              ) : values.email && !errors.email ? (
                <SuccessIcon />
              ) : null}
            </PasswordInputWrap>

            <PasswordInputWrap>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                placeholder="Password"
                error={errors.password && touched.password ? 'true' : 'false'}
                success={values.password && !errors.password ? 'true' : 'false'}
              />
              <FormError name="password" />
              <TogglePasswordButton
                type="button"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <StyledDontShowPasswordIcon />
                ) : (
                  <StyledShowPasswordIcon />
                )}
              </TogglePasswordButton>
            </PasswordInputWrap>
          </>

          <Button type="submit">Sign Up</Button>
        </AuthForm>
      )}
    </Formik>
  );
}
