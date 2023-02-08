import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProductsFetch from "../hooks/useProductsFetch";
import useFirstRender from "../hooks/useFirstRender";
import Loading from "../components/loading";
import ProductsContent from "../components/ProductsContent";

type Params = {
     params: string;
};

const Products = () => {
     console.log("products render");
     const { params } = useParams<Params>() as Params;
     const { data, isLoading, error, refetch } = useProductsFetch({ params });
     const firstRender = useFirstRender();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     useEffect(() => {
          if (firstRender === false) {
               refetch();
          }
     }, [params]);

     return (
          <>
               {data && <ProductsContent pokemon={data} />}
               {isLoading && <Loading width="200px" height="200px" />}
               {error && <p>Produto não existe</p>}
          </>
     );
};

export default Products;
