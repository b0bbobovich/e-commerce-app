import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { Container } from "./Home.styled";

const Home = () => {
    
    return (      
        <Container id="test">
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </Container>             
    )
}

export default Home