import { useSelector } from 'react-redux';

import {
  selectUserName,
  selectIsLoggedIn,
  selectUser,
  selectUserBirthDate,
  selectIsRefreshing,
} from '../auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);
  const user = useSelector(selectUser);

  const isRefreshing = useSelector(selectIsRefreshing);
  const userBirthDate = useSelector(selectUserBirthDate);

  return {
    isLoggedIn,
    isRefreshing,
    name,
    user,
    userBirthDate,
  };
};
