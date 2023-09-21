import {
  DrinkTitle,
  DrinkSubTitle,
  DrinkDescription,
  DrinkFoto,
} from './DrinkPageHero.styled';

export const DrinkPageHero = ({
  id,
  name,
  glass,
  alcoholic,
  description,
  img,
}) => {
  //   const dispatch = useDispatch();

  return (
    <>
      <DrinkTitle>{name}</DrinkTitle>
      <DrinkSubTitle>
        {glass} / {alcoholic}
      </DrinkSubTitle>
      <DrinkDescription>{description}</DrinkDescription>
      <button
      // onClick={() => dispatch(deleteContact(id))}
      >
        Add to favorite drinks
      </button>
      {/* <DrinkFoto>{img}</DrinkFoto> */}
    </>
  );
};
