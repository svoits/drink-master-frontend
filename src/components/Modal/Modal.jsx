import Backdrop from '@mui/material/Backdrop';
import MuiModal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { IoClose } from 'react-icons/io5';

import { CloseBtn, StyledBox } from './Modal.styled';

export default function Modal({ children, isOpen, handleClose }) {
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
        <StyledBox>
          <CloseBtn onClick={handleClose}>
            <IoClose size={32} />
          </CloseBtn>
          {children}
        </StyledBox>
      </Fade>
    </MuiModal>
  );
}
