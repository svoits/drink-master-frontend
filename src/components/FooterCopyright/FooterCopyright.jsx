import {
  LinkWrapper,
  Text,
  Wrapper,
  Link,
} from './FooterCopyright.styled';

export default function FooterCopyright() {
  return (
    <Wrapper>
      <Text>&#169;2023 Drink Master. All rights reserved.</Text>
      <LinkWrapper>
        <Link to={'/privacy'}>Privacy Policy</Link>
        <Link to={'/service'}>Terms of Service</Link>
      </LinkWrapper>
    </Wrapper>
  );
}
