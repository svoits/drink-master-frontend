import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import makeAnimated from 'react-select/animated';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getCategories,
  getGlasses,
} from '../../redux/filters/filters-operation';
// import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import {BsPlus} from 'react-icons/bs';
import {BiMinus} from 'react-icons/bi';
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
  RadioSpan
} from './DrinkDescriptionFields.styled';

const style = {
  backgroundColor: '#F3F3F3',
  width: '50px',
  height: '50px',
  borderRadius: '6px',
  color: '#161F37',
};

const validationSchema = Yup.object().shape({
  photo: Yup.string().required('Cocktail photo is a mandatory field').url(),

  title: Yup.string()
    .required('Cocktail title is a mandatory field')
    .min(3, 'Cocktail name must contain at least 3 symbols'),

  recipe: Yup.string()
    .required('Description of the cocktail is a mandatory field')
    .min(10, 'The cocktail description must contain at least 10 symbols'),

  category: Yup.string().required('Cocktail category is a required field'),

  glasses: Yup.string().required('Cocktail glasses is a required field'),
});

const animatedComponents = makeAnimated();

const DrinkDescriptionFields = ({ formData, setFormData, handleSubmit }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filters.categories);
  const glasses = useSelector((state) => state.filters.glasses);
  const [imagePreview, setImagePreview] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGlass, setSelectedGlass] = useState(null);

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
    <FormContainer>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFormData({ ...formData, ...values });
          handleSubmit();
        }}
      >
        <SearchForm>
          <PhotoContainer htmlFor="photo">
            <PhotoField
              type="file"
              id="photo"
              name="photo"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {isImageSelected ? (
              <AddPhotoButton type="button" onClick={handleImageDelete}>
                <BiMinus style={style} />
                Delete image
              </AddPhotoButton>
            ) : (
              <AddPhotoButton type="button">
                <BsPlus style={style} />

                <span>Add image</span>
              </AddPhotoButton>
            )}
            {imagePreview && <PhotoPreview src={imagePreview} alt="Preview" />}
            <ErrorMessage name="photo" component="div" />
          </PhotoContainer>

          <SearchandRarioDiv>
            <SearchContainer>
              <SearchDrinkInput name="title" placeholder="Enter item title" />
              <ErrorMessage name="title" component="div" />

              <SearchDrinkInput
                name="recipe"
                placeholder="Enter about recipe"
              />
              <ErrorMessage name="recipe" component="div" />

              <SearchDrinkLabel htmlFor="category">
              <SearchDrinkText>Category</SearchDrinkText>
                <Field name="category" placeholder="Category">
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
                      id="categories"
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
                          'categories',
                          selectedOption ? selectedOption.value : null,
                        );
                      }}
                      placeholder="Cocktail"
                    />
                  )}
                </Field>
              </SearchDrinkLabel>

              <SearchDrinkLabel htmlFor="glasses">
                <SearchDrinkText>Glasses</SearchDrinkText>

                <Field name="glasses" placeholder="Glasses">
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
                      id="glasses"
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
                          'glasses',
                          selectedOption ? selectedOption.value : null,
                        );
                      }}
                      placeholder="Glasses"
                    />
                  )}
                </Field>
              </SearchDrinkLabel>
            </SearchContainer>

            <RadioButtonDiv>
              <RadioLabel>
                <RadioField type="radio" name="strength" value="alcoholic" />
                <RadioSpan>Alcoholic</RadioSpan>
              </RadioLabel>

              <RadioLabel>
                <RadioField type="radio" name="strength" value="nonAlcoholic" />
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
