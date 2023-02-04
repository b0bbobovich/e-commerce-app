import React from "react";
import {
    Link
} from "react-router-dom";
import { Container, Image, Info, Title, Button } from "./CategoryItem.styled";


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
                <Image src={item.img} alt={item.alt} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem