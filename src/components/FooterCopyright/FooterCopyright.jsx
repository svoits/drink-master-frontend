import {
  LinkWrapper,
  Text,
  Wrapper,
  AdditionalText,
} from './FooterCopyright.styled';

export default function FooterCopyright() {
  return (
    <Wrapper>
      <Text>&#169;2023 Drink Master. All rights reserved.</Text>
      <LinkWrapper>
        <AdditionalText>Privacy Policy</AdditionalText>
        <AdditionalText>Terms of Service</AdditionalText>
      </LinkWrapper>
    </Wrapper>
  );
}
