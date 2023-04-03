import PromotionSpan from "../../components/promotion";
import BannerMain from "../../components/bannerMain";
import ShowProducts from "../../components/showProducts";
import RegistrationOffers from "../../components/registrationOffers";
import SlideCategorys from "../../components/slideCategory";
import { useContext } from "react";
import { DataHomeContext } from "../../contexts/DataHomeProvider";
import BannerSecondary from "../../components/bannerSecondary";
import * as S from "./styles"
const HomeContent = () => {
     const { data } = useContext(DataHomeContext);
     console.log(data, "data");
     return (
          <>
               <SlideCategorys />
               <PromotionSpan />
               <BannerMain />
               <ShowProducts title="Best Seller" data={data && data.bestSeller} />
               <BannerSecondary />
               <ShowProducts title="New products" data={data && data.newProducts} />
               <S.Banner/>
               <RegistrationOffers />
          </>
     );
};

export default HomeContent;
/*


*/