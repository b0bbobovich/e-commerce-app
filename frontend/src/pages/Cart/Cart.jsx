import React from "react";
import Footer from "../../components/Footer/Footer";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
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
    ProductDetail,
    Image,
    Details,
    ProductName,
    ProductId,
    ProductColor,
    ProductSize,
    PriceDetail,
    ProductAmountContainer,
    ProductAmount,
    ProductPrice,
    Summary,
    SummaryTitle,
    SummaryItem,
    SummaryItemText,
    SummaryButton,
} from "./Cart.styled";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const quantity = useSelector(state => state.cart.quantity);
    const dispatch = useDispatch();
    
    const handleChooseQuantity = (type) => {
        // if (type === "dec") {
        //     quantity > 1 && dispatch(addProduct({ ...product, quantity, color, size }));
        // }
        // else {
        //     setQuantity(quantity + 1);
        // }
    };
 
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
                        {cart.products.map(product => (
                            
                            <Product key={product._id}>
                                <ProductDetail>
                                    <Image src={product.colors.find(item => item.color === product.color).images[1]} />
                                    <Details>
                                        <ProductName>
                                            <b>Product: </b>
                                            {product.title}
                                        </ProductName>
                                        <ProductId>
                                            <b>ID: </b>
                                            {product._id}
                                        </ProductId>
                                        <ProductColor>
                                            <b>Color: </b>
                                            {product.color}
                                        </ProductColor>
                                        <ProductSize>
                                            <b>Size: </b>
                                            {product.size}
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add onClick={() => handleChooseQuantity("dec")} />
                                        <ProductAmount>
                                            {product.quantity}
                                        </ProductAmount>
                                        <Remove onClick={() => handleChooseQuantity("dec")}/>
                                    </ProductAmountContainer>
                                    <ProductPrice>
                                        $ {product.price * product.quantity}
                                    </ProductPrice>
                                </PriceDetail>
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