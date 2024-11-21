import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar.jsx'
import ItemListContainer from '../containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from '../components/Cart/Cart.jsx'
import Checkout from '../containers/CheckoutContainer/CheckoutContainer.jsx'
import { CartProvider } from '../context/cartContext.jsx'

function Router() {
  return (
    <HashRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </HashRouter>
  )
}

export default Router