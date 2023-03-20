import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProductsFetch from "../hooks/useProductsFetch";
import useFirstRender from "../hooks/useFirstRender";
import ProductsContent from "../content/ProductsContent";

type Params = {
     params: string;
};

const Products = () => {
     const { params } = useParams<Params>() as Params;
     const { data, isLoading, error, refetch } = useProductsFetch({ params });
     const firstRender = useFirstRender();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     useEffect(() => {
          if (!firstRender) {
               refetch();
          }
     }, [params]);

     return (
          <>
               <ProductsContent data={data} isloading={isLoading} />
               {error && <p>Produto não existe</p>}
          </>
     );
};

export default Products;
