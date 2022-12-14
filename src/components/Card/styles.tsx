import styled from "styled-components";
import { colorTypes } from "../../utils/Constains";

export const Conteiner = styled.div`
     flex: none;
     width: 20%;
     height: 100%;
     padding: 1rem 0;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-radius: 16px;
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
     backdrop-filter: blur(4.4px);
     -webkit-backdrop-filter: blur(4.4px);
     background: rgba(255, 255, 255, 0.24);
     border: 1px solid rgba(255, 255, 255, 0.3);

     img {
          width: 60%;
          height: 50%;
     }
     .info {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          .name {
               text-transform: uppercase;
          }

          .type {
               display: flex;
               gap: 0.5rem;
               font-size: 0.9rem;
          }
     }
     button {
          margin-top: 2rem;
          padding: 0.5rem;
          border: none;
          border-radius: 10px;
     }
`;

interface propsType {
     color: string;
}
export const Type = styled.p<propsType>`
     padding: 0.5rem;
     color: white;
     background-color: ${({ color }) => {
          return colorTypes[color];
     }};
     text-transform: uppercase;
`;
