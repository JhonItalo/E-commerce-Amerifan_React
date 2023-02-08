import { useQuery } from "react-query";
import { resolveListRequests } from "../request/EletrodomesticosRequest"

const useTelefoniaFetch = () => {
     return useQuery("EletrodomesticosFetch", resolveListRequests, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
          retry: 5,
     });
};

export default useTelefoniaFetch;
