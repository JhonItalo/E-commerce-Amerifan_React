import { useEffect } from "react";
import CategoryContent from "../content/category";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import useTelefoniaFetch from "../hooks/useTelefoniaFetch";

const Telefonia = () => {
    
     const { data, isLoading, error } = useTelefoniaFetch();
    

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <DataCategoryProvider data={data} isloading={isLoading} error={error}>
               <CategoryContent name="telefonia" />
          </DataCategoryProvider>
     );
};

export default Telefonia;
