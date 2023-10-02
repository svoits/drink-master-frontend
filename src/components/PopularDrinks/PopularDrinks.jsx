import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getPopularDrinks } from '../../redux/drinks/drinks-operations';
import { selectDrinks } from '../../redux/drinks/drinks-selectors';
import DefaultImg from '../../assets/stub.svg';

import Loader from '../Loader/Loader';
import {
  PopularDrinksTitle,
  DrinksImg,
  DrinksInfoDescr,
  DrinksInfoTitle,
  DrinksItem,
  DrinksLink,
  DrinksList,
  InfoWrap,
  DrinksSvgWrapper,
} from './PopularDrinks.styled';

const PopularDrinks = () => {
  const dispatch = useDispatch();
  const popularList = useSelector((state) =>
    state.drinks.popularDrinks.slice(0, 4),
  );
  const { isLoading, error } = useSelector(selectDrinks);

  useEffect(() => {
    dispatch(getPopularDrinks());
  }, [dispatch]);

  return (
    <div>
      <PopularDrinksTitle>Popular drinks</PopularDrinksTitle>
      {isLoading && <Loader />}
      {error && toast.error('Sorry. There are no images ... 😭')}
      <DrinksList>
        {popularList.map(({ _id, drinkThumb, drink, shortDescription }) => (
          <DrinksItem key={_id}>
            <DrinksLink href={`/drinks/${_id}`}>
              {drinkThumb ? (
                <DrinksImg
                  src={drinkThumb}
                  alt={drink}
                  width={90}
                  height={90}
                />
              ) : (
                <DrinksSvgWrapper>
                  <DrinksImg
                    src={DefaultImg}
                    alt={drink}
                    width={60}
                    height={60}
                  />
                </DrinksSvgWrapper>
              )}
              <InfoWrap>
                <DrinksInfoTitle>{drink}</DrinksInfoTitle>
                <DrinksInfoDescr>{shortDescription}</DrinksInfoDescr>
              </InfoWrap>
            </DrinksLink>
          </DrinksItem>
        ))}
      </DrinksList>
    </div>
  );
};

export default PopularDrinks;