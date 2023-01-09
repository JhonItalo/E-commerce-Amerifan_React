import useHomeFetch from "../hooks/useHomeFetch";
import Categorys from "../components/slideCategory";
import PromotionSpan from "../components/promotion";
import BannerMain from "../components/bannerMain";
import ShowProducts from "../components/showProducts";
import RegistrationOffers from "../components/registrationOffers";
import DataProvider from "../contexts/DataProviderContext";

const Home = () => {
     console.log("home renderizou");
     const { data, isLoading, error } = useHomeFetch();
     return (
          <>
               <Categorys />
               <PromotionSpan />
               <BannerMain />
               <DataProvider data={data} isloading={isLoading} error={error}>
                    <section>
                         <ShowProducts title="Best Seller" data={data?.bestSeller} />
                         <ShowProducts title="New products" data={data?.newProducts} />
                    </section>
               </DataProvider>
               <RegistrationOffers />
          </>
     );
};

export default Home;
