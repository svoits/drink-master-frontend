import { useDispatch, useSelector } from 'react-redux';
import { Switch, SwitchInput } from './ThemeSwitcher.styled';
import { toggleTheme } from '../../redux/auth/auth-slice';
import { selectTheme } from '../../redux/auth/auth-selectors';

export default function ThemeSwitcher() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Switch>
      <SwitchInput
        type="checkbox"
        role="switch"
        checked={theme === 'light'}
        onChange={() => dispatch(toggleTheme())}
      />
    </Switch>
  );
}
