import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/auth-operation';
import FormError from '../FormError/FormError';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import DatePicker from '../DatePicker/DatePicker';
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

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { name, dateOfBirth, email, password } = values;
    const birthDate = format(new Date(dateOfBirth), "yyyy-MM-dd'T'HH:mm:ssXXX");
    dispatch(signUp({ name, birthDate, email, password }))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
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
                name="dateOfBirth"
                type="text"
                value={values.dateOfBirth}
                setFieldValue={setFieldValue}
                placeholder="Date of birth"
                error={
                  errors.dateOfBirth && touched.dateOfBirth ? 'true' : 'false'
                }
                success={
                  values.dateOfBirth && !errors.dateOfBirth ? 'true' : 'false'
                }
              />
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
