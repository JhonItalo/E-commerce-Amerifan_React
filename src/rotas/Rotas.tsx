import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/Products"));
import CarrinhoContext from "../contexts/CartContext";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const Rotas = () => {
     return (
          <BrowserRouter>
               <CarrinhoContext>
                    <Header />
                    <Routes>
                         <Route
                              path="/"
                              index
                              element={
                                   <React.Suspense fallback="loading">
                                        <Home />
                                        <Footer />
                                   </React.Suspense>
                              }
                         />
                         <Route
                              path="/products/:params"
                              element={
                                   <React.Suspense fallback="loading">
                                        <Products />
                                   </React.Suspense>
                              }
                         />
                         <Route path="/teste" element={<p>sobre</p>} />
                         <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
               </CarrinhoContext>
          </BrowserRouter>
     );
};

export default Rotas;
/*   

*/
