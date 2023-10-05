import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import makeAnimated from 'react-select/animated';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCategories,
  getGlasses,
} from '../../redux/filters/filters-operation';
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
  AddPhotoIcon,
} from './DrinkDescriptionFields.styled';
import FormError from '../FormError/FormError';
import { useFilter } from '../../redux/hooks/useFilter';

const validationSchema = Yup.object().shape({
  drinkThumb: Yup.mixed(),
  drink: Yup.string()
    .min(3, 'Cocktail name must contain at least 3 symbols')
    .required('Cocktail title is required'),
  description: Yup.string()
    .min(10, 'The cocktail description must contain at least 10 symbols')
    .required('Description of the cocktail is required'),
  category: Yup.string().required('Cocktail category is required'),
  glass: Yup.string().required('Cocktail glass is required'),
});

const animatedComponents = makeAnimated();

const DrinkDescriptionFields = ({ formData, refId, setDrinkThumb }) => {
  const [imagePreview, setImagePreview] = useState(null);
  // const [isImageSelected, setIsImageSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGlass, setSelectedGlass] = useState('');
  const { categories, glasses } = useFilter();
  const dispatch = useDispatch();
  const { drink, description, category, glass, alcoholic, drinkThumb } =
    formData;

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
  }, [dispatch]);

  const handleImageChange = (evt) => {
    const file = evt.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setDrinkThumb(file);
      setImagePreview(imageURL);
      // setIsImageSelected(true);
    }
  };

  // const handleImageDelete = () => {
  //   setFormData({
  //     ...formData,
  //     drinkThumb: '',
  //   });
  //   setImagePreview(null);
  //   setIsImageSelected(false);
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          drink,
          description,
          category,
          glass,
          alcoholic,
          drinkThumb,
        }}
        validationSchema={validationSchema}
        innerRef={refId}
      >
        {({ values, handleChange, setFieldValue }) => (
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
                <AddPhotoIcon />
                <span>Add image</span>
              </AddPhotoButton>
              {imagePreview && (
                <PhotoPreview src={imagePreview} alt="Preview" />
              )}
            </PhotoContainer>

            <FieldsAndRadioWrapper>
              <SearchContainer>
                <InputWrapper>
                  <SearchDrinkInput
                    name="drink"
                    value={values.drink}
                    onChange={handleChange}
                    placeholder="Enter item drink"
                  />
                  <FormError absolute={true} name="drink" />
                </InputWrapper>

                <InputWrapper>
                  <SearchDrinkInput
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    placeholder="Enter about description"
                  />
                  <FormError absolute={true} name="description" />
                </InputWrapper>

                <SearchDrinkLabel htmlFor="category">
                  <SearchDrinkText>Category</SearchDrinkText>
                  <InputWrapper>
                    <Field
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      placeholder="Category"
                    >
                      {({ field }) => (
                        <StyledSelect
                          className="select-category"
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
                            if (selectedOption) {
                              setSelectedCategory(selectedOption.value);
                              setFieldValue('category', selectedOption.value);
                            }
                          }}
                          placeholder="Cocktail"
                        />
                      )}
                    </Field>
                    <FormError name="category" select={true} />
                  </InputWrapper>
                </SearchDrinkLabel>

                <SearchDrinkLabel htmlFor="glass">
                  <SearchDrinkText>Glasses</SearchDrinkText>
                  <InputWrapper>
                    <Field
                      name="glass"
                      value={values.glass}
                      onChange={handleChange}
                      placeholder="Glasses"
                    >
                      {({ field }) => (
                        <StyledSelect
                          className="select-glass"
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
                              setFieldValue('glass', selectedOption.value);
                            }
                          }}
                          placeholder="Glasses"
                        />
                      )}
                    </Field>
                    <FormError name="glass" select={true} />
                  </InputWrapper>
                </SearchDrinkLabel>
              </SearchContainer>

              <RadioBtnWrapper>
                <RadioLabelWrapper>
                  <RadioField
                    type="radio"
                    name="alcoholic"
                    value="Alcoholic"
                    checked={values.alcoholic === 'Alcoholic'}
                    onChange={() => setFieldValue('alcoholic', 'Alcoholic')}
                  />
                  <RadioLabel>Alcoholic</RadioLabel>
                </RadioLabelWrapper>

                <RadioLabelWrapper>
                  <RadioField
                    type="radio"
                    name="alcoholic"
                    value="Non alcoholic"
                    checked={values.alcoholic === 'Non alcoholic'}
                    onChange={() => setFieldValue('alcoholic', 'Non alcoholic')}
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
