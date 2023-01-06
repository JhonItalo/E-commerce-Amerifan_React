import { useParams } from "react-router-dom";
import { useEffect } from "react";
import InfoProducts from "../components/infoProducts";
import useProductsFetch from "../hooks/useProductsFetch";
import useFirstRender from "../hooks/useFirstRender";
import Loading from "../components/loading";

type propsParams = {
     params: string;
};

const Products = () => {
     console.log("products render");
     const { params } = useParams<propsParams>();
     const { data, isLoading, refetch, error } = useProductsFetch({ params });
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
          <div
               style={{
                    minHeight: "150vh",
                    background: "white",
                    width: "100%",
                    padding: "1rem 1rem 1rem 2rem ",
               }}
          >
               {data && <InfoProducts pokemon={data} />}
               {isLoading && <Loading width="200px" height="200px" />}
               {error && <p>Produto não existe</p>}
          </div>
     );
};

export default Products;
