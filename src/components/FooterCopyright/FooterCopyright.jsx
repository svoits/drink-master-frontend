import { Link, LinkWrapper, Text, Wrapper } from './FooterCopyright.styled';

export default function FooterCopyright() {
  return (
    <Wrapper>
      <Text>&#169;2023 Drink Master. All rights reserved.</Text>
      <LinkWrapper>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms of Service</Link>
      </LinkWrapper>
    </Wrapper>
  );
}
