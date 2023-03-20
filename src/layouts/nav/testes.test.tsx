import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Nav from "../nav/index";

jest.mock("react-router-dom", () => ({
     ...jest.requireActual("react-router-dom"),
     useLocation: () => ({
          pathname: "/telefonia",
     }),
}));

describe("varifica se o menu de naveçãcao foi renderizado", () => {
     it("link renederizados corretamente", () => {
          render(
               <MemoryRouter initialEntries={["/telefonia"]}>
                    <Nav />
               </MemoryRouter>
          );
          expect(screen.queryByText("Telefonia")).toBeInTheDocument();
          expect(screen.queryByText("Departamentos")).toBeInTheDocument();
          expect(screen.queryByText("Smartphones")).toBeInTheDocument();
          expect(screen.queryByText("Movéis")).toBeInTheDocument();
          expect(screen.queryByText("Eletrodomésticos")).toBeInTheDocument();
     });
});

describe("verifica se a borda foi ativada corretamente quando elemento esta ativado", () => {
     it("link Telefonia active border", () => {
          render(<Nav />, { wrapper: BrowserRouter });
          const q1 = screen.queryByText("Telefonia");
          expect(q1).toHaveClass("active");
     });
});
