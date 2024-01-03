import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import SharedLayout from './components/SharedLayout/SharedLayout';
import Checkout from './pages/Checkout/Checkout';
import LoginDialog from './components/LoginDialog/LoginDialog';
import RegisterDialog from './components/RegisterDialog/RegisterDialog';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginDialog, closeRegisterDialog } from './redux/modalSlice';

function App() {
  const modal = useSelector((state) => state.modal);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (modal.isLoginDialogOpen) {
    return (
      <LoginDialog
        open={modal.isLoginDialogOpen}
        onClose={() => dispatch(closeLoginDialog())}
      />
    );
  }

  if (modal.isRegisterDialogOpen) {
    return (
      <RegisterDialog
        open={modal.isRegisterDialogOpen}
        onClose={() => dispatch(closeRegisterDialog())}
      />
    );
  }

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<ProductList />} />
        <Route path='products/:category' element={<ProductList />} />
        <Route path='product/:id' element={<Product />} />
        <Route
          path='cart'
          element={currentUser ? <Cart /> : <Navigate to='/' />}
        />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
