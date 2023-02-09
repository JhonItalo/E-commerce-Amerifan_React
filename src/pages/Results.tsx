import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFirstRender from "../hooks/useFirstRender";
import useResultsFetch from "../hooks/useResultsFetch";
import ResultsContent from "../components/resultsContent";

type Params = {
     params: string;
};

const Results = () => {
     console.log("results render");
     const { params } = useParams<Params>() as Params;
     const { data, isLoading, error, refetch } = useResultsFetch({ params });
     const firstRender = useFirstRender();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     useEffect(() => {
          if (firstRender === false) {
               refetch();
          }
     }, [params]);

     return (
          <>
               <ResultsContent data={data} isloading={isLoading} input={params} />
               {error && <p>Produto não existe</p>}
          </>
     );
};

export default Results;
