import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as loginFunc} from "../../redux/userSlice";
import {Navigate} from "react-router-dom";
import {
  Container,
  InputField,
  LoginButton,
  Form
} from "./Login.styled";


const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser)

  const handleSubmit = (event) => {
    const login = event.target.login.value;
    const password = event.target.password.value;
    dispatch(loginFunc({ login, password }));
    event.preventDefault();
  };

  if (user == null) {
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputField
            required
            name="login"
            type="text"
            placeholder="username or email"
          />
          <InputField
            required
            name="password"
            type="password"
            placeholder="password"
          />
          <LoginButton type="submit">
            Login
          </LoginButton>
        </Form>
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