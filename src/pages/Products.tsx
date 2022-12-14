import { useParams } from "react-router-dom";
import useProductsFetch from "../hooks/useProductsFetch";

type po = {
     name: string;
};

const Products = () => {
     const { name } = useParams<po>();
     const { data, isLoading } = useProductsFetch({ name });
     console.log(data);

     return <div style={{ color: "white", width: "50%", height: "400px" }}>{data && data.name}</div>;
};

export default Products;
