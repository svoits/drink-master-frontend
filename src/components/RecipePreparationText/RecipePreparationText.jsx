import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  RecipePreparationTitle,
  StyledTextarea,
} from './RecipePreparationText.styled';

const validationSchema = Yup.object().shape({
  textareaRecipe: Yup.string().min(
    100,
    'You need to add a description of at least 100 symbols',
  ),
});

const RecipePreparationText = ({ formData, setFormData, handleSubmit }) => {
  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFormData({ ...formData, ...values });
          handleSubmit();
        }}
      >
        <Form>
          <RecipePreparationTitle htmlFor="textareaRecipe">
            Recipe Preparation
          </RecipePreparationTitle>
          <Field name="textareaRecipe">
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
