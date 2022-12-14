import { useRef } from "react";
import * as S from "./styles";
import Card from "../Card";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import Loading from "../loading";
import { MdPlayArrow } from "react-icons/md";

type props = {
     title: string;
     dataPokemons: any;
     isLoading: boolean;
};

const ShowProducts = ({ title, dataPokemons, isLoading }: props) => {
     console.log("Best seller renderizou");
     const Carrosel = useRef<HTMLDivElement | null>(null);

     const handleScrollright = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = Carrosel.current.scrollLeft + 400;
          }
     };
     const handleScrollleft = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = Carrosel.current.scrollLeft - 400;
          }
     };

     return (
          <S.Conteiner>
               <h3>{title}</h3>
               <S.ConteinerSlide>
                    {dataPokemons && (
                         <>
                              <S.Slide ref={Carrosel}>
                                   {dataPokemons.map((item: any) => (
                                        <Card key={item.id} pokemon={item} />
                                   ))}
                              </S.Slide>
                              <button className="next btn_slide" onClick={handleScrollright}>
                                   <BiRightArrow />
                              </button>
                              <button className="previous btn_slide" onClick={handleScrollleft}>
                                   <BiLeftArrow />
                              </button>
                         </>
                    )}
                    {isLoading && <Loading width="100px" height="100px" />}
               </S.ConteinerSlide>
          </S.Conteiner>
     );
};

export default ShowProducts;
/**   */
