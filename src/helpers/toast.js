// Returns React-toastify config object
// https://fkhadra.github.io/react-toastify
export const toastConfig = (options = {}) => ({
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  ...options,
});
