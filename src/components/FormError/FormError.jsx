import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

const FormError = ({ name, absolute = false, select = false }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => (
        <ErrorText absolute={absolute.toString()} select={select.toString()}>
          {message}
        </ErrorText>
      )}
    />
  );
};

export default FormError;
