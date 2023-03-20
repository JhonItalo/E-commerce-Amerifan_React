import { useContext, useRef } from "react";
import * as S from "./styles";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Loading from "../loading";
import { pokemonInfo } from "../../types/types";
import { DataHomeContext, DataHomeType } from "../../contexts/DataHomeProvider";

import Card from "../card";

type props = {
     title: string;
     data: pokemonInfo[] | undefined;
};

const ShowProducts = ({ title, data }: props) => {
     const { isloading, error } = useContext<DataHomeType>(DataHomeContext);
     const Carrosel = useRef<HTMLDivElement | null>(null);

     const handleScrollright = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = Carrosel.current.scrollLeft + 500;
          }
     };
     const handleScrollleft = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = Carrosel.current.scrollLeft - 500;
          }
     };

     return (
          <S.Conteiner>
               <>
                    <h2>{title}</h2>
                    <S.ConteinerSlide>
                         {data && (
                              <>
                                   <S.Slide ref={Carrosel}>
                                        {data.map((item: pokemonInfo) => (
                                             <Card key={item.id} pokemon={item} width="18%" />
                                        ))}
                                   </S.Slide>
                                   <button className="next btn_slide" onClick={handleScrollright}>
                                        <p>scrol to right</p>
                                        <IoIosArrowForward />
                                   </button>
                                   <button className="previous btn_slide" onClick={handleScrollleft}>
                                        <p>scrol to left</p>

                                        <IoIosArrowBack />
                                   </button>
                              </>
                         )}
                    </S.ConteinerSlide>
                    {error && <p>Ocorreu algum imprevisto! Tente novamente</p>}
                    {isloading && <Loading width="100px" height="100px" />}
               </>
          </S.Conteiner>
     );
};

export default ShowProducts;
