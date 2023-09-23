// import { Link } from 'react-router-dom';
import {
  ImageBgBlue,
  ImageBgYellow,
  ImageWrap,
  MainDescr,
  MainLink,
  MainTitle,
  MainWrap,
  SectionWrap,
} from './AddDrink.styled';

export default function AddDrink() {
  return (
    <section>
      <SectionWrap>
        <MainWrap>
          <MainTitle>Craft Your Perfect Drink with Drink Master</MainTitle>
          <MainDescr>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world`s
            finest beverages.
          </MainDescr>

          <MainLink to="/add">Add drink</MainLink>
        </MainWrap>

        <ImageWrap>
          <ImageBgYellow></ImageBgYellow>
          <img src="" alt="main-coctail" />
          <ImageBgBlue></ImageBgBlue>
        </ImageWrap>
      </SectionWrap>
    </section>
  );
}
