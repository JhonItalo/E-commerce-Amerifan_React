import { useEffect } from "react";
import useSmartphonesFetch from "../hooks/useSmartphonesFetch";
import CategoryContent from "../content/category";
import DataCategoryProvider from "../contexts/DataCategoryProvider";

const Smartphones = () => {
     console.log("smartphones render");
     const { data, isLoading, error } = useSmartphonesFetch();
     console.log(data);

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <DataCategoryProvider data={data} isloading={isLoading} error={error}>
               <CategoryContent name="smartphones" />
          </DataCategoryProvider>
     );
};

export default Smartphones;
