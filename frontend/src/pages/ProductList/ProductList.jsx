import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import {
    Container,
    Title,
    FilterContainer,
    Filter,
    FilterText,
    Select,
    Option
} from "./ProductList.styled";


const ProductList = () => {
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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