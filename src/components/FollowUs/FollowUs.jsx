import SocialIcons from '../SocialIcons/SocialIcons';
import { FollowUsTitle, FollowUsWrap } from './FollowUs.styled';

const FollowUs = () => {
  return (
    <FollowUsWrap>
      <FollowUsTitle>Follow Us</FollowUsTitle>
      <SocialIcons isInFooter={false}/>
    </FollowUsWrap>
  );
};

export default FollowUs;
