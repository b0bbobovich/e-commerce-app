import {useEffect, useState} from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { userRequest, liqpayRequest } from "../requestsMethods";
import axios from "axios";



const Container = styled.div`

`;

const TopBar = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 20px;
`;

const LeftBar = styled.div`
    flex: 2;
`;

const RightBar = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: max-content;
`;


const SectionInfo = styled.div`
    margin-top: 10px;
`;

const SectionTitle = styled.span`
    font-weight: 700;
    font-size: 20px;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ flexDirection: "column" })};
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;   
`;

const Image = styled.img`
    width: 100px;
`;

const Details = styled.div`
    padding: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ })};
`;

const ProductName = styled.span`

`;


const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.span`

`;


const OrderDetailsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const OrderDetailsTitle = styled.span`
    font-weight: 800;
`;

const OrderDetails = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})};
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;

const Input = styled.input`
    padding: 10px;
    margin: 5px;
    width: 100%;
    border: 0.5px solid lightgray;
`;


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