import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Checkout from './pages/Checkout/Checkout';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(state => state.user.currentUser);

  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:category" element={<ProductList />} />
          <Route path="product/:id" element={<Product/>}/> 
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout/>} />
        </Route>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/> 
      </Routes>
  );
}

export default App;
