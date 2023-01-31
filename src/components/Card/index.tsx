import { Link } from "react-router-dom";
import AccessibleName from "../AcessibleName";
import * as S from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Card = ({ pokemon }: any) => {
     const { addToCart } = useContext(CartContext);
     return (
          <S.Conteiner style={{ flex: "none" }}>
               {pokemon && (
                    <>
                         <Link to={`/products/${pokemon.name}`}>
                              <AccessibleName name={`imagem do pokemon ${pokemon.name}`} />
                              <img
                                   src={pokemon.sprites.other.dream_world.front_default}
                                   alt={pokemon.name}
                                   width="140px"
                                   height="158px"
                              />
                         </Link>
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

                         <button className="addtocart" onClick={() => addToCart(pokemon.name, pokemon.image)}>
                              Add to Cart
                         </button>
                    </>
               )}
          </S.Conteiner>
     );
};

export default Card;
