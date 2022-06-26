import { screen, render } from "@testing-library/react";
import { NavBar } from "../components";

describe("NavBar", () => {
  it("has a logo", () => {
    render(<NavBar />);

    const logo = screen.getByRole("logo", {
        name: /cF/i,
    });

    expect(logo).toBeInTheDocument();
  });
});
