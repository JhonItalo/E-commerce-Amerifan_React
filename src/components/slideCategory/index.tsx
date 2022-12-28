import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import AccessibleName from "../AcessibleName";
import AccessibleButtonName from "../AcessibleButtonName";

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
                                   <AccessibleName name="pokemon bulbassaur" />
                                   <img src="/assets/poke/bulba.png" alt="pokemon bulbassaur" width="100px" height="100px" />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokemon snorlax" />
                                   <img src="/assets/poke/snorlax.png" alt="pokemon snorlax" width="100px" height="100px" />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokemon eevee" />
                                   <img src="/assets/poke/eevee.png" alt=" pokemon eevee" width="100px" height="100px" />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokemon psyduck" />
                                   <img src="/assets/poke/psyduck.png" alt="pokemon psyduck" width="100px" height="100px" />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokemon squirtle" />
                                   <img src="/assets/poke/squirtle.png" alt="pokemon squirtle" width="100px" height="100px" />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokemon caterpie" />
                                   <img src="/assets/poke/caterpie.png" alt="pokemon caterpie" width="100px" height="100px" />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokemon dratini" />
                                   <img src="/assets/poke/dratini.png" alt="pokemon dratini" width="100px" height="100px" />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokemon abra" />
                                   <img src="/assets/poke/abra.png" alt="pokemon abra" width="100px" height="100px" />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokemon bellsporut" />
                                   <img src="/assets/poke/bellsprout.png" alt="pokemon bellsprout" width="100px" height="100px" />
                              </Link>
                         </div>
                         <div className="item">
                              <Link to="/teste">
                                   <AccessibleName name="pokeball" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball3.png"
                                        alt="pokemon abra"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokeball 2" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball7.png"
                                        alt="pokemon abra"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokeball 3" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball8.png"
                                        alt="pokemon bellsprout"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                              <Link to="/teste">
                                   7
                                   <AccessibleName name="pokeball 4" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball4.png"
                                        alt="pokemon bellsprout"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokeball 4" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball1.png"
                                        alt="pokemon caterpie"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokeball 5" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball2.png"
                                        alt="pokemon dratini"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokeball 6" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball5.png"
                                        alt="pokemon caterpie"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokeball 7" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball6.png"
                                        alt="pokemon dratini"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                              <Link to="/teste">
                                   <AccessibleName name="pokeball 8" />
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball9.png"
                                        alt="pokemon bellsprout"
                                        width="80px"
                                        height="80px"
                                   />
                              </Link>
                         </div>
                    </S.Slide>
                    <button className="previous btn_slide" onClick={() => handlePreviousSlide()}>
                         <AccessibleButtonName name="previous slide" />
                         <IoIosArrowBack />
                    </button>
                    <button className="next btn_slide" onClick={() => handleNextSlide()}>
                         <AccessibleButtonName name="next slide" />
                         <IoIosArrowForward />
                    </button>
               </S.ConteinerSlide>
          </S.Conteiner>
     );
};

export default Categorys;
