import { useSelector } from 'react-redux';
import {
    selectUserName,
    selectIsLoggedIn,
    selectUser
} from '../auth/auth-selectors'

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    name,
    user,
  };
};