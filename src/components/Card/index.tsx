import React from "react";
import ButtonAddCart from "../buttonAddCart";
import * as S from "./styles";

const Card = ({ pokemon }: any) => {
     //console.log(pokemon, "dentro do card pokemons");
     return (
          <S.Conteiner>
               {pokemon && (
                    <>
                         <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
                         <div className="info">
                              <p className="name">{pokemon.name}</p>
                              <div className="type">
                                   {pokemon.types.map((pokemon: any) => (
                                        <S.Type color={pokemon.type.name} key={pokemon.type.name}>
                                             {pokemon.type.name}
                                        </S.Type>
                                   ))}
                              </div>
                         </div>

                         <ButtonAddCart
                              name={pokemon.name}
                              id={pokemon.id}
                              image={`${pokemon.sprites.other.dream_world.front_default}`}
                         >
                              Add to Cart
                         </ButtonAddCart>
                    </>
               )}
          </S.Conteiner>
     );
};

export default Card;
