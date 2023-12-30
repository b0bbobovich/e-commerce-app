import { Add, Remove } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Newsletter from '../../components/Newsletter/Newsletter';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestsMethods';
import { updateCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Wrapper,
  SliderContainer,
  Arrow,
  SlideWrapper,
  Slide,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  Select,
  Option,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
  PreloaderContainer,
  Preloader,
} from './Product.styled';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { openLoginDialog } from '../../redux/modalSlice';

const Product = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [images, setImages] = useState(['/noImage.png']);
  const [isLoading, setIsLoading] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
        setSize(res.data.sizes[0]);
        if (res.data.colors.length > 0) {
          setColor(res.data.colors[0].color);
          setImages(res.data.colors[0].images);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const handleChooseQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleChooseColor = (event) => {
    event.preventDefault();
    const newColor = event.target.value;
    setColor(newColor);
    setImages(product.colors.find((item) => item.color === newColor).images);
    setSlideIndex(0);
  };

  const handleAddToCart = async () => {
    if (!currentUser) {
      dispatch(openLoginDialog());
    } else {
      dispatch(
        updateCart({
          userId: currentUser._id,
          totalPrice: quantity * product.price,
          image: images[1],
          product,
          quantity,
          color,
          size,
        })
      );
    }
  };

  const handleNextSlide = (direction) => {
    const lastIndex = images.length - 1;
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : lastIndex);
    } else {
      setSlideIndex(slideIndex < lastIndex ? slideIndex + 1 : 0);
    }
  };

  if (isLoading) {
    return (
      <PreloaderContainer>
        <Preloader src={process.env.PUBLIC_URL + '/preloaderLogo.svg'} />
      </PreloaderContainer>
    );
  }

  return (
    <Container>
      <Wrapper>
        <SliderContainer>
          <Arrow direction='left' onClick={() => handleNextSlide('left')}>
            <ArrowLeftOutlined />
          </Arrow>
          <SlideWrapper
            displacement={`-${slideIndex * (100 / images.length)}%`}
            width={`${images.length * 100}%`}
          >
            {images.map((image, index) => (
              <Slide key={index}>
                <ImageContainer>
                  <Image src={image} alt='product_image' />
                </ImageContainer>
              </Slide>
            ))}
          </SlideWrapper>
          <Arrow direction='right' onClick={() => handleNextSlide('right')}>
            <ArrowRightOutlined />
          </Arrow>
        </SliderContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            {color && (
              <Filter>
                <FilterTitle>Color:</FilterTitle>
                <Select value={color} onChange={handleChooseColor}>
                  {product.colors?.map((item) => (
                    <Option key={item.color}>{item.color}</Option>
                  ))}
                </Select>
              </Filter>
            )}
            {size && (
              <Filter>
                <FilterTitle>Size:</FilterTitle>
                <Select
                  value={size || 'Size'}
                  onChange={(event) => setSize(event.target.value)}
                >
                  {product.sizes?.map((size) => (
                    <Option key={size}>{size}</Option>
                  ))}
                </Select>
              </Filter>
            )}
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleChooseQuantity('dec')}
                style={{ cursor: 'pointer' }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => handleChooseQuantity('inc')}
                style={{ cursor: 'pointer' }}
              />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
