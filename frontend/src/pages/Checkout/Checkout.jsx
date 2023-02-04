import {useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestsMethods";
import axios from "axios";
import {
    Container,
    TopBar,
    LeftBar,
    RightBar,
    SectionInfo,
    SectionTitle,
    Product,
    ProductDetails,
    Image,
    Details,
    ProductName,
    ProductColor,
    ProductSize,
    OrderDetailsContainer,
    OrderDetailsTitle,
    OrderDetails,
    SummaryTitle,
    SummaryItem,
    SummaryItemText,
    SummaryButton,
    Hr,
    InputContainer,
    Input,
} from "./Checkout.styled";


const Checkout = () => {
    const cart = useSelector(state => state.cart);
    const [liqpayFormParams, setLiqpayFormParams] = useState({
        data: "",
        signature: ""
    });

    useEffect(() => {
        if (liqpayFormParams.data) {
            console.log("liqpayFormParams: ", liqpayFormParams)
            document.getElementById("liqpayForm").submit();
        }        
    }, [liqpayFormParams])

    const handleClick = async () => {
        const userId = "636bd52f14024364b2eb45de";                  // TODO insert real userID after login implementation
        const data = prepareOrderData();
        const createOrder = async (data) => {
            try {
                const res = await userRequest.post("/orders/" + userId, data);

                if (res.status === 200) {
                    setLiqpayFormParams(res.data);                  
                }
            }   
            catch (err) {
                console.error(err);
            }
        };
        createOrder(data);
    }

    // const showLiqpayWidget = async (liqpayParams) => {
    //     const formData = new FormData();
    //     formData.set("data", liqpayParams.data);
    //     formData.set("signature", liqpayParams.signature);

    //     const res = await axios.post("https://www.liqpay.ua/api/3/checkout", formData);
    //     console.log(res)
    // }
    
    const prepareOrderData = () => {
        const data = {};
        data["userId"] = "636bd52f14024364b2eb45de";                           // TODO insert real userID after login implementation
         const buyerInfo = {
            firstName: document.getElementById("firstName").value,
            secondName: document.getElementById("secondName").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            email: document.getElementById("email").value
        }
        data["contact"] = buyerInfo;

        let totalAmount = 0;
        let orderedProducts = [];
        for (let product of cart.products) {
            orderedProducts.push({
                productId: product._id,
                quantity: product.quantity
            })
            totalAmount += product.price * product.quantity;
        }
        data["products"] = orderedProducts;
        data["amount"] = totalAmount;

        const addressInfo = {
            city: document.getElementById("cityInfo").value,
            street: document.getElementById("streetInfo").value,
            house: document.getElementById("houseInfo").value,
            appartment: document.getElementById("appartmentInfo").value
        }
        data["address"] = addressInfo;
        return data
    }

    return (
        <Container>
            <TopBar>
                <LeftBar>
                    <SectionInfo>
                        <SectionTitle>CONTACT DETAILS</SectionTitle>
                        <InputContainer>
                            <Input placeholder="First Name" id="firstName"/>
                            <Input placeholder="Second Name" id="secondName"/>
                        </InputContainer>
                        <InputContainer>
                            <Input placeholder="Phone Number" id="phoneNumber"/>
                            <Input placeholder="Email" id="email"/>
                        </InputContainer>
                    </SectionInfo>
                    <Hr/>
                    <SectionInfo>
                    <SectionTitle>CART DETAILS</SectionTitle>
                        {cart.products.map(product => (
                            <Product key={product._id}>
                                <ProductDetails>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName>
                                            <b>Product: </b>
                                            {product.title}
                                        </ProductName>
                                        <ProductColor color={product.color} />
                                        <ProductSize>
                                            <b>Size: </b>
                                            {product.size}
                                        </ProductSize>
                                    </Details>
                                </ProductDetails>
                                <OrderDetailsContainer>
                                    <OrderDetailsTitle>Price: </OrderDetailsTitle>
                                    <OrderDetails>
                                        $ {product.price}
                                    </OrderDetails>
                                </OrderDetailsContainer>

                                <OrderDetailsContainer>
                                    <OrderDetailsTitle>Quantity: </OrderDetailsTitle>
                                    <OrderDetails>
                                        {product.quantity}
                                    </OrderDetails>
                                </OrderDetailsContainer>

                                <OrderDetailsContainer>
                                    <OrderDetailsTitle>Total: </OrderDetailsTitle>
                                    <OrderDetails>
                                        $ {product.price * product.quantity}
                                    </OrderDetails>
                                </OrderDetailsContainer>
                            </Product>
                        )
                        )}
                    </SectionInfo>
                    <Hr />
                    <SectionInfo>
                    <SectionTitle>SHIPPING DETAILS</SectionTitle>
                    <InputContainer>
                        <Input placeholder="Your City" id="cityInfo"/>
                        <Input placeholder="Your Street" id="streetInfo"/>  
                    </InputContainer>        
                    <InputContainer>
                        <Input placeholder="Your House" id="houseInfo"/>
                        <Input placeholder="Your Appartment" id="appartmentInfo"/>
                    </InputContainer>
                </SectionInfo>
                    
                </LeftBar>
                <RightBar>
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

                    <SummaryButton onClick={handleClick}>CONFIRM ORDER</SummaryButton>

                    <form id="liqpayForm" method="POST" action="https://www.liqpay.ua/api/3/checkout" target="_blank" acceptCharset="utf-8">
                        <input type="hidden" name="data" value={liqpayFormParams.data} />
                        <input type="hidden" name="signature" value={liqpayFormParams.signature} />  
                    </form>
                </RightBar>
            </TopBar>
            <Footer/>
        </Container>
    )
}

export default Checkout