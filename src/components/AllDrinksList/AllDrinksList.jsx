// import Loader from '../Loader/Loader';
import DefaultImg from '../../assets/stub.svg';
// import { toast } from 'react-toastify';

import {
  List,
  Item,
  Image,
  DrinkTitle,
  DrinkLink,
  TextWrapper,
} from './AllDrinksList.styled';

export const AllDrinksList = ({ drinks }) => {
  return (
    <>
      <List>
        {drinks.length > 0 ? (
          drinks.map(({ _id, drink, drinkThumb }) => (
            <Item key={_id}>
              <Image
                src={drinkThumb || DefaultImg}
                placeholder={!drinkThumb ? 'true' : 'false'}
              />

              <TextWrapper>
                <DrinkTitle>{drink}</DrinkTitle>
                <DrinkLink to={`/drinks/${_id}`}>See more</DrinkLink>
              </TextWrapper>
            </Item>
          ))
        ) : drinks.length === 0 ? (
          <p>Sorry. There are no cocktails ... 😭</p>
        ) : null}
      </List>
    </>
  );
};
//============================================================================================
