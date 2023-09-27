import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCategories, getGlasses } from '../../redux/filters/filters-operation';

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
  
    glasses: Yup.string()
    .required('Cocktail glasses is a required field'),
  });

const initialValues = {
    photo: '',
    title: '',
    recipe: '',
    category: '',
    glasses: '',
};

const animatedComponents = makeAnimated();

const DrinkDescriptionFields = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.filters.categories);
    const glasses = useSelector((state) => state.filters.glasses);
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedGlass, setSelectedGlass] = useState(null);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getGlasses());
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

                    <label htmlFor='category'>
                        <Field name='category'>
                            {({ field, form }) => (
                                <Select
                                closeMenuOnSelect={true}
                                isClearable={true}
                                classNames={{
                                    control: (state) =>
                                        state.isFocused ? 'border-orange-600' : 'border-grey-300',
                                }}
                                options={categories.map((category) => ({ value: category, label: category }))}
                                name={field.name}
                                id='categories'
                                {...field}
                                value={selectedCategory ? { value: selectedCategory, label: selectedCategory } : null}
                                onChange={(selectedOption) => {
                                    setSelectedCategory(selectedOption ? selectedOption.value : null);
                                    form.setFieldValue('categories', selectedOption ? selectedOption.value : null);
                                }}
                                placeholder="Category"
                            />
                            )}
                        </Field>
                    </label>

                    <label htmlFor='glasses'>
                        <Field name='glasses'>
                            {({ field, form }) => (
                                <Select 
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    isClearable={true}
                                    classNames={{
                                        control: (state) =>
                                        state.isFocused ? 'border-orange-600' : 'border-grey-300',
                                    }}
                                    options={glasses.map((glass) => ({ value: glass, label: glass}))}
                                    name={field.name}
                                    id="glasses"
                                    {...field}
                                    value={selectedGlass ? { value: selectedGlass, label: selectedGlass } : null}
                                    onChange={(selectedOption) => {
                                        setSelectedGlass(selectedOption ? selectedOption.value : null);
                                        form.setFieldValue('glasses', selectedOption ? selectedOption.value : null)
                                    }}
                                    placeholder='Glasses'
                                />
                            )}
                        </Field>
                    </label>
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