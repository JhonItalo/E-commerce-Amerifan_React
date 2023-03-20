import { render, screen } from "@testing-library/react";
import AccessibleButtonName from "./";

describe("AccessibleButtonName Render corretctly", () => {
     const entrada = "entrada";
     it("veirfica se a props foi renderizada", () => {
          render(<AccessibleButtonName name={entrada} />);
          expect(screen.queryByText(entrada)).toBeInTheDocument();
     });

     it("veirfica se a props é do tipo string", () => {
          render(<AccessibleButtonName name={entrada} />);
          expect(typeof entrada).toBe("string");
     });
});
