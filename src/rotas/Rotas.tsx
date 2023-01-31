import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const MyCart = React.lazy(() => import("../pages/MyCart"));
const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/Products"));
const Category = React.lazy(() => import("../pages/Category"));
import CarrinhoContext from "../contexts/CartContext";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const Rotas = () => {
     return (
          <BrowserRouter>
               <CarrinhoContext>
                    <Header />
                    <main style={{ minHeight: "70vh" }}>
                         <Routes>
                              <Route
                                   path="/"
                                   index
                                   element={
                                        <React.Suspense>
                                             <Home />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/products/:params"
                                   element={
                                        <React.Suspense>
                                             <Products />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/cart"
                                   element={
                                        <React.Suspense>
                                             <MyCart />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/telefonia"
                                   element={
                                        <React.Suspense>
                                             <Category />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/smartphones"
                                   element={
                                        <React.Suspense>
                                             <Category />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/eletrodomesticos"
                                   element={
                                        <React.Suspense>
                                             <Category />
                                        </React.Suspense>
                                   }
                              />
                              <Route path="/teste" element={<p>sobre</p>} />
                         </Routes>
                    </main>
                    <Footer />
               </CarrinhoContext>
          </BrowserRouter>
     );
};

export default Rotas;
/*   

*/
