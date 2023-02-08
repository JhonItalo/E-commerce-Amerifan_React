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
