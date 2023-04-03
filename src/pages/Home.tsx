import { useEffect } from "react";
import useHomeFetch from "../hooks/useHomeFetch";
import DataHomeProvider from "../contexts/DataHomeProvider";
import HomeContent from "../content/home";

const Home = () => {
     const { data, isLoading, error } = useHomeFetch();

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <>
               <DataHomeProvider data={data} isloading={isLoading} error={error}>
                    <HomeContent />
               </DataHomeProvider>
          </>
     );
};

export default Home;
