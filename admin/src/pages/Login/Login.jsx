import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";
import {Navigate} from "react-router-dom";
import {
  Container,
  InputField,
  LoginButton
} from "./Login.styled";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser)

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  if (user == null) {
    return (
      <Container>
        <InputField
          type="text"
          placeholder="username"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <LoginButton onClick={handleClick}>
          Login
        </LoginButton>
      </Container > 
    )
  }
  else {
    return (
      <Navigate to="/"/>
    )
  }
}


export default Login;