import { useEffect } from "react";
import CategoryContent from "../content/categoryContent";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import useMoveis from "../hooks/useMoveis";

const Moveis = () => {
     console.log("Moveis render");
     const { data, isLoading, error } = useMoveis();
     console.log(data);

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
