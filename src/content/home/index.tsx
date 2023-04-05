import PromotionSpan from "../../components/promotion";
import BannerMain from "../../components/bannerMain";
import ShowProducts from "../../components/showProducts";
import RegistrationOffers from "../../components/registrationOffers";
import SlideCategorys from "../../components/slideCategory";
import { useContext } from "react";
import { DataHomeContext, DataHomeType } from "../../contexts/DataHomeProvider";
import BannerSecondary from "../../components/bannerSecondary";

const HomeContent = () => {
     const { data } = useContext<DataHomeType>(DataHomeContext);
  
     return (
          <>
               <SlideCategorys />
               <PromotionSpan />
               <BannerMain />
               <ShowProducts title="Best Seller" data={data && data.bestSeller} />
               <BannerSecondary />
               <ShowProducts title="New products" data={data && data.newProducts} />
               <RegistrationOffers />
          </>
     );
};

export default HomeContent;
/*


*/