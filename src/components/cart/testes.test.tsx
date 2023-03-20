import { queryByText, render, screen } from "@testing-library/react";
import Cart from "./";
import CarrinhoContext, { CartContext } from "../../contexts/CartContext";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
     ...jest.requireActual("react-router-dom"),
     useLocation: () => ({
          pathname: "/telefonia",
     }),
}));

describe("cart correctly", () => {
     it("r", () => {
          render(
               <CarrinhoContext>
                    <Cart />
               </CarrinhoContext>,
               { wrapper: BrowserRouter }
          );
          screen.debug();
     });
});
