import { Add, Remove } from "@material-ui/icons";
import {useState, useEffect} from "react"
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestsMethods";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import {
    Container,
    Wrapper,
    ImageContainer,
    Image,
    InfoContainer,
    Title,
    Description,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
    Button,
} from "./Product.styled";


const Product = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const location = useLocation();
    const dispatch = useDispatch();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            }
            catch (err) {
                console.error(err);
            }
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        }
        else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
    }
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    {<Image src={product.img}/>}
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>{product.description}</Description>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color:</FilterTitle>
                            {product.color?.map((color) => (
                                <FilterColor color={color} key={color} onClick={() => setColor(color)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize onChange={(event) => setSize(event.target.value)}>
                                {product.size?.map((size) => (
                                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} style={{cursor: "pointer"}} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} style={{cursor: "pointer"}}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
            
        </Container>
    )
}

export default Product