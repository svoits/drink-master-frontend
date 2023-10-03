import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCategories,
  getGlasses,
} from '../../redux/filters/filters-operation';
import { BsPlus } from 'react-icons/bs';
import {
  FormContainer,
  AddPhotoButton,
  SearchForm,
  FieldsAndRadioWrapper,
  PhotoContainer,
  SearchDrinkInput,
  SearchDrinkText,
  PhotoField,
  PhotoPreview,
  StyledSelect,
  SearchContainer,
  SearchDrinkLabel,
  RadioBtnWrapper,
  RadioLabelWrapper,
  RadioField,
  RadioLabel,
  InputWrapper,
} from './DrinkDescriptionFields.styled';
import FormError from '../FormError/FormError';

const style = {
  backgroundColor: '#F3F3F3',
  width: '50px',
  height: '50px',
  borderRadius: '6px',
  color: '#161F37',
};

const validationSchema = Yup.object().shape({
  drinkThumb: Yup.string().url().required('Cocktail photo is required'),

  drink: Yup.string()
    .min(3, 'Cocktail name must contain at least 3 symbols')
    .required('Cocktail title is required'),

  description: Yup.string()
    .min(10, 'The cocktail description must contain at least 10 symbols')
    .required('Description of the cocktail is required'),

  category: Yup.string().required('Cocktail category is a required'),

  glass: Yup.string().required('Cocktail glass is a required'),
});

const animatedComponents = makeAnimated();

const DrinkDescriptionFields = ({ formData, setFormData, refId }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filters.categories);
  const glasses = useSelector((state) => state.filters.glasses);

  const [imagePreview, setImagePreview] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          drink: formData.drink,
          description: formData.description,
          category: formData.category,
          glass: formData.glass,
          alcoholic: formData.alcoholic,
          drinkThumb: formData.drinkThumb,
        }}
        validationSchema={validationSchema}
        innerRef={refId}
      >
        {({ values, handleChange }) => (
          <SearchForm>
            <PhotoContainer>
              <PhotoField
                type="file"
                id="drinkThumb"
                name="drinkThumb"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              {/* {isImageSelected ? (
              <button type="button" onClick={handleImageDelete}>
                <AiOutlineMinus />
                Change image
              </button>
            ) : (
              <AddPhotoButton type="button">
                <BsPlus style={style} />

                <span>Add image</span>
              </AddPhotoButton>
            )} */}
              <AddPhotoButton type="button">
                <BsPlus style={style} />
                <span>Add image</span>
              </AddPhotoButton>
              {imagePreview && (
                <PhotoPreview src={imagePreview} alt="Preview" />
              )}
              <FormError absolute={true} name="drinkThumb" />
            </PhotoContainer>

            <FieldsAndRadioWrapper>
              <SearchContainer>
                <InputWrapper>
                  <SearchDrinkInput
                    name="drink"
                    value={values.drink}
                    onChange={(e) => {
                      handleInputChange(e);
                      handleChange(e);
                    }}
                    placeholder="Enter item drink"
                  />
                  <FormError absolute={true} name="drink" />
                </InputWrapper>

                <InputWrapper>
                  <SearchDrinkInput
                    name="description"
                    value={values.description}
                    onChange={(e) => {
                      handleInputChange(e);
                      handleChange(e);
                    }}
                    placeholder="Enter about description"
                  />
                  <FormError absolute={true} name="description" />
                </InputWrapper>

                <SearchDrinkLabel>
                  <SearchDrinkText>Category</SearchDrinkText>
                  <InputWrapper>
                    <Field
                      name="category"
                      value={values.category}
                      onChange={(e) => {
                        handleInputChange(e);
                        handleChange(e);
                      }}
                      placeholder="Category"
                    >
                      {({ field, form }) => (
                        <StyledSelect
                          classNamePrefix="Select"
                          closeMenuOnSelect={true}
                          isClearable={true}
                          options={categories.map((category) => ({
                            value: category,
                            label: category,
                          }))}
                          name={field.name}
                          id="cocktail"
                          {...field}
                          value={
                            selectedCategory
                              ? {
                                  value: selectedCategory,
                                  label: selectedCategory,
                                }
                              : ''
                          }
                          onChange={(selectedOption) => {
                            setSelectedCategory(
                              selectedOption ? selectedOption.value : '',
                            );
                            form.setFieldValue(
                              'category',
                              selectedOption ? selectedOption.value : '',
                            );
                          }}
                          placeholder="Cocktail"
                        />
                      )}
                    </Field>
                    <FormError name="category" />
                  </InputWrapper>
                </SearchDrinkLabel>

                <SearchDrinkLabel>
                  <SearchDrinkText>Glasses</SearchDrinkText>
                  <InputWrapper>
                    <Field
                      name="glass"
                      value={values.glass}
                      onChange={(e) => {
                        handleInputChange(e);
                        handleChange(e);
                      }}
                      placeholder="Glasses"
                    >
                      {({ field, form }) => (
                        <StyledSelect
                          classNamePrefix="Select"
                          closeMenuOnSelect={true}
                          components={animatedComponents}
                          isClearable={true}
                          options={glasses.map((glass) => ({
                            value: glass,
                            label: glass,
                          }))}
                          name={field.name}
                          id="glasses"
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
                    <FormError name="glass" />
                  </InputWrapper>
                </SearchDrinkLabel>
              </SearchContainer>

              <RadioBtnWrapper>
                <RadioLabelWrapper>
                  <RadioField
                    type="radio"
                    name="alcoholic"
                    value="Alcoholic"
                    checked={formData.alcoholic === 'Alcoholic'}
                    onChange={() =>
                      setFormData({ ...formData, alcoholic: 'Alcoholic' })
                    }
                  />
                  <RadioLabel>Alcoholic</RadioLabel>
                </RadioLabelWrapper>

                <RadioLabelWrapper>
                  <RadioField
                    type="radio"
                    name="alcoholic"
                    value="Non alcoholic"
                    checked={formData.alcoholic === 'Non alcoholic'}
                    onChange={() =>
                      setFormData({ ...formData, alcoholic: 'Non alcoholic' })
                    }
                  />
                  <RadioLabel>Non-alcoholic</RadioLabel>
                </RadioLabelWrapper>
              </RadioBtnWrapper>
            </FieldsAndRadioWrapper>
          </SearchForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default DrinkDescriptionFields;
