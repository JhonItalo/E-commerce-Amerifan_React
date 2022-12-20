import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Categorys = () => {
     const Carrosel = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          const automaticSlideTimer = setInterval(() => {
               if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
               } else if (Carrosel.current && Carrosel.current.scrollLeft > 0) {
                    Carrosel.current.scrollLeft = 0;
               }
          }, 5000);

          return () => clearInterval(automaticSlideTimer);
     }, []);

     const handleNextSlide = () => {
          if (Carrosel.current?.scrollLeft === 0) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
          } else if (Carrosel.current?.scrollLeft === Carrosel.current?.offsetWidth) {
               return;
          }
     };
     const handlePreviousSlide = () => {
          if (Carrosel.current && Carrosel.current.scrollLeft > 0) {
               Carrosel.current.scrollLeft = 0;
          } else if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
               return;
          }
     };

     return (
          <S.Conteiner>
               <S.ConteinerSlide>
                    <S.Slide ref={Carrosel}>
                         <div className="item">
                              <Link to="/teste">
                                   <img src="/assets/poke/bulba.png" alt="pokemon bulbassaur" />
                              </Link>
                              <Link to="/teste">
                                   <img src="/assets/poke/snorlax.png" alt="pokemon snorlax" />
                              </Link>
                              <Link to="/teste">
                                   <img src="/assets/poke/eevee.png" alt=" pokemon eevee" />
                              </Link>
                              <Link to="/teste">
                                   <img src="/assets/poke/psyduck.png" alt="pokemon psyduck" />
                              </Link>
                              <Link to="/teste">
                                   <img src="/assets/poke/squirtle.png" alt="pokemon squirtle" />
                              </Link>
                              <Link to="/teste">
                                   <img src="/assets/poke/caterpie.png" alt="pokemon caterpie" />
                              </Link>
                              <Link to="/teste">
                                   <img src="/assets/poke/dratini.png" alt="pokemon dratini" />
                              </Link>
                              <Link to="/teste">
                                   <img src="/assets/poke/abra.png" alt="pokemon abra" />
                              </Link>
                              <Link to="/teste">
                                   <img src="/assets/poke/bellsprout.png" alt="pokemon bellsprout" />
                              </Link>
                         </div>
                         <div className="item">
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball3.png" alt="pokemon abra" />{" "}
                              </Link>
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball7.png" alt="pokemon abra" />{" "}
                              </Link>
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball8.png" alt="pokemon bellsprout" />{" "}
                              </Link>
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball4.png" alt="pokemon bellsprout" />{" "}
                              </Link>
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball1.png" alt="pokemon caterpie" />{" "}
                              </Link>
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball2.png" alt="pokemon dratini" />{" "}
                              </Link>
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball5.png" alt="pokemon caterpie" />{" "}
                              </Link>
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball6.png" alt="pokemon dratini" />{" "}
                              </Link>
                              <Link to="/teste">
                                   <img className="ball" src="/assets/balls/ball9.png" alt="pokemon bellsprout" />{" "}
                              </Link>
                         </div>
                    </S.Slide>
                    <button className="previous btn_slide" onClick={() => handlePreviousSlide()}>
                         <p>previous slide</p>
                         <IoIosArrowBack />
                    </button>
                    <button className="next btn_slide" onClick={() => handleNextSlide()}>
                         <p>next slide</p>
                         <IoIosArrowForward />
                    </button>
               </S.ConteinerSlide>
          </S.Conteiner>
     );
};

export default Categorys;
