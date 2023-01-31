import { useContext, useRef } from "react";
import * as S from "./styles";
import Card from "../Card";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import Loading from "../loading";
import { DataProviderContext } from "../../contexts/DataProviderContext";
import { DataProviderType } from "../../types/types";

type props = {
     title: string;
     data: any | undefined;
};

const ShowProducts = ({ title, data }: props) => {
     console.log("show products", title);
     const { isloading, error } = useContext<DataProviderType>(DataProviderContext);
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
               <>
                    <h2>{title}</h2>
                    <S.ConteinerSlide>
                         {data && (
                              <>
                                   <S.Slide ref={Carrosel}>
                                        {data.map((item: any) => (
                                             <Card key={item.id} pokemon={item} />
                                        ))}
                                   </S.Slide>
                                   <button className="next btn_slide" onClick={handleScrollright}>
                                        <p>scrol to right</p>
                                        <BiRightArrow />
                                   </button>
                                   <button className="previous btn_slide" onClick={handleScrollleft}>
                                        <p>scrol to left</p>
                                        <BiLeftArrow />
                                   </button>
                              </>
                         )}
                         {error && <p>Ocorreu algum imprevisto! Tente novamente</p>}
                    </S.ConteinerSlide>
                    {isloading && <Loading width="100px" height="100px" />}
               </>
          </S.Conteiner>
     );
};

export default ShowProducts;
/**   */
