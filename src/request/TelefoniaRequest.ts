
import {URL} from "../utils/Constains"

const generateArrayPromises = () => {
     const numberPokemons = 151;
     const fetchPokemons: any[] = [];
     for (let i = 1; i <= numberPokemons; i++) {
          fetchPokemons.push(
               fetch(`${URL}${i}`)
                    .then(async (response) => {
                         if (response.status != 200) {
                              const error = 1;
                              return Promise.reject(error);
                         }
                         return response.json();
                    })
                    .then((data) => {
                         const pokemon = {
                              name: data.name,
                              id: data.id,
                              image: data.sprites.other.dream_world.front_default,
                              types: data.types.map((pokemon: any) => pokemon.type.name)
                         }
                         return pokemon
                    })
                    .catch(() => {
                         const error = 1;
                         return error;
                    })
          );
     }
     return fetchPokemons;
};

const pokemonsListPromises = generateArrayPromises();

export const resolveListRequests = async () => {
     return Promise.all(pokemonsListPromises)
          .then((data) => {
               const pokemons: any[] = []
           data.forEach((item)=> {
               if(item === 1){
                    return
               }
               pokemons.push(item)
           })
           if(pokemons.length > 0){
               return pokemons
           } else{
            Promise.reject(true)   
           }

          })
       
};