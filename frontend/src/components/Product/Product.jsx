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


const Product = ({ product, color="default" }) => {
    return (
        <Container >
            <Circle />
            {color !== "default"
                ? <Image src={product.colors.find(item => item.color
                    .split(/,| /)
                    .includes(color)
                )?.images[1]} />
                : <Image src={product.colors[0].images[1]} />
            }
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>  
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>  
                </Icon>
                <Icon>
                    <Link to={`/product/${product._id}`} style={{color: "black"}}>
                        <SearchOutlined />  
                    </Link>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product