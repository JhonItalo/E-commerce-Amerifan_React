import useHomeFetch from "../hooks/useHomeFetch";
import Categorys from "../components/slideCategory";
import PromotionSpan from "../components/promotion";
import BannerMain from "../components/bannerMain";
import ShowProducts from "../components/showProducts";
import RegistrationOffers from "../components/registrationOffers";

const Home = () => {
     console.log("home renderizou");
     const { data, isLoading } = useHomeFetch();
     return (
          <main>
               <Categorys />
               <PromotionSpan />
               <BannerMain />
               <section>
                    <ShowProducts isLoading={isLoading} title="Best Seller" dataPokemons={data && data.bestSeller} />
                    <ShowProducts isLoading={isLoading} title="New products" dataPokemons={data && data.newProducts} />
               </section>
               <RegistrationOffers />
          </main>
     );
};

export default Home;
/**  */
