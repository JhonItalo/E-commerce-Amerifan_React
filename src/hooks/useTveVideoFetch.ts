import { useQuery } from "react-query";
import { resolveListRequests } from "../request/TveVideoRequest";

const useTveVideoFetch = () => {
     return useQuery("TveVideoFetch", resolveListRequests, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
          retry: 5,
     });
};

export default useTveVideoFetch;
