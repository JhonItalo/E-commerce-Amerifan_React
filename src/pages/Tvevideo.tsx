import { useEffect } from "react";
import CategoryContent from "../content/categoryContent";
import DataCategoryProvider from "../contexts/DataCategoryProvider";
import useTveVideoFetch from "../hooks/useTveVideoFetch";

const TveVideo = () => {
     console.log("Tv e video render");
     const { data, isLoading, error } = useTveVideoFetch();
     console.log(data);

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
