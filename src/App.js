import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/NavBar'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Error404 } from './components/error404/Error404';
import { Form } from './components/form/Form';
import { CartContextProvider } from './context/CartContext';
import { Cart } from './components/cart/Cart';
import './components/navBar/NavBar.scss'

const App = () => {

  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <Routes>

          <Route path="/" element={ <ItemListContainer greeting={""}/>}/>
          <Route path="/category" element={ <ItemListContainer greeting={""}/>}/>
          <Route path="/category/:categoryName" element={ <ItemListContainer greeting={""}/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Error404/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/checkout" element={<Form/>}/>

        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
};

export default App;
