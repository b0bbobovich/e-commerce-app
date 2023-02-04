import { Send } from "@material-ui/icons";
import React from "react";
import {
    Container,
    Title,
    Description,
    InputContainer,
    Input,
    Button
} from "./Newsletter.styled";

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products</Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter