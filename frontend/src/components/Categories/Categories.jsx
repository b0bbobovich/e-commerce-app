import React from "react";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import { Container } from "./Categories.styled";


const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories