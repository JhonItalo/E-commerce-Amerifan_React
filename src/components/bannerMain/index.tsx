import React, { useRef, useEffect } from "react";
import * as S from "./styles";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
                         <img src="/assets/banner/banner1.webp" alt="" />
                         <img src="/assets/banner/banner2.webp" alt="" />
                         <img src="/assets/banner/banner1.webp" alt="" />
                    </S.Slide>
                    <button className="next btn_slide" onClick={handleNextSlide}>
                         <p>next slide</p>
                         <IoIosArrowForward />
                    </button>
                    <button className="previous btn_slide" onClick={handlePreviousSlide}>
                         <p>previous slide</p>
                         <IoIosArrowBack />
                    </button>
               </S.ConteinerSlide>

               <S.Radios>
                    <button onClick={handleRadio1}>
                         <p>slide 1</p>
                    </button>
                    <button onClick={handleRadio2}>
                         <p>slide 2</p>
                    </button>
                    <button onClick={handleRadio3}>
                         <p>slide 3</p>
                    </button>
                    <button onClick={handleRadio1}>
                         <p>slide 4</p>
                    </button>
                    <button onClick={handleRadio2}>
                         <p>slide 5</p>
                    </button>
                    <button onClick={handleRadio3}>
                         <p>slide 6</p>
                    </button>
                    <button onClick={handleRadio1}>
                         <p>slide 7</p>
                    </button>
                    <button onClick={handleRadio2}>
                         <p>slide 8</p>
                    </button>
                    <button onClick={handleRadio3}>
                         <p>slide 9</p>
                    </button>
               </S.Radios>

               <div className="whiteRow"></div>
          </S.Banner>
     );
};

export default BannerMain;
