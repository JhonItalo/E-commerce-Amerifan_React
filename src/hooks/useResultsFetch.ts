import { useQuery } from "react-query";
import {ResultsRequest} from "../request/ResultsRequest"

type props = {
     params: string;
};

const useResultsFetch = ({params}: props) => {

     return useQuery(`results${params}`, ()=> ResultsRequest(params), {
          staleTime: 1000 * 60 * 60,
          retry: 0,
     });
};

export default useResultsFetch;