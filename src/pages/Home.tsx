import { useEffect } from "react";
import useHomeFetch from "../hooks/useHomeFetch";
import PromotionSpan from "../components/promotion";
import BannerMain from "../components/bannerMain";
import ShowProducts from "../components/showProducts";
import RegistrationOffers from "../components/registrationOffers";
import DataProvider from "../contexts/DataProviderContext";
import SlideCategorys from "../components/slideCategory";

const Home = () => {
     console.log("home renderizou");
     const { data, isLoading, error } = useHomeFetch();
     console.log(data, "data");

     useEffect(() => {
          window.scrollTo(0, 0);
     }, []);

     return (
          <>
               <SlideCategorys />
               <PromotionSpan />
               <BannerMain />
               <DataProvider data={data} isloading={isLoading} error={error}>
                    <div className="sections">
                         <ShowProducts title="Best Seller" data={data?.bestSeller} />
                         <ShowProducts title="New products" data={data?.newProducts} />
                    </div>
               </DataProvider>
               <RegistrationOffers />
          </>
     );
};

export default Home;
