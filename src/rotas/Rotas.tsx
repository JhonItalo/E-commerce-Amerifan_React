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
                                   <main style={{ minHeight: "150vh" }}>
                                        <React.Suspense fallback="loading">
                                             <Home />
                                        </React.Suspense>
                                   </main>
                              }
                         />
                         <Route
                              path="/products/:params"
                              element={
                                   <main style={{ minHeight: "150vh" }}>
                                        <React.Suspense fallback="loading">
                                             <Products />
                                        </React.Suspense>
                                   </main>
                              }
                         />
                         <Route path="/teste" element={<p>sobre</p>} />
                         <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <Footer />
               </CarrinhoContext>
          </BrowserRouter>
     );
};

export default Rotas;
/*   

*/
