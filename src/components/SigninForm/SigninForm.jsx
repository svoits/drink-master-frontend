import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import FormError from '../FormError/FormError';
import { signIn } from '../../redux/auth/auth-operation';
const initialValues = { email: '', password: '' };
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format, test@tt.com')
    .required('Email is required')
    .matches(/\.(com|net)$/, 'Email must end with .com or .net'),
  password: Yup.string()
    .min(3, 'Password must be 3 characters at minimum')
    .required('Password is required')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});
export default function SigninForm() {
   const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(signIn({ email, password }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <FormError name="email" />

        <Field type="password" name="password" placeholder="Password" />
        <FormError name="password" />

        <button type="submit">Sign In</button>
      </Form>
    </Formik>
  );
}
