import { Section, ContainerError, Title } from './ErrorPage.styled';
import { Container } from '../../components/Container/Container.styled';
import ErrorImgMobile from '../../images/error/error-coctail-mobile.png';
import ErrorImgMobile2x from '../../images/error/error-coctail-mobile@2x.png';
import ErrorImgTablet from '../../images/error/error-coctail-tablet.png';
import ErrorImgTablet2x from '../../images/error/error-coctail-tablet@2x.png';
import ErrorImgDesc from '../../images/error/error-coctail-desc.png';
import ErrorImgDesc2x from '../../images/error/error-coctail-desc@2x.png';

const ErrorPage = () => {
  return (
    <>
      <Container>
        <Section>
          <ContainerError>
            <Title>4</Title>

            <picture>
              <source
                media="(min-width:1200px)"
                srcSet={`${ErrorImgDesc} 1x, ${ErrorImgDesc2x} 2x`}
              />
              <source
                media="(min-width:768px)"
                srcSet={`${ErrorImgTablet} 1x, ${ErrorImgTablet2x} 2x`}
              />
              <source
                media="(max-width:767.98px)"
                srcSet={`${ErrorImgMobile} 1x, ${ErrorImgMobile2x} 2x`}
              />
              <img src={ErrorImgDesc} alt="cocktail" />
            </picture>

            <Title>4</Title>
          </ContainerError>
        </Section>
      </Container>
    </>
  );
};

export default ErrorPage;
