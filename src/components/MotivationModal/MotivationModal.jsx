import Backdrop from '@mui/material/Backdrop';
import MuiModal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { IoClose } from 'react-icons/io5';

import { StyledBox, CloseBtn, Wrapper } from './MotivationModal.styled';
// import MotivationModalIcon from '../MotivationModalIcon/MotivationModalIcon';
import MotivationModalText from '../MotivationModalText/MotivationModalText';
import Vector from '../../images/motivation/Vector.png';
import { useState } from 'react';
import { useDrink } from "../../redux/hooks/useDrink";



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

function randomImages() {
  const obj = {
    0: [motivationOne, motivationOne2x],
    1: [motivationTwo, motivationTwo2x],
    2: [motivationTree, motivationTree2x],
  };
  const randomIdx = Math.floor(Math.random() * 3);

  return obj[randomIdx];
}
const urlImg = randomImages();

export default function MotivationModal() {

const { favoriteDrinks } = useDrink();
    let isOpen = favoriteDrinks.length === 1;
    // const isOpen = true;
    console.log(isOpen)

    const [isOpenMotivation, setIsOpenMotivation] = useState(false);
    console.log(isOpenMotivation);
    console.log(setIsOpenMotivation);

const handleClose=() => {
    setIsOpenMotivation((state) => !state);
    isOpen = false;
    
  };
  
    return (
        <MuiModal
            
    open={isOpen}
    
    onClose={handleClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <StyledBox background={urlImg}>
          <section>
            <Wrapper>
              
              <img
                src={Vector}
                alt="decoration"
                style={{
                  fill: 'rgba(217, 217, 217, 0.14)',
                    backdropFilter: 'blur(27.976364135742188px)',
                    
                }}
              />
              <MotivationModalText title="Wow! You have added the first recipe to your favorites!" />
              <CloseBtn onClick={handleClose}>
                <IoClose size={28} />
              </CloseBtn>
            </Wrapper>
          </section>
        </StyledBox>
      </Fade>
    </MuiModal>
  );
}
