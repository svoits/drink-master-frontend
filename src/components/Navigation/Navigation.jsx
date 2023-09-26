import {
  List,
  ListItem,
  NavigationContainer,
  StyledNavLink,
} from './Navigation.styled';

export default function Navigation() {
  return (
    <NavigationContainer>
      <List>
        <ListItem>
          <StyledNavLink to="/home">Home</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/drinks">Drinks</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/add">Add Drink</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/my">My Drinks</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </ListItem>
      </List>
    </NavigationContainer>
  );
}
