import PromotionSpan from "../../components/promotion";
import BannerMain from "../../components/bannerMain";
import ShowProducts from "../../components/showProducts";
import RegistrationOffers from "../../components/registrationOffers";
import SlideCategorys from "../../components/slideCategory";
import React, { useContext } from "react";
import { DataHomeContext } from "../../contexts/DataHomeProvider";

const HomeContent = () => {
     const { data } = useContext(DataHomeContext);
     return (
          <>
               <SlideCategorys />
               <PromotionSpan />
               <BannerMain />
               <div className="sections">
                    <ShowProducts title="Best Seller" data={data && data.bestSeller} />
                    <ShowProducts title="New products" data={data && data.newProducts} />
               </div>
               <RegistrationOffers />
          </>
     );
};

export default HomeContent;
