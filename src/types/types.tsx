export type pokemonSmall = {
     name: string;
     url: string;
};

export type DataProviderType = {
     data: any | undefined;
     isloading: boolean | undefined;
     error: boolean | unknown | undefined;
};
