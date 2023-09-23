import { HiBars4, HiXMark } from 'react-icons/hi2';
import { Button } from './MenuBtn.styled';
import { useResize } from 'src/hooks/useResize';

export default function MenuBtn({ handleToggleMenu, isMenuOpen }) {
  const { width: windowWidth } = useResize();
  const iconSize = windowWidth >= 768 ? 38 : 32;

  return (
    <Button onClick={handleToggleMenu}>
      {isMenuOpen ? <HiXMark size={iconSize} /> : <HiBars4 size={iconSize} />}
    </Button>
  );
}
