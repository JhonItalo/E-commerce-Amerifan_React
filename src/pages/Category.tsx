import ProductsByCategory from "../components/productsByCategory.tsx";
import DataProvider from "../contexts/DataProviderContext";
import useCategoryFetch from "../hooks/useCategoryFetch";

const Category = () => {
     const { data, isLoading, error } = useCategoryFetch();
     console.log("Category", data, "data");

     return (
          <DataProvider data={data} isloading={isLoading} error={error}>
               <ProductsByCategory />;
          </DataProvider>
     );
};

export default Category;
