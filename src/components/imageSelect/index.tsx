import { useState } from "react";

import * as S from "./styles";

type props = {
     pokemon: any;
};

const ImageSelect = ({ pokemon }: props) => {
     const [imageSelect, setImageSelect] = useState<string>("1");
     return (
          <S.Conteiner>
               <S.ButtonsSelect>
                    <S.Button active={imageSelect === "1"} onClick={() => setImageSelect("1")}>
                         <img src={pokemon.sprites.front_default} alt="" width="100%" height="100%" />
                    </S.Button>
                    <S.Button active={imageSelect === "2"} onClick={() => setImageSelect("2")}>
                         <img src={pokemon.sprites.back_default} alt="" width="100%" height="100%" />{" "}
                    </S.Button>
                    <S.Button active={imageSelect === "3"} onClick={() => setImageSelect("3")}>
                         <img src={pokemon.sprites.front_default} alt="" width="100%" height="100%" />
                    </S.Button>
               </S.ButtonsSelect>

               <S.ConteinerImage active={imageSelect}>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
               </S.ConteinerImage>
          </S.Conteiner>
     );
};

export default ImageSelect;
