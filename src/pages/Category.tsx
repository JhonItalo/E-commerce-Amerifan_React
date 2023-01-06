import { useEffect } from "react";
import ProductsByCategory from "../components/productsByCategory.tsx";
import DataProvider from "../contexts/DataProviderContext";
import useCategoryFetch from "../hooks/useCategoryFetch";

const Category = () => {
     const { data, isLoading, error } = useCategoryFetch();
     console.log("Category", data, "data");

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <DataProvider data={data} isloading={isLoading} error={error}>
               <ProductsByCategory />;
          </DataProvider>
     );
};

export default Category;
