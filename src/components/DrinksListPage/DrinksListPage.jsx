import DefaultImg from '../../assets/stub.svg';
// import { toast } from 'react-toastify';

import {
  DrinksListPageLIST,
  DrinksListPageITEM,
  DrinksListPagesIMG,
  DrinksListPageH5,
  DrinksListPageLink,
  DrinksListPageTEXTDIV,
} from './DrinksListPage.styled';

export const DrinksListPage = ({ drinks }) => {

  return (
    <>
      <DrinksListPageLIST>
        {/* {isLoading && <Loader />} */}
        {/* {error && <p>Sorry. There are no coctails ... 😭</p>} */}
        {/* {error &&
        toast.error('Sorry. There are no coctails ... 😭', {
          position: 'top-center',
          theme: 'light',
        })} */}
        {/* {error && <p>{ error }</p>} */}

        {/* {isLoading ? <Loader /> : */}
        {drinks.length > 0 ? (
          drinks.map(({ _id, drink, drinkThumb }) => (
            <DrinksListPageITEM key={_id}>
              {/* {drinkThumb ? (
              <DrinksListPagesIMG src={drinkThumb} alt={drink} />
            ) : (
              <DrinksListPagesIMG src={DefaultImg} />
            )} */}
              <DrinksListPagesIMG src={drinkThumb || DefaultImg} />
              <DrinksListPageTEXTDIV>
                <DrinksListPageH5>{drink}</DrinksListPageH5>
                <DrinksListPageLink to={`/drinks/${_id}`}>
                  See more
                </DrinksListPageLink>
              </DrinksListPageTEXTDIV>
            </DrinksListPageITEM>
          ))
        ) : drinks.length === 0 ? (
          <p>
           Sorry. There are no coctails ... 😭
          </p>
        ) : null}
        {/* {error && <p>{ error }</p>} */}
      </DrinksListPageLIST>
    </>
  );
};
//============================================================================================

