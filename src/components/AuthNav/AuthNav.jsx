import { Link } from 'react-router-dom';
export default function AuthNav() {
  return (
    <nav>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  );
}