import { red } from "@material-ui/core/colors";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column"})};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0"})};

`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0"})};
`;

const Option = styled.option`
    
`;

const ProductList = () => {
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    

    const handleFilters = (event) => {
        const value = event.target.value;
        setFilters({
            ...filters,
            [event.target.name]: value,
        })
    };

    return (
        <Container>
            <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select defaultValue="Color" name="color" onChange={handleFilters}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Brown</Option>
                    </Select>
                    <Select defaultValue="Size" name="size" onChange={handleFilters}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select onChange={event => setSort(event.target.value)}>
                        <Option value="newest">
                            Newest
                        </Option>
                        <Option value="asc">
                            Price (asc)
                        </Option>
                        <Option value="desc">
                            Price (desc)
                        </Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer /> 
            </Container>
    )
}

export default ProductList