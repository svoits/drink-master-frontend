import { Link, Nav } from "./AuthNav.styled";

export default function AuthNav() {
  return (
    <Nav>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </Nav>
  );
}

