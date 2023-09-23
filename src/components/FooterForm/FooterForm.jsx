import { Formik } from 'formik';
import { Button, Form, FormText, Input } from './FooterForm.styled';

export default function FooterForm() {
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormText>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </FormText>
        <Input
          name="email"
          type="email"
          placeholder="Enter the email"
          required
        />

        <Button type="submit">Subscribe</Button>
      </Form>
    </Formik>
  );
}
