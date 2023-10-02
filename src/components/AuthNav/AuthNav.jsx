import { SigninLink,SignupLink, Nav } from "./AuthNav.styled";

export default function AuthNav() {
  return (
    <Nav>
      <SignupLink to="/signup">Sign Up</SignupLink>
      <SigninLink to="/signin">Sign In</SigninLink>
    </Nav>
  );
}

