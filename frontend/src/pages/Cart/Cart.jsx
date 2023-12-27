import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch } from "react-redux";
import { openLoginDialog } from "../../redux/modalSlice";
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
} from "./Cart.styled";
import Footer from "../../components/Footer/Footer";


const Cart = () => {
    const {currentUser} = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    const quantity = useSelector(state => state.cart.quantity);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser) {
            dispatch(openLoginDialog());
        }
    }, [dispatch, currentUser]);
 
    return (
        <Container>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>
                        <NavLink to="/products">CONTINUE SHOPPING</NavLink>
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
                                <Image src={cartItem.product.colors.find(variation => variation.color === cartItem.color).images[1]} />
                                <Details> 
                                    <ProductName>
                                        <b>Product: </b>
                                        {cartItem.product.title}
                                    </ProductName>
                                    <ProductOptions>
                                        <ProductColor>
                                            <b>Color: </b>
                                            {cartItem.color}
                                        </ProductColor>
                                        <ProductSize>
                                            <b>Size: </b>
                                            {cartItem.size}
                                        </ProductSize>
                                    </ProductOptions>
                                    <PriceDetail>
                                        <ProductAmount>
                                            <b>Quantity: </b>
                                            {cartItem.quantity}
                                        </ProductAmount>
                                        <ProductPrice>
                                            $ {cartItem.price}
                                        </ProductPrice>
                                    </PriceDetail>
                                </Details>
                                <ClearButton />
                        </Product>
                        ))}
                        
                    </Info>
                    
                    <Summary>
                        <SummaryTitle>
                            ORDER SUMMARY
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$ {cart.total}</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemText>$ 5.90</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemText>$ -5.90</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemText>$ {cart.total}</SummaryItemText>
                        </SummaryItem>
                        <Link to="/checkout">
                            <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart