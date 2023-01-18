import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
import {
  Container,
  Title,
  List,
  ListItem,
  UserContainer,
  Image,
  User,
  Username,
  NavLink,
  Button,
  Icon
} from "./WidgetSm.styled";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector(state => state.user.currentUser.accessToken);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest(token).get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {users.map((user) => (
          <ListItem key={user._id}>
            <UserContainer>
              <Image
                src={
                  user.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt=""
              />
              <User>
                <Username>{user.username}</Username>
              </User>
            </UserContainer>
            <NavLink to={`/user/:${user._id}`}>
              <Button>
                <Icon>
                    <Visibility/>
                </Icon>
                Display
              </Button>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
export default WidgetSm