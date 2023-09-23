import { HiBars4, HiXMark } from 'react-icons/hi2';
import { Button } from './MenuBtn.styled';

export default function MenuBtn({ handleToggleMenu, isMenuOpen }) {
  return (
    <Button onClick={handleToggleMenu}>
      {isMenuOpen ? <HiXMark size={32} /> : <HiBars4 size={32} />}
    </Button>
  );
}
