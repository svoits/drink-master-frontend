import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useImperativeHandle } from 'react';
import {
  getCategories,
  getGlasses,
} from '../../redux/filters/filters-operation';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import {
  PhotoContainer,
  PhotoField,
  PhotoPreview,
} from './DrinkDescriptionFields.styled';

const validationSchema = Yup.object().shape({
  photo: Yup.string().required('Cocktail photo is a mandatory field').url(),

  drink: Yup.string()
    .required('Cocktail title is a mandatory field')
    .min(3, 'Cocktail name must contain at least 3 symbols'),

  description: Yup.string()
    .required('Description of the cocktail is a mandatory field')
    .min(10, 'The cocktail description must contain at least 10 symbols'),

  category: Yup.string().required('Cocktail category is a required field'),

  glass: Yup.string().required('Cocktail glass is a required field'),
});

const animatedComponents = makeAnimated();

const DrinkDescriptionFields = ({ setFormData, formData, refId }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filters.categories);
  const birthDate = useSelector((state) => state.auth.user.birthDate);
  const glasses = useSelector((state) => state.filters.glasses);
  const [imagePreview, setImagePreview] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGlass, setSelectedGlass] = useState(null);
  const currentDate = new Date();
  const userBirthDate = new Date(birthDate);
  const ageDiff = currentDate.getFullYear() - userBirthDate.getFullYear();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
  }, [dispatch]);

  const handleImageChange = (evt) => {
    const [file] = evt.target.files;

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData({
        ...formData,
        drinkThumb: file,
      });
      setImagePreview(imageURL);
    }
  };

  const handleImageDelete = () => {
    setFormData({
      ...formData,
      drinkThumb: null,
    });
    setImagePreview(null);
    setIsImageSelected(false);
  };

  return (
    <div>
      <Formik
        innerRef={refId}
        initialValues={{
          ...formData,
          alcoholic: ageDiff >= 18 ? 'Alcoholic' : 'Non alcoholic',
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <PhotoContainer htmlFor="photo">
            <PhotoField
              type="file"
              id="photo"
              name="photo"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {isImageSelected ? (
              <button type="button" onClick={handleImageDelete}>
                <AiOutlineMinus />
                Delete image
              </button>
            ) : (
              <button type="button">
                <AiOutlinePlus /> Add image
              </button>
            )}
            {imagePreview && <PhotoPreview src={imagePreview} alt="Preview" />}
            <ErrorMessage name="photo" component="div" />
          </PhotoContainer>
          <Field name="drink" placeholder="Enter drink name" />
          <ErrorMessage name="drink" component="div" />

          <Field name="description" placeholder="Enter cocktail description" />
          <ErrorMessage name="description" component="div" />

          <label htmlFor="category">
            <Field name="category">
              {({ field, form }) => (
                <Select
                  closeMenuOnSelect={true}
                  isClearable={true}
                  classNames={{
                    control: (state) =>
                      state.isFocused ? 'border-orange-600' : 'border-grey-300',
                  }}
                  options={categories.map((category) => ({
                    value: category,
                    label: category,
                  }))}
                  name={field.name}
                  id="category"
                  {...field}
                  value={
                    selectedCategory
                      ? { value: selectedCategory, label: selectedCategory }
                      : null
                  }
                  onChange={(selectedOption) => {
                    setSelectedCategory(
                      selectedOption ? selectedOption.value : null,
                    );
                    form.setFieldValue(
                      'category',
                      selectedOption ? selectedOption.value : null,
                    );
                  }}
                  placeholder="Category"
                />
              )}
            </Field>
          </label>

          <label htmlFor="glasses">
            <Field name="glass">
              {({ field, form }) => (
                <Select
                  closeMenuOnSelect={true}
                  components={animatedComponents}
                  isClearable={true}
                  classNames={{
                    control: (state) =>
                      state.isFocused ? 'border-orange-600' : 'border-grey-300',
                  }}
                  options={glasses.map((glass) => ({
                    value: glass,
                    label: glass,
                  }))}
                  name={field.name}
                  id="glass"
                  {...field}
                  value={
                    selectedGlass
                      ? { value: selectedGlass, label: selectedGlass }
                      : null
                  }
                  onChange={(selectedOption) => {
                    setSelectedGlass(
                      selectedOption ? selectedOption.value : null,
                    );
                    form.setFieldValue(
                      'glass',
                      selectedOption ? selectedOption.value : null,
                    );
                  }}
                  placeholder="Glass"
                />
              )}
            </Field>
          </label>
          <div>
            <label>
              <Field type="radio" name="alcoholic" value="Alcoholic" />
              <span>Alcoholic</span>
            </label>
          </div>
          <div>
            <label>
              <Field type="radio" name="alcoholic" value="Non alcoholic" />
              <span>Non-alcoholic</span>
            </label>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default DrinkDescriptionFields;
