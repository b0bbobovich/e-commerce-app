import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Newsletter from '../../components/Newsletter/Newsletter';
import Products from '../../components/Products/Products';
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  SelectContainer,
  Select,
  Option,
} from './ProductList.styled';

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const location = useLocation();
  const category = location.pathname.split('/')[2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilters = (event) => {
    const target = event.target;
    if (target.value === 'All') {
      let updatedFilters = { ...filters };
      delete updatedFilters[target.name];
      setFilters(updatedFilters);
    } else {
      setFilters({
        ...filters,
        [event.target.name]: target.value,
      });
    }
  };

  return (
    <Container>
      <Title>
        {category ? category.charAt(0).toUpperCase() + category.slice(1) : ''}
      </Title>

      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <SelectContainer>
            <Select defaultValue='Color' name='colors' onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>All</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Beige</Option>
              <Option>Blue</Option>
              <Option>Green</Option>
            </Select>
            <Select defaultValue='Size' name='sizes' onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>All</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </SelectContainer>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <SelectContainer>
            <Select onChange={(event) => setSort(event.target.value)}>
              <Option value='newest'>Newest</Option>
              <Option value='asc'>Price (asc)</Option>
              <Option value='desc'>Price (desc)</Option>
            </Select>
          </SelectContainer>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
