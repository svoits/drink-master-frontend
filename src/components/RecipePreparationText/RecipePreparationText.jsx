import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  RecipePreparationTitle,
  StyledTextarea,
} from './RecipePreparationText.styled';

const validationSchema = Yup.object().shape({
  instructions: Yup.string().min(
    10,
    'You need to add a description of at least 10 symbols',
  ),
});

const RecipePreparationText = ({ formData, refId }) => {
  return (
    <>
      <Formik
        initialValues={{
          instructions: formData.instructions,
        }}
        validationSchema={validationSchema}
        innerRef={refId}
      >
        {({ values, handleChange }) => (
          <Form>
            <RecipePreparationTitle htmlFor="instructions">
              Recipe Preparation
            </RecipePreparationTitle>
            <Field name="instructions">
              {({ field }) => (
                <StyledTextarea
                  {...field}
                  id="instructions"
                  placeholder="Enter the recipe"
                  value={values.instructions}
                  onChange={handleChange}
                />
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RecipePreparationText;
