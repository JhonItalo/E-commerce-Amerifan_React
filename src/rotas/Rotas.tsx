import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const MyCart = React.lazy(() => import("../pages/MyCart"));
const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/Products"));
const Telefonia = React.lazy(() => import("../pages/Telefonia"));
const Smartphones = React.lazy(() => import("../pages/Smartphones"));
const Eletrodomesticos = React.lazy(() => import("../pages/Eletrodomesticos"));
const Moveis = React.lazy(() => import("../pages/Moveis"));
const Results = React.lazy(() => import("../pages/Results"));
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
                                             <Telefonia />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/smartphones"
                                   element={
                                        <React.Suspense>
                                             <Smartphones />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/eletrodomesticos"
                                   element={
                                        <React.Suspense>
                                             <Eletrodomesticos />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/moveis"
                                   element={
                                        <React.Suspense>
                                             <Moveis />
                                        </React.Suspense>
                                   }
                              />
                              <Route
                                   path="/results/:params"
                                   element={
                                        <React.Suspense>
                                             <Results />
                                        </React.Suspense>
                                   }
                              />
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
