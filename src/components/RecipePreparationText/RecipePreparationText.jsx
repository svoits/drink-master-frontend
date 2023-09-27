import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    textareaRecipe: Yup.string()
      .min(100, 'You need to add a description of at least 100 symbols')
});

const initialValue = {
    textareaRecipe: '',
}

const RecipePreparationText = () => {
    return(
        <>
            <Formik initialValues={initialValue} validationSchema={validationSchema}> 
                <Form>
                    <h2 htmlFor="textareaRecipe">Recipe Preparation</h2>
                    <Field name="textareaRecipe">
                        {({ field }) => (
                            <textarea {...field} id="textareaValue" placeholder="Enter the recipe" />
                        )}
                    </Field>
                    <ErrorMessage name="textareaValue" component="div" />
                </Form>
            </Formik>
        </>
    )
};

export default RecipePreparationText;