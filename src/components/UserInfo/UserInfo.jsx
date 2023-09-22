import { Button, Image } from './UserInfo.styled';

export default function UserInfo() {
  return (
    <Button type="button">
      <Image
        src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
        alt="avatar"
      />
      Victoria
    </Button>
  );
}
