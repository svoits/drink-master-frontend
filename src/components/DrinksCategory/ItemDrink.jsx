import {
    HomeDrinksITEM,
    HomeDrinksIMG,
    HomeDrinksTEXTDIV,
    HomeDrinksP,
    HomeDrinksButton,
  } from '../HomeDrinksList/HomeDrinksList.styled';

export const ItemDrink = ({ id, drink, drinkThumb }) => {
    return (
        <>
        <HomeDrinksITEM key={id}>
            {drinkThumb ? (
              <HomeDrinksIMG src={drinkThumb} alt={drink} />
            ) : (
              <HomeDrinksIMG src="" />
            )}
            <HomeDrinksTEXTDIV>
              <HomeDrinksP>{drink}</HomeDrinksP>
              <HomeDrinksButton>See more</HomeDrinksButton>
            </HomeDrinksTEXTDIV>
          </HomeDrinksITEM>
        </>
    )

}