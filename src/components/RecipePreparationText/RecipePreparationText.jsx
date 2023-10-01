import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  RecipePreparationTitle,
  StyledTextarea,
} from './RecipePreparationText.styled';

const validationSchema = Yup.object().shape({
  instructions: Yup.string().min(
    100,
    'You need to add a description of at least 100 symbols',
  ),
});

const RecipePreparationText = ({
  formData,
  setFormData,
  handleSubmit,
  refId,
}) => {
  return (
    <>
      <Formik
        innerRef={refId}
        initialValues={formData}
        // validationSchema={validationSchema}
      >
        <Form>
          <RecipePreparationTitle htmlFor="instructions">Recipe Preparation</RecipePreparationTitle>
          <Field name="instructions">
            {({ field }) => (
              <StyledTextarea
                {...field}
                id="textareaValue"
                placeholder="Enter the recipe"
              />
            )}
          </Field>
          <ErrorMessage name="textareaValue" component="div" />
        </Form>
      </Formik>
    </>
  );
};

export default RecipePreparationText;
