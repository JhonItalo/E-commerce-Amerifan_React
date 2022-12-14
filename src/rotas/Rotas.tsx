import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CarrinhoContext from "../contexts/CartContext";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Home from "../pages/Home";
import Products from "../pages/Products";

const Rotas = () => {
     return (
          <BrowserRouter>
               <CarrinhoContext>
                    <Header />
                    <Routes>
                         <Route path="/" index element={<Home />} />
                         <Route path="/products/:name" element={<Products />} />
                         <Route path="/teste" element={<p>sobre</p>} />
                         <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
               </CarrinhoContext>
               <Footer />
          </BrowserRouter>
     );
};

export default Rotas;
/*   <Route path="/products">
                              <Route path=":name" element={<Products />} />
                         </Route>*/
