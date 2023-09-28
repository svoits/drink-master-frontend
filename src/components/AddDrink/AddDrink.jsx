import { Container } from '../../components/Container/Container.styled';
import {
  Gradient,
  // ImageBgBlue,
  ImageBgYellow,
  ImageWrap,
  MainDescr,
  MainLink,
  MainTitle,
  MainWrap,
  SectionWrap,
} from './AddDrink.styled';

import heroImgmobileS from '../../images/heroImage/hero-img-mobile-1x.png';
import heroImgtabletS from '../../images/heroImage/hero-img-tablet-1x.png';
import heroImgdescS from '../../images/heroImage/hero-img-desc-1x.png';
import heroImgmobileL from '../../images/heroImage/hero-img-mobile-2x.png';
import heroImgtabletL from '../../images/heroImage/hero-img-tablet-2x.png';
import heroImgdescL from '../../images/heroImage/hero-img-desc-2x.png';

export default function AddDrink() {
  return (
    <section>
      <Container>
        <SectionWrap>
          <MainWrap>
            <MainTitle>Craft Your Perfect Drink with Drink Master</MainTitle>
            <Gradient></Gradient>
            <MainDescr>
              Unlock your inner mixologist with Drink Master, your one-stop
              destination for exploring, crafting, and mastering the world`s
              finest beverages.
            </MainDescr>

            <MainLink to="/add">Add drink</MainLink>
          </MainWrap>

          <ImageWrap>
            <ImageBgYellow></ImageBgYellow>
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
            {/* <ImageBgBlue></ImageBgBlue> */}
          </ImageWrap>
        </SectionWrap>
      </Container>
    </section>
  );
}
