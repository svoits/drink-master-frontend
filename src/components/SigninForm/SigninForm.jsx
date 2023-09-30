import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import FormError from '../FormError/FormError';
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
} from '../SignupForm/SignupForm.styled';
import { signIn } from '../../redux/auth/auth-operation';

const initialValues = { email: '', password: '' };
const schema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Email must contain only digits, letters and . - _ symbols. e.g. test@mail.com',
    )
    .email('Invalid email format, test@mail.com')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(signIn({ email, password }))
      .unwrap()
      .then(() => toast.success('Login  succesfully'))
      .catch(() => toast.error('Something went wrong. Try again'));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <AuthForm>
          <>
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

          <Button type="submit">Sign In</Button>
        </AuthForm>
      )}
    </Formik>
  );
}
