import { useQuery } from "react-query";
import { resolveListRequests } from "../request/MoveisRequest";

const useTelefoniaFetch = () => {
     return useQuery("MoveisFetch", resolveListRequests, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
          retry: 5,
     });
};

export default useTelefoniaFetch;
