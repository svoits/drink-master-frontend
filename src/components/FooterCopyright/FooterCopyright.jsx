import { LinkWrapper, Text, Wrapper } from './FooterCopyright.styled';

export default function FooterCopyright() {
  return (
    <Wrapper>
      <Text>&#169;2023 Drink Master. All rights reserved.</Text>
      <LinkWrapper>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </LinkWrapper>
    </Wrapper>
  );
}
