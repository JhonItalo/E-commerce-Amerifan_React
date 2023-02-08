import { useQuery } from "react-query";
import { resolveListRequests } from "../request/SmarthponesRequest";

const useSmartphonesFetch = () => {
     return useQuery("SmartphonesFetch", resolveListRequests, {
          staleTime: 1000 * 60 * 60,
          refetchOnWindowFocus: false,
          retry: 5,
     });
};

export default useSmartphonesFetch;
