import { useState, useEffect } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { Container, Preloader, PreloaderContainer } from "./Products.styled";


const Products = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    category
                        ? `https://boboshop-api.onrender.com/api/v1/products?category=${category}`
                        : "https://boboshop-api.onrender.com/api/v1/products"
                )
                setProducts(res.data)
            }
            catch (err) {
                console.error(err)
            }
            finally {
                setIsLoading(false)
            }
            
        };
        getProducts();
    }, [category]);


    useEffect(() => {
        if (filters) {
            console.log(filters)
            
            setFilteredProducts(
                products.filter(item => Object.entries(filters).every(([key, value]) =>
                    (item[key].includes(value))
                )
                )
            );
        }
        else {
            setFilteredProducts(products);
        }

    }, [products, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
            )
        }
        else if (sort === "asc") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price))
        }
        else {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price))
        }
    }, [sort]);

    if (isLoading) {
        return (
            <PreloaderContainer>
                <Preloader src={process.env.PUBLIC_URL + "/preloaderLogo.svg"} />
            </PreloaderContainer>   
        )
    }


    return ( 
        <Container>        
            {filters
            ?   filteredProducts.map(item => (
                <Product item={item} key={item._id} />
            )) 
            : products
                .slice(0, 8)
                .map(item => (
                    <Product item={item} key={item._id} />
            ))
            }       
        </Container>
    )
    


}

export default Products