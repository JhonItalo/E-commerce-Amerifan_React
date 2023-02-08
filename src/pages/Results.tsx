import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFirstRender from "../hooks/useFirstRender";
import Loading from "../components/loading";
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
          <div
               style={{
                    minHeight: "150vh",
                    background: "white",
                    width: "100%",
                    padding: "1rem 1rem 1rem 2rem ",
               }}
          >
               {data && <ResultsContent data={data} input={params} />}
               {isLoading && <Loading width="200px" height="200px" />}
               {error && <p>Produto não existe</p>}
          </div>
     );
};

export default Results;
