import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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

const initialValues = {
    ingredient: '',
    measure: '',
}

const DrinkIngredientsFields = () => {
    const dispatch = useDispatch();
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [selectedMeasure, setSelectedMeasure] = useState(null);
    const ingredients = useSelector((state) => state.filters.ingredients);

    const handleIngredientChange = (selectedOption, form) => {
        setSelectedIngredient(selectedOption);
        setSelectedMeasure(selectedOption);
        form.setFieldValue('ingredients', selectedOption ? selectedOption.value : '');
    };

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch]);


    return(
        <div>
            <h2>Підзаголовок</h2>
            <div>
                <button >+</button>
                <button >-</button>
            </div>
            <Formik>
                <Form>
                <label htmlFor="ingredient">
                    <Field name="ingredient">
                        {({ field, form }) => (
                        <Select
                            closeMenuOnSelect={true}
                            isMulti={false}
                            isClearable={true}
                            options={ingredients.map(({ title }) => ({ value: title,label: title }))}
                            name={field.name}
                            id="ingredient"
                            {...field}
                            value={selectedIngredient}
                            onChange={(selectedOption) => handleIngredientChange(selectedOption, form)}
                            placeholder=""
                        />
                        )}
                    </Field>
                </label>
                <div>
                    <Field name="quantity" placeholder="Enter the quantity" />
                    <ErrorMessage name="title" component="div" />
                    <label htmlFor="measure">
                        <Select
                        options={measures}
                        name="measure"
                        value={selectedMeasure}
                        onChange={(selectedOption) => setSelectedMeasure(selectedOption)}
                        placeholder="cl"
                        />
                    </label>
                    <button >X</button>
                </div>
                </Form>
            </Formik>
        </div>

    )
};

export default DrinkIngredientsFields;