import { useQuery } from "react-query";
import { resolveListPromises } from "../request/CategoryRequest";

const useCategoryFetch = () => {
     return useQuery("CategoryFetch", resolveListPromises, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
          retry: 5,
     });
};

export default useCategoryFetch;
