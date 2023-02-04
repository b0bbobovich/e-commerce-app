import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import {
    Container,
    Left,
    Logo,
    Description,
    SocialContainer,
    SocialIcon,
    Center,
    Title,
    List,
    ListItem,
    Right,
    ContactItem,
    Payment
} from "./Footer.styled";

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

