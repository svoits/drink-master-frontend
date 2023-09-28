import { useAuth } from '../../redux/hooks/useAuth';
import { Button, Image } from './UserLogo.styled';

export default function UserLogo({ togglePopup }) {
  const {
    user: { avatarURL, name },
  } = useAuth();

  return (
    <Button type="button" onClick={togglePopup}>
      <Image
        src={
          avatarURL ||
          'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'
        }
        alt="avatar"
      />
      {name || 'Name'}
    </Button>
  );
}
