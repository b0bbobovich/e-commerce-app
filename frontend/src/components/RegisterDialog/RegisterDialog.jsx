import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/userSlice';
import { openLoginDialog as showLoginForm } from '../../redux/modalSlice';
import {
  Container,
  Wrapper,
  Title,
  Form,
  InputContainer,
  Input,
  PasswordInput,
  Label,
  Agrrement,
  Button,
  ErrorMessage,
  LoginButton,
  ErrorContainter,
  PreloaderContainer,
  Preloader,
} from './RegisterDialog.styled';

const RegisterDialog = (props) => {
  const { onClose, open } = props;
  const [isPasswordsMatched, setIsPasswordsMatched] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const prepareUserData = (target) => {
    const data = {};
    data['firstName'] = target.firstName.value;
    data['lastName'] = target.lastName.value;
    data['username'] = target.username.value;
    data['email'] = target.email.value;
    data['password'] = target.password.value;
    return data;
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const data = prepareUserData(event.target);
    dispatch(register(data)).then((res) => {
      if (res.type === 'user/register/rejected') {
        setError(res.payload);
      } else {
        onClose();
      }
    });
  };

  const confirmPasswords = () => {
    const password = document.getElementById('password');
    const confirmationPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmationPassword.value) {
      setIsPasswordsMatched(false);
    } else {
      setIsPasswordsMatched(true);
    }
  };

  const openLoginDialog = () => {
    dispatch(showLoginForm());
  };

  return (
    <>
      <Container onClose={onClose} open={open}>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form id='registerForm' onSubmit={handleRegister}>
            <InputContainer>
              <Input
                id='firstName'
                required
                placeholder='name'
                type='text'
              ></Input>
              <Label htmlFor='name'>First name</Label>
            </InputContainer>
            <InputContainer>
              <Input
                id='lastName'
                required
                placeholder='lastname'
                type='text'
              ></Input>
              <Label htmlFor='lastName'>Last name</Label>
            </InputContainer>
            <InputContainer>
              <Input
                id='username'
                required
                placeholder='username'
                type='text'
                onKeyUp={() => setError('')}
              ></Input>
              <Label htmlFor='username'>Username</Label>
            </InputContainer>
            <InputContainer>
              <Input
                id='email'
                required
                placeholder='email'
                type='email'
                onKeyUp={() => setError('')}
              ></Input>
              <Label htmlFor='email'>Email</Label>
            </InputContainer>
            <InputContainer>
              <PasswordInput
                isMatched={isPasswordsMatched}
                id='password'
                required
                placeholder='password'
                type='password'
                onKeyUp={confirmPasswords}
                autocomplete='off'
              />
              <Label htmlFor='password'>Password</Label>
            </InputContainer>
            <InputContainer>
              <PasswordInput
                isMatched={isPasswordsMatched}
                id='confirmPassword'
                required
                placeholder='confirm password'
                type='password'
                onKeyUp={confirmPasswords}
                autocomplete='off'
              />
              <Label htmlFor='confirm-password'>Confirm password</Label>
            </InputContainer>
            {!isPasswordsMatched && (
              <ErrorMessage>{'Passwords do NOT match!'}</ErrorMessage>
            )}
            {error && (
              <ErrorContainter>
                <ErrorMessage>{error}</ErrorMessage>
                <LoginButton onClick={openLoginDialog}>Log in</LoginButton>
              </ErrorContainter>
            )}
            <Agrrement>
              By creating an account, I consent to the processing of my personal
              data in accordance with <b>PRIVACY POLICY</b>
            </Agrrement>
            {isFetching ? (
              <PreloaderContainer>
                <Preloader
                  src={process.env.PUBLIC_URL + '/preloaderLogo.svg'}
                />
              </PreloaderContainer>
            ) : (
              <Button
                type='submit'
                disabled={isFetching || !isPasswordsMatched}
              >
                CREATE
              </Button>
            )}
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

RegisterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default RegisterDialog;
