import React, {useState} from "react";
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
    PreloaderContainer,
    Preloader
} from "./Register.styled";
import { publicRequest } from "../../requestsMethods";
import {
    Navigate
  } from "react-router-dom";

const Register = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
    const [isPasswordsMatched, setIsPasswordsMatched] = useState(true);
    const [existError, setExistError] = useState(null);

    const prepareUserData = (target) => {
        const data = {};
        data["firstName"] = target.firstName.value;
        data["lastName"] = target.lastName.value;
        data["username"] = target.username.value;
        data["email"] = target.email.value;
        data["password"] = target.password.value;
        return data
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        setIsFetching(true);
        const data = prepareUserData(event.target);
        try {
            await publicRequest.post("/auth/register/", data);
            setIsRegisterSuccess(true);
        }
        catch (err) {
            if (err.response?.status === 520) {
                setExistError(err.response.data)
            }
        }
        finally {
            setIsFetching(false);
        }
    };

    const confirmPasswords = () => {
        const password = document.getElementById("password");
        const confirmationPassword = document.getElementById("confirmPassword");
        if (password.value !== confirmationPassword.value) {
            setIsPasswordsMatched(false);
        }
        else {
            setIsPasswordsMatched(true);
        }
    };


    if (isRegisterSuccess) {
        return (
            <Navigate to="/login"/>
        )
    };

    // if (isFetching) {
    //     return (
    //         <PreloaderContainer>
    //             <Preloader src={process.env.PUBLIC_URL + "/preloaderLogo.svg"} />
    //         </PreloaderContainer>
    //     )
    // };


    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form id="registerForm" onSubmit={handleRegister}>
                    <InputContainer>
                        <Input id="firstName" required placeholder="name" type="text"></Input>
                        <Label htmlFor="name">First name</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input id="lastName" required placeholder="lastname" type="text"></Input>
                        <Label htmlFor="lastName">Last name</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input id="username" required placeholder="username" type="text" onKeyUp={() => setExistError(null)}></Input>
                        <Label htmlFor="username">Username</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input id="email" required placeholder="email" type="email" onKeyUp={() => setExistError(null)} ></Input>
                        <Label htmlFor="email">Email</Label>    
                    </InputContainer>
                    <InputContainer>
                        <PasswordInput isMatched={isPasswordsMatched} id="password" required placeholder="password" type="password" onKeyUp={confirmPasswords} autocomplete="off" />
                        <Label htmlFor="password">Password</Label>
                    </InputContainer>
                    <InputContainer>
                        <PasswordInput isMatched={isPasswordsMatched} id="confirmPassword" required placeholder="confirm password" type="password" onKeyUp={confirmPasswords} autocomplete="off"/>
                        <Label htmlFor="confirm-password">Confirm password</Label>
                    </InputContainer>
                    {!isPasswordsMatched && 
                        <ErrorMessage>{"Passwords do NOT match!"}</ErrorMessage>
                    }
                    {existError && 
                        <>
                            <ErrorMessage>{existError}</ErrorMessage>
                            <LoginButton to="/login">Log in</LoginButton>
                        </>

                    }
                    <Agrrement>
                        By creating an account, I consent to the processing of my personal data in accordance with <b>PRIVACY POLICY</b>
                    </Agrrement>
                    <Button type="submit" disabled={isFetching || !isPasswordsMatched}>CREATE</Button>
                </Form>
            </Wrapper>  
        </Container>
    )
}

export default Register