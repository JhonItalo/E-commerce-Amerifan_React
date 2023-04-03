import { useEffect } from "react";
import CategoryContent from "../content/category";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import useMoveis from "../hooks/useMoveis";

const Moveis = () => {
     const { data, isLoading, error } = useMoveis();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <DataCategoryProvider data={data} isloading={isLoading} error={error}>
               <CategoryContent name="moveis" />
          </DataCategoryProvider>
     );
};

export default Moveis;
