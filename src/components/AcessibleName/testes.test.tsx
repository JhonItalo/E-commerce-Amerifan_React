import { render, screen } from "@testing-library/react";
import AccessibleName from "./";

describe("acessiblename Render corretctly", () => {
     const entrada = "entrada";
     it("veirfica se a props foi renderizada", () => {
          render(<AccessibleName name={entrada} />);
          expect(screen.queryByText(entrada)).toBeInTheDocument();
     });

     it("veirfica se a props é do tipo string", () => {
          render(<AccessibleName name={entrada} />);
          expect(typeof entrada).toBe("string");
     });
});
