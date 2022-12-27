import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import AccessibleName from "../AcessibleName";
import AccessibleButtonName from "../AcessibleButtonName";

const BannerMain = () => {
     const Carrosel = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          const automaticSlideTimer = setInterval(() => {
               if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
               } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
                    Carrosel.current.scrollLeft = Carrosel.current.offsetWidth * 2;
               } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth * 2) {
                    Carrosel.current.scrollLeft = 0;
               } else {
                    return;
               }
          }, 7000);

          return () => clearInterval(automaticSlideTimer);
     }, []);

     const handleNextSlide = () => {
          if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
          } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth * 2;
          } else {
               return;
          }
     };
     const handlePreviousSlide = () => {
          if (Carrosel.current && Carrosel.current.scrollLeft === 0) {
               return;
          } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth) {
               Carrosel.current.scrollLeft = 0;
          } else if (Carrosel.current && Carrosel.current.scrollLeft === Carrosel.current.offsetWidth * 2) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
          } else {
               return;
          }
     };
     const handleRadio1 = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = 0;
          }
     };
     const handleRadio2 = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth;
          }
     };
     const handleRadio3 = () => {
          if (Carrosel.current) {
               Carrosel.current.scrollLeft = Carrosel.current.offsetWidth * 2;
          }
     };

     return (
          <S.Banner>
               <S.ConteinerSlide className="conteinerSlide">
                    <S.Slide ref={Carrosel}>
                         <img src="/assets/banner/banner1.webp" alt="70% de desconto" width="100%" height="500px" />
                         <img src="/assets/banner/banner2.webp" alt="promoção Black Friday" width="100%" height="500px" />
                         <img src="/assets/banner/banner1.webp" alt="ganhe premios" width="100%" height="500px" />
                    </S.Slide>
                    <button className="next btn_slide" onClick={handleNextSlide}>
                         <AccessibleButtonName name="next slide" />
                         <IoIosArrowForward />
                    </button>
                    <button className="previous btn_slide" onClick={handlePreviousSlide}>
                         <AccessibleButtonName name="previous slide" />
                         <IoIosArrowBack />
                    </button>
               </S.ConteinerSlide>

               <S.Radios>
                    <button onClick={handleRadio1}>
                         <AccessibleButtonName name="slide 1" />
                    </button>
                    <button onClick={handleRadio2}>
                         <AccessibleButtonName name="slide 2" />
                    </button>
                    <button onClick={handleRadio3}>
                         <AccessibleButtonName name="slide 3" />
                    </button>
                    <button onClick={handleRadio1}>
                         <AccessibleButtonName name="slide 4" />
                    </button>
                    <button onClick={handleRadio2}>
                         <AccessibleButtonName name="slide 5" />
                    </button>
                    <button onClick={handleRadio3}>
                         <AccessibleButtonName name="slide 6" />
                    </button>
                    <button onClick={handleRadio1}>
                         <AccessibleButtonName name="slide 7" />
                    </button>
                    <button onClick={handleRadio2}>
                         <AccessibleButtonName name="slide 8" />
                    </button>
                    <button onClick={handleRadio3}>
                         <AccessibleButtonName name="slide 9" />
                    </button>
               </S.Radios>

               <div className="whiteRow"></div>
          </S.Banner>
     );
};

export default BannerMain;
