import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/redux/hooks/useAuth';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/welcome',
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
