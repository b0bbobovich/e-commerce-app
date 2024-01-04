import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import { Container } from './Home.styled';
import { heroSectionData } from '../../data';

const Home = () => {
  return (
    <Container id='test'>
      <Slider>
        <HeroSection items={heroSectionData} />
      </Slider>
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
