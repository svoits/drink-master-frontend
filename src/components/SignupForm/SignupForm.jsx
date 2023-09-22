import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import React from 'react';
// import { useState } from 'react';
// import { format } from "date-fns";
import FormError from '../FormError/FormError';
import { format } from 'date-fns';

// import DatePicker from '../StyledDatepicker/StyledDatepicker';
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
import { AuthForm, Input, SignupBtn } from './SignupForm.styled';
// const today = new Date();
const initialValues = { name: '', birthDate: '', email: '', password: '' };
const schema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is required'),
  birthDate: Yup.date().required('BirthDate is required'),
  // .matches(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date format (DD-MM-YYYY)'),
  // .test("max-date", "Future date not allowed", function (value) {
  //   if (!value) return true;
  //   const [day, month, year] = value.split('-');
  //   const birthDate = new Date(`${year}-${month}-${day}`);
  //   return birthDate <= today;
  // }),
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

export default function SignupForm() {
  // const [selectedDate, setSelectedDate] = useState(null);

  //  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { name, birthDate, email, password } = values;
    const formattedBirthDate = format(new Date(birthDate), "yyyy-MM-dd'T'HH:mm:ssXXX");

    // const parsedDate = parse(
    //   birthDate,
    //   "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX (zzzz)",
    //   new Date(),
    // );
    // const newBirthDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm:ssXXX");

    console.log('Name: ', name);
    console.log('birthDate: ', formattedBirthDate);
    console.log('email: ', email);
    console.log('password: ', password);

    // dispatch(signup({ name, birthDate, email, password }));

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

            {/* <Field type="text"  placeholder="dd/mm/yyyy" />  */}
            {/* <DatePicker  name="birthDate" /> */}
            <StyledDatepicker
              name="birthDate"
              value={values.birthDate}
              setFieldValue={setFieldValue}
            />
            <FormError name="birthDate" />

            <Input type="email" name="email" placeholder="Email" />
            <FormError name="email" />

            <Input type="password" name="password" placeholder="Password" />
            <FormError name="password" />
          </>

          <SignupBtn type="submit">Sign Up</SignupBtn>
        </AuthForm>
      )}
    </Formik>
  );
}


