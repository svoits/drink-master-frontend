import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Button, Form, FormText, Input } from './FooterForm.styled';
import { subscribeEmail } from '../../redux/auth/auth-operation';
import FormError from '../FormError/FormError';

const subscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format, test@mail.com')
    .required('Email is required'),
});

export default function FooterForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={subscribeSchema}
      onSubmit={(values, actions) => {
        dispatch(subscribeEmail(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormText>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </FormText>
        <Input name="email" type="email" placeholder="Enter the email" />

        <FormError name="email" />

        <Button type="submit">Subscribe</Button>
      </Form>
    </Formik>
  );
}
