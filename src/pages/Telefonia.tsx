import { useEffect } from "react";
import CategoryContent from "../components/categoryContent";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import useTelefoniaFetch from "../hooks/useTelefoniaFetch";

const Telefonia = () => {
     console.log("telefonia render");
     const { data, isLoading, error } = useTelefoniaFetch();
     console.log(data);

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
