import { useAuth } from '../../redux/hooks/useAuth';
import { Button, Image } from './UserLogo.styled';

export default function UserLogo({ handleOpenPopup }) {
  const {
    user: { avatarURL, name },
  } = useAuth();

  return (
    <Button type="button" onClick={handleOpenPopup}>
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
