import { Link } from "react-router-dom";
import AccessibleName from "../AcessibleName";
import ButtonAddCart from "../buttonAddCart";
import * as S from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ pokemon }: any) => {
     return (
          <S.Conteiner style={{ flex: "none" }}>
               {pokemon && (
                    <>
                         <Link to={`/products/${pokemon.name}`}>
                              <AccessibleName name={`imagem do pokemon ${pokemon.name}`} />
                              <LazyLoadImage
                                   src={pokemon.sprites.other.dream_world.front_default}
                                   alt={pokemon.name}
                                   width="140px"
                                   height="158px"
                                   loading="lazy"
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

                         <ButtonAddCart name={pokemon.name} image={`${pokemon.sprites.other.dream_world.front_default}`}>
                              Add to Cart
                         </ButtonAddCart>
                    </>
               )}
          </S.Conteiner>
     );
};

export default Card;
