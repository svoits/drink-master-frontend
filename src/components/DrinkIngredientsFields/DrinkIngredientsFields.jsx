import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { getIngredients } from '../../redux/filters/filters-operation';

const measures = [
    { value: 'ml',label: 'ml' },
    { value: 'oz',label: 'oz' },
    { value: 'cl',label: 'cl' },
    { value: 'tsp',label: 'tsp' },
    { value: 'pinch',label: 'pinch' },
    { value: 'sprigs',label: 'sprigs' },
    { value: 'cup',label: 'cup' },
    { value: 'cups',label: 'cups' },
    { value: 'tblsp',label: 'tblsp' },
]

// const initialValues = {
//     ingredients: [
//       { ingredient: '', measure: '', quantity: '' },
//       { ingredient: '', measure: '', quantity: '' },
//       { ingredient: '', measure: '', quantity: '' },
//     ],
// };

const validationSchema = Yup.object().shape({
    ingredients: Yup.array().of(
      Yup.object().shape({
        ingredient: Yup.string().required('The ingredient is mandatory'),
        measure: Yup.string().required('Measure is mandatory'),
        quantity: Yup.number()
          .typeError('The quantity must be a number')
          .positive('The number must be positive')
          .required('Quantity is required'),
      })
    ),
});

const DrinkIngredientsFields = ({ formData, setFormData, handleSubmit }) => {
    const dispatch = useDispatch();
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [selectedMeasure, setSelectedMeasure] = useState(null);
    const [ingredientCount, setIngredientCount] = useState(3); 
    const ingredients = useSelector((state) => state.filters.ingredients);
    const maxIngredientCount = 10;

    const handleIngredientChange = (selectedOption, form) => {
        setSelectedIngredient(selectedOption);
        setSelectedMeasure(selectedOption);
        form.setFieldValue('ingredients', selectedOption ? selectedOption.value : '');
    };

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch]);

    
    const handleAddIngredient = () => {
        if (ingredientCount < maxIngredientCount) {
          setIngredientCount(ingredientCount + 1);
        }
    };
    
    const handleRemoveIngredient = () => {
        if (ingredientCount > 1) {
          setIngredientCount(ingredientCount - 1);
        }
    };

    return(
        <div>
            <h2>Ingredients</h2>
            <div>
                <button type='button' onClick={handleRemoveIngredient}>-</button>
                <span>{ingredientCount}</span>
                <button type='button' onClick={handleAddIngredient}>+</button>
            </div>
            <Formik initialValues={formData} validationSchema={validationSchema}
                onSubmit={(values) => {
                setFormData({ ...formData, ...values });
                handleSubmit();
            }}
            >
                <Form>
                    {[...Array(ingredientCount)].map((_, index) => (
                    <div key={index}>
                        <label htmlFor={`ingredient${index}`}>
                        <Field name={`ingredient${index}`}>
                            {({ field, form }) => (
                            <Select
                                closeMenuOnSelect={true}
                                isMulti={false}
                                isClearable={true}
                                options={ingredients.map(({ title }) => ({ value: title, label: title }))}
                                name={field.name}
                                id={`ingredient${index}`}
                                {...field}
                                value={selectedIngredient}
                                onChange={(selectedOption) => handleIngredientChange(selectedOption, form)}
                                placeholder=""
                            />
                            )}
                        </Field>
                        </label>
                        <div>
                        <Field name={`quantity${index}`} placeholder="Enter the quantity" />
                        <ErrorMessage name={`quantity${index}`} component="div" />
                        <label htmlFor={`measure${index}`}>
                            <Select
                            options={measures}
                            name={`measure${index}`}
                            value={selectedMeasure}
                            onChange={(selectedOption) => setSelectedMeasure(selectedOption)}
                            placeholder="cl"
                            />
                        </label>
                        <button>X</button>
                        </div>
                    </div>
                ))}
                </Form>
            </Formik>
        </div>

    )
};

export default DrinkIngredientsFields;