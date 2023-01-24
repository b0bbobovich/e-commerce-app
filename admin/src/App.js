import Home from "./pages/Home/Home";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";
import Login from "./pages/Login/Login";
import SharedLayout from "./components/SharedLayout/SharedLayout";



function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={user?.isAdmin ? <SharedLayout /> : <Navigate to="/login"/>}>
        <Route index element={<Home />} />
        <Route path="/users" element={<UserList />}/>
        <Route path="/user/:userId" element={<User />}/>
        <Route path="/newUser" element={<NewUser />}/>
        <Route path="/products"element={<ProductList />}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path="/newproduct" element={<NewProduct />} />
      </Route>
      <Route path="/login" element={<Login />}/>
    </Routes>
  );
}

export default App;