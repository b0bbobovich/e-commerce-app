import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
    Info,
    Container,
    Circle,
    Image,
    Icon,
} from "./Product.styled";


const Product = ({ item }) => {

    return (
        <Container>
            <Circle />
            <Image src={item.colors[0].images[1]} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>  
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>  
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`} style={{color: "black"}}>
                        <SearchOutlined />  
                    </Link>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product