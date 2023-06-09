import Products from './components/Products';
import Layout from './components/Layout';
import Cart from './components/Cart';
import './App.css';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
