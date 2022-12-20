import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoProducts from "../components/infoProducts";
import useProductsFetch from "../hooks/useProductsFetch";
import useFirstRender from "../hooks/useFirstRender";

type propsParams = {
     params: string;
};

const Products = () => {
     console.log("products render");
     const { params } = useParams<propsParams>();
     const [name, setName] = useState<string | undefined>(params);
     const firstRender = useFirstRender();

     const { data, isLoading, refetch } = useProductsFetch({ name });

     useEffect(() => {
          if (firstRender === false) {
               setName(params);
               refetch();
          }
     }, [params]);

     return (
          <main
               style={{
                    background: "white",
                    width: "100%",
                    padding: "1rem 1rem 1rem 2rem ",
               }}
          >
               <InfoProducts pokemon={data} />
          </main>
     );
};

export default Products;
