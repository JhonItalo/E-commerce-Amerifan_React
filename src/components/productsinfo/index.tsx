import React from "react";
import * as S from "./styles";
import ButtonAddCart from "../buttonAddCart/index";

type props = {
     pokemon: any;
};

const ProductsInfo = ({ pokemon }: props) => {
     return (
          <S.Conteiner>
               <S.TitleType>
                    <h2 className="title">{pokemon.name}</h2>
                    <div className="type">
                         {pokemon.types.map((pokemon: any) => (
                              <S.ColorType color={pokemon.type.name} key={pokemon.type.name}>
                                   {pokemon.type.name}
                              </S.ColorType>
                         ))}
                    </div>
               </S.TitleType>

               <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer laoreet et
                    libero non viverra. Sed tincidunt lorem eget velit iaculis fringilla. Praesent sit amet interdum urna. Vivamus
                    in fringilla massa. Fusce urna tellus, aliquam et lorem quis, cursus ullamcorper neque. In rutrum cursus enim
                    id facilisis. In tempor est eget magna suscipit, ac mollis enim vehicula.
               </p>

               <S.ColorSelect>
                    <span>Color</span>
                    <div>
                         <button style={{ background: "white" }}>
                              <p>red</p>
                         </button>
                         <button style={{ background: "blue" }}>
                              <p>green</p>
                         </button>
                         <button style={{ background: "green" }}>
                              <p>blue</p>
                         </button>
                         <button style={{ background: "yellow" }}>
                              <p>brown</p>
                         </button>
                         <button style={{ background: "red" }}>
                              <p>yellow</p>
                         </button>
                    </div>
               </S.ColorSelect>
               <S.SizeSelect>
                    <span>Size</span>
                    <div>
                         <button>s</button>
                         <button>m</button>
                         <button>l</button>
                         <button>xl</button>
                         <button>xxl</button>
                    </div>
               </S.SizeSelect>
               <S.Addtocart>
                    <ButtonAddCart name={pokemon.name} image={pokemon.sprites.other.dream_world.front_default}>
                         Add to Cart
                    </ButtonAddCart>
               </S.Addtocart>
               <S.Frete>
                    <span>Calcule o frete e prazo de entrega</span>
                    <div>
                         <input type="text" placeholder="____-__" />
                         <button>Consultar</button>
                    </div>
               </S.Frete>
          </S.Conteiner>
     );
};

export default ProductsInfo;
