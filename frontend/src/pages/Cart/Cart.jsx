import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openLoginDialog } from '../../redux/modalSlice';
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  NavLink,
  TopTextContainer,
  TopText,
  Bottom,
  Info,
  Product,
  ClearButton,
  Image,
  Details,
  ProductName,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductOptions,
  ProductAmount,
  ProductPrice,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryButton,
  AmountContainer,
  Amount,
  Select,
  Option,
} from './Cart.styled';
import { Add, Remove } from '@material-ui/icons';
import Footer from '../../components/Footer/Footer';
import { removeProduct, updateCart } from '../../redux/cartSlice';

const Cart = () => {
  const { currentUser } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const [shippingPrice, setShippingPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (!currentUser) {
      dispatch(openLoginDialog());
    }
  }, [dispatch, currentUser]);

  useEffect(() => {
    if (cart.totalPrice >= 50) {
      setShippingPrice(0);
      setDiscount(5.9);
    } else {
      setShippingPrice(5.9);
      setDiscount(0);
    }
  }, [cart.totalPrice, shippingPrice]);

  const handleRemoveFromCart = async (item) => {
    dispatch(
      removeProduct({
        userId: currentUser._id,
        item,
      })
    );
  };

  const handleChooseQuantity = (type, cartItem) => {
    const { quantity, price, ...rest } = cartItem;
    if (type === 'dec' && quantity > 1) {
      dispatch(
        updateCart({
          userId: currentUser._id,
          ...rest,
          totalPrice: price - cartItem.product.price,
          quantity: cartItem.quantity - 1,
        })
      );
    } else if (type === 'inc' && quantity <= 99) {
      dispatch(
        updateCart({
          userId: currentUser._id,
          ...rest,
          totalPrice: price + cartItem.product.price,
          quantity: cartItem.quantity + 1,
        })
      );
    }
  };

  const handleChooseColor = (event) => {
    event.preventDefault();
    // const newColor = event.target.value;
    // setColor(newColor);
    // setImages(product.colors.find((item) => item.color === newColor).images);
    // setSlideIndex(0);
  };

  const handleChooseSize = (event) => {
    event.preventDefault();
    // const newColor = event.target.value;
    // setColor(newColor);
    // setImages(product.colors.find((item) => item.color === newColor).images);
    // setSlideIndex(0);
  };

  const handleUpdateCart = async () => {
    // dispatch(
    //   updateCart({
    //     userId: currentUser._id,
    //     productId: product._id,
    //     totalPrice: quantity * product.price,
    //     image: images[1],
    //     quantity,
    //     color,
    //     size,
    //   })
    // );
  };

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>
            <NavLink to='/products'>CONTINUE SHOPPING</NavLink>
          </TopButton>
          <TopTextContainer>
            <TopText>Shopping Bag ({quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTextContainer>
        </Top>
        <Bottom>
          <Info>
            {cart.items.map((cartItem, index) => (
              <Product key={index}>
                <Image
                  src={
                    cartItem.product.colors.find(
                      (variation) => variation.color === cartItem.color
                    ).images[1]
                  }
                />
                <Details>
                  <ProductName>
                    <b>Product: </b>
                    {cartItem.product.title}
                  </ProductName>
                  <ProductOptions>
                    <ProductColor>
                      <b>Color: </b>
                      <Select
                        value={cartItem.color}
                        onChange={handleChooseColor}
                      >
                        {cartItem.product.colors?.map((item) => (
                          <Option key={item.color}>{item.color}</Option>
                        ))}
                      </Select>
                    </ProductColor>
                    <ProductSize>
                      <b>Size: </b>
                      <Select value={cartItem.size} onChange={handleChooseSize}>
                        {cartItem.product.sizes?.map((size) => (
                          <Option key={size}>{size}</Option>
                        ))}
                      </Select>
                    </ProductSize>
                  </ProductOptions>
                  <PriceDetail>
                    <ProductAmount>
                      <b>Quantity: </b>
                      <AmountContainer>
                        <Remove
                          onClick={() => handleChooseQuantity('dec', cartItem)}
                          style={{ cursor: 'pointer' }}
                        />
                        <Amount>{cartItem.quantity}</Amount>
                        <Add
                          onClick={() => handleChooseQuantity('inc', cartItem)}
                          style={{ cursor: 'pointer' }}
                        />
                      </AmountContainer>
                    </ProductAmount>
                    <ProductPrice>$ {cartItem.price}</ProductPrice>
                  </PriceDetail>
                </Details>
                <ClearButton onClick={() => handleRemoveFromCart(cartItem)} />
              </Product>
            ))}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemText>$ {cart.totalPrice.toFixed(2)}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemText>$ {shippingPrice.toFixed(2)}</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemText>$ -{discount.toFixed(2)}</SummaryItemText>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemText>
                $ {(cart.totalPrice + shippingPrice - discount).toFixed(2)}
              </SummaryItemText>
            </SummaryItem>
            <Link to='/checkout'>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
