import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoYoutube,
} from 'react-icons/bi';
import { Link, List, ListItem } from './SocialIcons.styled';
import { useResize } from 'src/hooks/useResize';

export default function SocialIcons({ isInFooter }) {
  const { width: windowWidth } = useResize();
  const iconSize = windowWidth >= 768 ? 28 : 22;

  return (
    <List>
      <ListItem>
        <Link
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          isinfooter={isInFooter.toString()}
        >
          <BiLogoFacebook size={iconSize} />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          isinfooter={isInFooter.toString()}
        >
          <BiLogoInstagramAlt size={iconSize} />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noopener noreferrer nofollow"
          isinfooter={isInFooter.toString()}
        >
          <BiLogoYoutube size={iconSize} />
        </Link>
      </ListItem>
    </List>
  );
}
