import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCategories, getIngredients } from '../../redux/filters/filters-operation';

const validationSchema = Yup.object().shape({
    photo: Yup.string()
      .required('Cocktail photo is a mandatory field')
      .url(),
  
    title: Yup.string()
      .required('Cocktail title is a mandatory field')
      .min(3, 'Cocktail name must contain at least 3 symbols'),
  
    recipe: Yup.string()
      .required('Description of the cocktail is a mandatory field')
      .min(10, 'The cocktail description must contain at least 10 symbols'),
  
    category: Yup.string()
      .required('Cocktail category is a required field'),
  
    ingredients: Yup.array()
      .of(Yup.string().required('Cocktail ingredients are mandatory fields'))
      .min(1, 'Add at least one ingredient'),
    textareaRecipe: Yup.string()
      .min(100, 'You need to add a description of at least 100 symbols')
  });

const initialValues = {
    photo: '',
    title: '',
    recipe: '',
    category: '',
    ingredients: [],
    textareaRecipe: '',
};

const DrinkDescriptionFields = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.filter.categories);
    const ingredients = useSelector((state) => state.filter.ingredients);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getIngredients());
    }, [dispatch]);

    const handleImageChange = (evt) => {
        const file = evt.target.files[0];
    
        if (file) {
          const imageURL = URL.createObjectURL(file);
          setImagePreview(imageURL);
        }
      };

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                <Form>
                    <label>
                        <Field type="file" id="photo" name="photo" onChange={handleImageChange}  />
                        <span>Add image</span>
                        {imagePreview && <img src={imagePreview} alt="Preview" />}
                        <ErrorMessage name="photo" component="div" />
                    </label>
                    <Field name="title" placeholder="Enter item title" />
                    <ErrorMessage name="title" component="div" />
                        
                    <Field name="recipe" placeholder="Enter about recipe" />
                    <ErrorMessage name="recipe" component="div" />

                    <Select name='category' options={categories} />
                    <Select name='ingredients' options={ingredients} />

                    <div>
                        <label>
                            <Field type="radio" name="strength" value="alcoholic" />
                            <span>Alcoholic</span>
                         </label>
                    </div>
                    <div>
                        <label>
                            <Field type="radio" name="strength" value="nonAlcoholic" />
                            <span>Non-alcoholic</span>
                        </label>
                    </div>
                </Form>
            </Formik>
        </div>
    )
};

export default DrinkDescriptionFields;