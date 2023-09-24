import { useSelector } from 'react-redux';

import {
  selectUser,
  selectUserName,
  selectUserBirthDate,
  selectIsLoggedIn,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  //   const isRefreshing = useSelector(selectIsRefreshing);

  const currentUser = useSelector(selectUser);

  const user = useSelector(selectUserName);

  const userBirthDate = useSelector(selectUserBirthDate);

  return {
    isLoggedIn,
    // isRefreshing,
    currentUser,
    user,
    userBirthDate,
  };
};
