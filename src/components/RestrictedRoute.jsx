import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/redux/hooks/useAuth';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/home',
}) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
