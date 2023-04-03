import { useEffect } from "react";
import CategoryContent from "../content/category";
import DataCategoryProvider from "../contexts/DataCategoryProvider";

import useEletrodomesticosFetch from "../hooks/useEletrodomesticosFetch";

const Eletrodomesticos = () => {
     console.log("telefonia render");
     const { data, isLoading, error } = useEletrodomesticosFetch();
     console.log(data);

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <DataCategoryProvider data={data} isloading={isLoading} error={error}>
               <CategoryContent name="eletrodomesticos" />
          </DataCategoryProvider>
     );
};

export default Eletrodomesticos;
