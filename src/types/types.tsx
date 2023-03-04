export type pokemonSmall = {
     name: string;
     url: string;
};
export type pokemonInfo = {
     name: string;
     id: number;
     image: string;
     types: string[];
};

export type storageType = {
     name: string;
     image: string;
     count: number;
};

export type DataProviderType = {
     data: pokemonInfo[] | undefined;
     isloading: boolean | undefined;
     error: boolean | unknown | undefined;
};

export interface user {
     email?: string;
     token?: string;
}

export type cepType = {
     cep: string;
     logradouro: string;
     complemento: string;
     bairro: string;
     localidade: string;
     uf: string;
     ibge: string;
     gia: string;
     ddd: string;
     siafi: string;
};

