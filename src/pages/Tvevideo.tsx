import { useEffect } from "react";
import CategoryContent from "../content/categoryContent";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import useTveVideoFetch from "../hooks/useTveVideoFetch";

const TveVideo = () => {
   
     const { data, isLoading, error } = useTveVideoFetch();
     

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <DataCategoryProvider data={data} isloading={isLoading} error={error}>
               <CategoryContent name="Tv e Vídeo" />
          </DataCategoryProvider>
     );
};

export default TveVideo;
