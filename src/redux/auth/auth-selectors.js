export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserBirthDate = (state) => { state.auth.user.birthDate };
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
