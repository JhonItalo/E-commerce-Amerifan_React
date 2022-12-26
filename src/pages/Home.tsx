import useHomeFetch from "../hooks/useHomeFetch";
import Categorys from "../components/slideCategory";
import PromotionSpan from "../components/promotion";
import BannerMain from "../components/bannerMain";
import ShowProducts from "../components/showProducts";
import RegistrationOffers from "../components/registrationOffers";
import Footer from "../layouts/footer";

const Home = () => {
     console.log("home renderizou");
     const { data, isLoading } = useHomeFetch();
     return (
          <main>
               <Categorys />
               <PromotionSpan />
               <BannerMain />
               <section>
                    <ShowProducts title="Best Seller" isLoading={isLoading} dataPokemons={data && data.bestSeller} />
                    <ShowProducts title="New products" isLoading={isLoading} dataPokemons={data && data.newProducts} />
               </section>
               <RegistrationOffers />
          </main>
     );
};

export default Home;
