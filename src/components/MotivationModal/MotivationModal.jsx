import Backdrop from '@mui/material/Backdrop';
import MuiModal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import {
  StyledBox,
  CloseBtn,
  Wrapper,
  Wrap,
  CloseIcon,
} from './MotivationModal.styled';
import MotivationModalIcon from '../MotivationModalIcon/MotivationModalIcon';
import MotivationModalText from '../MotivationModalText/MotivationModalText';

import { useState, useEffect } from 'react';
import { useDrink } from '../../redux/hooks/useDrink';

const motivationOne =
  '/drink-master-frontend/src/images/motivation/Motivation.jpg';
const motivationOne2x =
  '/drink-master-frontend/src/images/motivation/Motivation@2x.jpg';
const motivationTwo =
  '/drink-master-frontend/src/images/motivation/Motivation1.jpg';
const motivationTwo2x =
  '/drink-master-frontend/src/images/motivation/Motivation1@2x.jpg';
const motivationTree =
  '/drink-master-frontend/src/images/motivation/Motivation2.jpg';
const motivationTree2x =
  '/drink-master-frontend/src/images/motivation/Motivation2@2x.jpg';

const motivationOneTablet =
  '/drink-master-frontend/src/images/motivation/motivation-tablet.png';
const motivationOneTablet2x =
  '/drink-master-frontend/src/images/motivation/motivation-tablet@2x.png';
const motivationTwoTablet =
  '/drink-master-frontend/src/images/motivation/motivation-2-tablet.png';
const motivationTwoTablet2x =
  '/drink-master-frontend/src/images/motivation/motivation-2-tablet@2x.png';
const motivationTreeTablet =
  '/drink-master-frontend/src/images/motivation/motivation-3-tablet.png';
const motivationTreeTablet2x =
  '/drink-master-frontend/src/images/motivation/motivation-3-tablet@2x.png';

function randomImages() {
  const backgrounds = {
    mobile: {
      0: [motivationOne, motivationOne2x],
      1: [motivationTwo, motivationTwo2x],
      2: [motivationTree, motivationTree2x],
    },
    tablet: {
      0: [motivationOneTablet, motivationOneTablet2x],
      1: [motivationTwoTablet, motivationTwoTablet2x],
      2: [motivationTreeTablet, motivationTreeTablet2x],
    },
  };

  const randomIdxMobile = Math.floor(Math.random() * 3);
  const randomIdxTablet = Math.floor(Math.random() * 3);

  return {
    mobile: backgrounds.mobile[randomIdxMobile],
    tablet: backgrounds.tablet[randomIdxTablet],
  };
}

const { mobile, tablet } = randomImages();

const backgroundImages = { mobile, tablet };


export default function MotivationModal() {
  const { favoriteDrinks } = useDrink();

  const [isOpenMotivation, setIsOpenMotivation] = useState(false);

  const [previousValue, setPreviousValue] = useState(0);

  const handleClose = () => {
    setIsOpenMotivation(false);
  };

  useEffect(() => {
    function trackValueChange(newValue) {
      if (
        (previousValue === 0 && newValue === 1) ||
        (previousValue === 2 && newValue === 3) 
      ) {
        setIsOpenMotivation(true);
      }
      setPreviousValue(newValue);
    }

    trackValueChange(favoriteDrinks.length);
  }, [favoriteDrinks.length]);

  return (
    <MuiModal
      open={isOpenMotivation}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpenMotivation}>
        <StyledBox background={backgroundImages}>
          <section>
            <Wrapper>
              <MotivationModalIcon />

              <Wrap>
                <MotivationModalText
                  title={
                    favoriteDrinks.length === 1
                      ? 'Wow! You have added the first recipe to your favorites!'
                      : `Wow! You have added ${favoriteDrinks.length} recipes to your favorites!`
                  }
                />
                <CloseBtn onClick={handleClose}>
                  <CloseIcon />
                </CloseBtn>
              </Wrap>
            </Wrapper>
          </section>
        </StyledBox>
      </Fade>
    </MuiModal>
  );
}
