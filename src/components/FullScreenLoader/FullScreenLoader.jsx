import { RingLoader } from 'react-spinners';
import { LoaderWrapper } from './FullScreenLoader.styled';

const FullScreenLoader = () => {
  return (
    <LoaderWrapper>
      <RingLoader color="#2eb7e9" size={60} />
    </LoaderWrapper>
  );
};

export default FullScreenLoader;
