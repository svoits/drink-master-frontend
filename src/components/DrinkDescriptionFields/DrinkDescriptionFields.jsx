import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCategories,
  getGlasses,
} from '../../redux/filters/filters-operation';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import {
  FormContainer,
  AddPhotoButton,
  SearchForm,
  SearchandRarioDiv,
  PhotoContainer,
  SearchDrinkInput,
  SearchDrinkText,
  PhotoField,
  PhotoPreview,
  StyledSelect,
  SearchContainer,
  SearchDrinkLabel,
  RadioButtonDiv,
  RadioLabel,
  RadioField,
  RadioSpan,
} from './DrinkDescriptionFields.styled';

const style = {
  backgroundColor: '#F3F3F3',
  width: '50px',
  height: '50px',
  borderRadius: '6px',
  color: '#161F37',
};

const validationSchema = Yup.object().shape({
  drinkThumb: Yup.string()
    .required('Cocktail photo is a mandatory field')
    .url(),

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

const DrinkDescriptionFields = ({ formData, setFormData, refId }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filters.categories);
  const glasses = useSelector((state) => state.filters.glasses);

  const [imagePreview, setImagePreview] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGlass, setSelectedGlass] = useState('');

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
  }, [dispatch]);

  const handleImageChange = (evt) => {
    const file = evt.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData({
        ...formData,
        drinkThumb: file,
      });
      setImagePreview(imageURL);
      setIsImageSelected(true);
    }
  };

  const handleImageDelete = () => {
    setFormData({
      ...formData,
      drinkThumb: '',
    });
    setImagePreview(null);
    setIsImageSelected(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormContainer>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        innerRef={refId}
      >
        <SearchForm>
          <PhotoContainer htmlFor="drinkThumb">
            <PhotoField
              type="file"
              id="drinkThumb"
              name="drinkThumb"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {isImageSelected ? (
              <button type="button" onClick={handleImageDelete}>
                <AiOutlineMinus />
                Change image
              </button>
            ) : (
              <AddPhotoButton type="button">
                <BsPlus style={style} />

                <span>Add image</span>
              </AddPhotoButton>
            )}
            {imagePreview && <PhotoPreview src={imagePreview} alt="Preview" />}
            <ErrorMessage name="drinkThumb" component="div" />
          </PhotoContainer>

          <SearchandRarioDiv>
            <SearchContainer>
              <SearchDrinkInput
                name="drink"
                value={formData.drink}
                onChange={handleChange}
                placeholder="Enter item drink"
              />
              <ErrorMessage name="drink" component="div" />

              <SearchDrinkInput
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter about description"
              />
              <ErrorMessage name="description" component="div" />

              <SearchDrinkLabel htmlFor="category">
                <SearchDrinkText>Category</SearchDrinkText>
                <Field
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                >
                  {({ field, form }) => (
                    <StyledSelect
                      classNamePrefix="Select"
                      closeMenuOnSelect={true}
                      isClearable={true}
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? 'border-orange-600'
                            : 'border-grey-300',
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
                          ? {
                              value: selectedCategory,
                              label: selectedCategory,
                            }
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
                      placeholder="Cocktail"
                    />
                  )}
                </Field>
              </SearchDrinkLabel>

              <SearchDrinkLabel htmlFor="glass">
                <SearchDrinkText>Glasses</SearchDrinkText>
                <Field
                  name="glass"
                  value={formData.glass}
                  onChange={handleChange}
                  placeholder="Glasses"
                >
                  {({ field, form }) => (
                    <StyledSelect
                      classNamePrefix="Select"
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      isClearable={true}
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? 'border-orange-600'
                            : 'border-grey-300',
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
                          : ''
                      }
                      onChange={(selectedOption) => {
                        if (selectedOption) {
                          setSelectedGlass(selectedOption.value);
                          form.setFieldValue('glass', selectedOption.value);
                        }
                      }}
                      placeholder="Glasses"
                    />
                  )}
                </Field>
              </SearchDrinkLabel>
            </SearchContainer>

            <RadioButtonDiv>
              <RadioLabel>
                <RadioField
                  type="radio"
                  name="alcoholic"
                  value="Alcoholic"
                  checked={formData.alcoholic === 'Alcoholic'}
                  onChange={() =>
                    setFormData({ ...formData, alcoholic: 'Alcoholic' })
                  }
                />
                <span>Alcoholic</span>
              </RadioLabel>

              <RadioLabel>
                <RadioField
                  type="radio"
                  name="alcoholic"
                  value="Non alcoholic"
                  checked={formData.alcoholic === 'Non alcoholic'}
                  onChange={() =>
                    setFormData({ ...formData, alcoholic: 'Non alcoholic' })
                  }
                />
                <span>Non-alcoholic</span>
              </RadioLabel>
            </RadioButtonDiv>
          </SearchandRarioDiv>
        </SearchForm>
      </Formik>
    </FormContainer>
  );
};

export default DrinkDescriptionFields;
