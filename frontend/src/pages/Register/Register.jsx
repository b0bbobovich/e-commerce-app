import React from "react";
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Agrrement,
    Button,
} from "./Register.styled";

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="lastname"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agrrement>
                        By creating an account, I consent to the processing of my personal data in accordance with <b>PRIVACY POLICY</b>
                    </Agrrement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register