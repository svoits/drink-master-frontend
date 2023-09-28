import { Container, Title } from './ErrorPage.styled';
import heroImgmobileS from '../../images/heroImage/hero-img-mobile-1x.png';
import heroImgtabletS from '../../images/heroImage/hero-img-tablet-1x.png';
import heroImgdescS from '../../images/heroImage/hero-img-desc-1x.png';
import heroImgmobileL from '../../images/heroImage/hero-img-mobile-2x.png';
import heroImgtabletL from '../../images/heroImage/hero-img-tablet-2x.png';
import heroImgdescL from '../../images/heroImage/hero-img-desc-2x.png';

const ErrorPage = () => {
  return (
    <>
      <section>
        {/* <Container> */}
          <Title>4 4</Title>
          <picture>
            <source
              media="(min-width:1200px)"
              srcSet={`${heroImgdescS} 1x, ${heroImgdescL} 2x`}
            />
            <source
              media="(min-width:768px)"
              srcSet={`${heroImgtabletS} 1x, ${heroImgtabletL} 2x`}
            />
            <source
              media="(max-width:767px)"
              srcSet={`${heroImgmobileS} 1x, ${heroImgmobileL} 2x`}
            />
            <img src={heroImgdescS} alt="main-coctail" />
          </picture>
        {/* </Container> */}
      </section>
    </>
  );
};

export default ErrorPage;
