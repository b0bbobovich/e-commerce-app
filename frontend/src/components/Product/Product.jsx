import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Container, Circle, Image, Icon } from './Product.styled';
import { useSelector, useDispatch } from 'react-redux';
import { openLoginDialog } from '../../redux/modalSlice';
import { updateCart } from '../../redux/cartSlice';

const Product = ({ product, color = 'default' }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    if (!currentUser) {
      dispatch(openLoginDialog());
    } else {
      dispatch(
        updateCart({
          userId: currentUser._id,
          totalPrice: product.price,
          product,
          quantity: 1,
          color: product.colors[0].color,
          size: product.sizes[0],
          image: product.colors[0].images[0],
        })
      );
    }
  };

  return (
    <Container>
      <Circle />
      {color !== 'default' ? (
        <Image
          src={
            product.colors.find((item) =>
              item.color.split(/,| /).includes(color)
            )?.images[1]
          }
        />
      ) : (
        <Image src={product.colors[0].images[1]} />
      )}
      <Info>
        <Icon onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${product._id}`} style={{ color: 'black' }}>
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
