import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    background-color: #fff7f7;
    ${mobile({ flexDirection: "column"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    margin-bottom: 0;
`;

const Description = styled.p`
    margin-top: 10px;
    margin-bottom: 20px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;    
    padding: 20px;
    ${mobile({ display: "none"})};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;

`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>STORE.</Logo>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus vulputate tellus, sed convallis ex ultrices nec. Sed porta nulla sem, et rhoncus nisl egestas placerat. Phasellus magna tellus, vestibulum at tincidunt quis, dapibus nec velit. Phasellus eu dolor quis tellus cursus pretium. Phasellus fermentum bibendum felis, sit amet cursus neque blandit ac. Maecenas vehicula iaculis dui, nec pulvinar dolor rhoncus sed.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />
                    29/2 Bohdana Khmel'nyts'koho St, Kyiv, 02000
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }}/>
                    +380 123 45 67
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }}/>
                    contact@store.mail
                </ContactItem>
                <Payment src="https://i.ibb.co/Gc9W8XY/png-transparent-payment-gateway-service-money-debit-card-italy-visa-text-service-logo-removebg-previ.png"/>
            </Right>
        </Container>
    )
}
export default Footer

