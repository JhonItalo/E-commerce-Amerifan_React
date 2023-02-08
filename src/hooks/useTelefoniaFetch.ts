import { useQuery } from "react-query";
import { resolveListRequests } from "../request/TelefoniaRequest";

const useTelefoniaFetch = () => {
     return useQuery("TelefoniaFetch", resolveListRequests, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
          retry: 5,
     });
};

export default useTelefoniaFetch;
