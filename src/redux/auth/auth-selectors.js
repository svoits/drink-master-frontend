// export const selectUser = (state) => state.auth.user;
// export const selectUserName = (state) => state.auth.user.name;
// export const selectUserBirthDate = (state) => {
//   state.auth.user.birthDate;
// };
// export const selectIsLoggedIn = (state) => state.auth.user.isLoggedIn;
// export const selectIsRefreshing = (state) => state.auth.user.isRefreshing;
// export const selectToken = (state) => state.auth.user.current;
// export const selectSubscribe = (state) => state.auth.user.email;
// export const selectTheme = (state) => state.auth.user.theme;
// export const selectavatarURL = (state) => state.auth.user.avatarURL;

export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserBirthDate = (state) => {
  state.auth.user.birthDate;
};
// export const selectIsLoggedIn = (state) => state.auth.user.isLoggedIn;
// export const selectIsRefreshing = (state) => state.auth.user.isRefreshing;
// export const selectToken = (state) => state.auth.user.current;
// export const selectSubscribe = (state) => state.auth.user.email;
export const selectAvatarURL = (state) => state.auth.user.avatarURL;

export const selectTheme = (state) => state.auth.theme;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectToken = (state) => state.auth.token;
export const selectSubscribe = (state) => state.auth.isSubscribed;
export const selectavatarURL = (state) => state.auth.user.avatarURL;
