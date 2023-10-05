import { useAuth } from '../../redux/hooks/useAuth';
import { Button, Image } from './UserLogo.styled';

export default function UserLogo({
  handleOpenPopup,
  handleClosePopup,
  isPopupOpen,
}) {
  const {
    user: { avatarURL, name },
  } = useAuth();

  return (
    <Button
      type="button"
      onClick={() => (isPopupOpen ? handleClosePopup() : handleOpenPopup())}
    >
      <Image
        src={
          avatarURL ||
          'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'
        }
        alt="avatar"
      />
      <span>{name || 'Name'}</span>
    </Button>
  );
}
