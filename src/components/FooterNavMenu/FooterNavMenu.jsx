import { Link, List, ListItem } from './FooterNavMenu.styled';

export default function FooterNavMenu() {
  return (
    <List>
      <ListItem>
        <Link to="/drinks">Drinks</Link>
      </ListItem>
      <ListItem>
        <Link to="/add">Add drink</Link>
      </ListItem>
      <ListItem>
        <Link to="/my">My drinks</Link>
      </ListItem>
      <ListItem>
        <Link to="/favorites">Favorite drinks</Link>
      </ListItem>
    </List>
  );
}
