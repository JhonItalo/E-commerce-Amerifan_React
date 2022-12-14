import styled from "styled-components";

export const Conteiner = styled.div`
     width: 100%;
     height: 20vh;
     position: relative;
`;
export const ConteinerSlide = styled.div`
     width: 75%;
     height: 100%;
     margin: 0 auto;
     position: relative;

     button {
          border: none;
          background-color: transparent;
          transform: translate(0, -50%);
          position: absolute;
          font-size: 2rem;
          color: white;
     }
     .next {
          top: 50%;
          right: -5%;
     }
     .previous {
          top: 50%;
          left: -5%;
     }
`;
export const Slide = styled.div`
     width: 100%;
     height: 100%;
     margin: 0 auto;
     display: flex;
     overflow-x: auto;

     &::-webkit-scrollbar {
          display: none;
     }
     .item {
          flex: none;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          a {
               img {
                    width: 100px;
                    height: auto;
               }
               .ball {
                    transform: scale(0.8);
               }
          }
     }
`;
