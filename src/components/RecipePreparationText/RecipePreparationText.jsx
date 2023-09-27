import { Formik, Form, Field, ErrorMessage } from 'formik';

const RecipePreparationText = () => {
    return(
        <div>
            <Formik> 
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
        </div>
    )
};

export default RecipePreparationText;