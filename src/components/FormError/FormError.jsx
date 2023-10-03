import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

const FormError = ({ name, absolute = false }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => (
        <ErrorText absolute={absolute.toString()}>{message}</ErrorText>
      )}
    />
  );
};

export default FormError;
