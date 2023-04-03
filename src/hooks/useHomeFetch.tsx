import { useQuery } from "react-query";
import { resolveListRequests } from "../request/HomeRequest";

const useHomeFetch = () => {
     return useQuery("HomeFetch", resolveListRequests, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
          retry: false,
     });
};

export default useHomeFetch;
