import { useQuery } from "react-query";
import { resolveListPromises } from "../request/HomeRequest";

const useHomeFetch = () => {
     return useQuery("HomeFetch", resolveListPromises, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false, //foco,
          retry: 5, // tentar novamente
     });
};

export default useHomeFetch;
