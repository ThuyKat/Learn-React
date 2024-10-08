import { Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/productList"
import ProductDetailsPage from "./pages/productDetails"
import CartListPage from "./pages/cartList"


function App() {
 

  return (
    <>
     <Routes>

        <Route path="/product" element={<ProductListPage/>}/>
        <Route path="/product-details/:id" element ={<ProductDetailsPage/>}/>
        <Route path ="/cart" element ={<CartListPage/>}/>
     </Routes>
    </>
  )
}

export default App
