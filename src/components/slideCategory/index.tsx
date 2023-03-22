import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import AccessibleButtonName from "../acessibleButtonName1";
import AccessibleName from "../acessibleName1";

const SlideCategorys = () => {
     const Carrosel = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          const autoSlideTimer = setInterval(() => {
               if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
               } else if (Carrosel.current && Carrosel.current.scrollLeft > 0) {
                    Carrosel.current.scrollLeft = 0;
               }
          }, 5000);

          return () => clearInterval(autoSlideTimer);
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
                              <Link to="/telefonia">
                                   <img src="/assets/poke/bulba.png" alt="pokemon bulbassaur" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon bulbassaur" />
                              </Link>
                              <Link to="/smartphones">
                                   <img src="/assets/poke/snorlax.png" alt="pokemon snorlax" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon snorlax" />
                              </Link>
                              <Link to="/eletrodomesticos">
                                   <img src="/assets/poke/eevee.png" alt=" pokemon eevee" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon eevee" />
                              </Link>
                              <Link to="/moveis">
                                   <img src="/assets/poke/psyduck.png" alt="pokemon psyduck" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon psyduck" />
                              </Link>
                              <Link to="/telefonia">
                                   <img src="/assets/poke/squirtle.png" alt="pokemon squirtle" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon squirtle" />
                              </Link>
                              <Link to="/telefonia">
                                   <img src="/assets/poke/caterpie.png" alt="pokemon caterpie" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon caterpie" />
                              </Link>
                              <Link to="/telefonia">
                                   <img src="/assets/poke/dratini.png" alt="pokemon dratini" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon dratini" />
                              </Link>
                              <Link to="/telefonia">
                                   <img src="/assets/poke/abra.png" alt="pokemon abra" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon abra" />
                              </Link>
                              <Link to="/telefonia">
                                   <img src="/assets/poke/bellsprout.png" alt="pokemon bellsprout" width="100px" height="100px" />
                                   <AccessibleName name=" imgm do pokemon bellsprout" />
                              </Link>
                         </div>
                         <div className="item">
                              <Link to="/telefonia">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball3.png"
                                        alt="pokemon abra"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link to="/smartphones">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball7.png"
                                        alt="pokemon abra"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link to="/eletrodomesticos">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball8.png"
                                        alt="pokemon bellsprout"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link to="/moveis">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball4.png"
                                        alt="pokemon bellsprout"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link to="/telefonia">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball1.png"
                                        alt="pokemon caterpie"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link to="/telefonia">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball2.png"
                                        alt="pokemon dratini"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link to="/telefonia">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball5.png"
                                        alt="pokemon caterpie"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link to="/telefonia">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball6.png"
                                        alt="pokemon dratini"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                              <Link to="/telefonia">
                                   <img
                                        className="ball"
                                        src="/assets/balls/ball9.png"
                                        alt="pokemon bellsprout"
                                        width="80px"
                                        height="80px"
                                   />
                                   <AccessibleName name="pokeball" />
                              </Link>
                         </div>
                    </S.Slide>
                    <button className="previous btn_slide" onClick={() => handlePreviousSlide()}>
                         <IoIosArrowBack />
                         <AccessibleButtonName name="previous slide" />
                    </button>
                    <button className="next btn_slide" onClick={() => handleNextSlide()}>
                         <IoIosArrowForward />
                         <AccessibleButtonName name="nest slide" />
                    </button>
               </S.ConteinerSlide>
          </S.Conteiner>
     );
};

export default SlideCategorys;
