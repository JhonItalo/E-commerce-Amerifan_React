import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/privateRoute";
const MyCart = React.lazy(() => import("../pages/MyCart"));
const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/Products"));
const Telefonia = React.lazy(() => import("../pages/Telefonia"));
const Smartphones = React.lazy(() => import("../pages/Smartphones"));
const Eletrodomesticos = React.lazy(() => import("../pages/Eletrodomesticos"));
const Moveis = React.lazy(() => import("../pages/Moveis"));
const TveVideo = React.lazy(() => import("../pages/Tvevideo"));
const Results = React.lazy(() => import("../pages/Results"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const User = React.lazy(() => import("../pages/User"));

import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Nav from "../layouts/nav";

const Rotas = () => {
     return (
          <BrowserRouter>
               <Header />
               <Nav />

               <Routes>
                    <Route
                         path="/"
                         index
                         element={
                              <main
                                   style={{
                                        minHeight: "70vh",
                                        backgroundImage: "url('/assets/background/Background.webp')",
                                        backgroundRepeat: "repeat",
                                        backgroundSize: "cover",
                                   }}
                              >
                                   <React.Suspense>
                                        <Home />
                                   </React.Suspense>
                              </main>
                         }
                    />
                    <Route
                         path="/login"
                         element={
                              <React.Suspense>
                                   <Login />
                              </React.Suspense>
                         }
                    />
                    <Route
                         path="/register"
                         element={
                              <React.Suspense>
                                   <Register />
                              </React.Suspense>
                         }
                    />
                    <Route
                         path="/user"
                         element={
                              <PrivateRoute redirect="/user">
                                   <main style={{ minHeight: "70vh", background: "#F1F1F1", padding: "2rem" }}>
                                        <React.Suspense>
                                             <User />
                                        </React.Suspense>
                                   </main>
                              </PrivateRoute>
                         }
                    />
                    <Route
                         path="/products/:params"
                         element={
                              <main style={{ minHeight: "70vh" }}>
                                   <React.Suspense>
                                        <Products />
                                   </React.Suspense>
                              </main>
                         }
                    />
                    <Route
                         path="/cart"
                         element={
                              <PrivateRoute redirect="/cart">
                                   <main style={{ minHeight: "70vh" }}>
                                        <React.Suspense>
                                             <MyCart />
                                        </React.Suspense>
                                   </main>
                              </PrivateRoute>
                         }
                    />
                    <Route
                         path="/telefonia"
                         element={
                              <main style={{ minHeight: "70vh" }}>
                                   <React.Suspense>
                                        <Telefonia />
                                   </React.Suspense>
                              </main>
                         }
                    />
                    <Route
                         path="/smartphones"
                         element={
                              <main style={{ minHeight: "70vh" }}>
                                   <React.Suspense>
                                        <Smartphones />
                                   </React.Suspense>
                              </main>
                         }
                    />
                    <Route
                         path="/eletrodomesticos"
                         element={
                              <main style={{ minHeight: "70vh" }}>
                                   <React.Suspense>
                                        <Eletrodomesticos />
                                   </React.Suspense>
                              </main>
                         }
                    />
                    <Route
                         path="/moveis"
                         element={
                              <main style={{ minHeight: "70vh" }}>
                                   <React.Suspense>
                                        <Moveis />
                                   </React.Suspense>
                              </main>
                         }
                    />
                    <Route
                         path="/tvevideo"
                         element={
                              <main style={{ minHeight: "70vh" }}>
                                   <React.Suspense>
                                        <TveVideo />
                                   </React.Suspense>
                              </main>
                         }
                    />
                    <Route
                         path="/results/:params"
                         element={
                              <main style={{ minHeight: "70vh" }}>
                                   <React.Suspense>
                                        <Results />
                                   </React.Suspense>
                              </main>
                         }
                    />
               </Routes>

               <Footer />
          </BrowserRouter>
     );
};

export default Rotas;
