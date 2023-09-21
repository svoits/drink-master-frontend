import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import React from 'react';
// import { useState } from 'react';
// import { format } from "date-fns";
import FormError from '../FormError/FormError';

import DatePicker from '../StyledDatepicker/StyledDatepicker';
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
// const today = new Date();
const initialValues = { name: '', birthDate: '', email: '', password: '' };
const schema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is required'),
  birthDate: Yup.date()
    .required('BirthDate is required'),
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
    console.log(name, birthDate, email, password);
    // dispatch(signup({ name, birthDate, email, password }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <FormError name="name" />

        {/* <Field type="text"  placeholder="dd/mm/yyyy" />  */}
        {/* <DatePicker  name="birthDate" /> */}
        <StyledDatepicker name="birthDate"/>
        <FormError name="birthDate" />

        <Field type="email" name="email" placeholder="Email" />
        <FormError name="email" />

        <Field type="password" name="password" placeholder="Password" />
        <FormError name="password" />

        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
}

// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       birthDate: '',
//       email: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().min(3).required('Name is required'),
//       birthDate: Yup.string()
//         .required('BirthDate is required')
//         .matches(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date format (DD-MM-YYYY)'),
//       email: Yup.string()
//         .email('Invalid email format, test@tt.com')
//         .required('Email is required')
//         .matches(/\.(com|net)$/, 'Email must end with .com or .net'),
//       password: Yup.string()
//         .min(3, 'Password must be 3 characters at minimum')
//         .required('Password is required')
//         .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
//         .matches(/[0-9]/, 'Password must contain at least one number'),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       const { name, birthDate, email, password } = values;
//       //     // dispatch(signup({ name, birthDate, email, password }));

//       resetForm();
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//         />
//         {formik.touched.name && formik.errors.name && (
//           <div>{formik.errors.name}</div>
//         )}
//       </div>

//       <div>
//         <input
//           type="text"
//           name="birthDate"
//           placeholder="dd/mm/yyyy"
//           value={formik.values.birthDate}
//           onChange={formik.handleChange}
//         />
//         {formik.touched.birthDate && formik.errors.birthDate && (
//           <div>{formik.errors.birthDate}</div>
//         )}
//       </div>

//       <div>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//         />
//         {formik.touched.email && formik.errors.email && (
//           <div>{formik.errors.email}</div>
//         )}
//       </div>

//       <div>
//         <input
//           type="password"
//           name="password"
//           placeholder="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//         />
//         {formik.touched.password && formik.errors.password && (
//           <div>{formik.errors.password}</div>
//         )}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm;
