import { Button, Image } from './UserLogo.styled';

export default function UserLogo({ togglePopup }) {
  return (
    <Button type="button" onClick={togglePopup}>
      <Image
        src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
        alt="avatar"
      />
      Victoria
    </Button>
  );
}
