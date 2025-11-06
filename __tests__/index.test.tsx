import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("render a link to the Next.js docs", () => {
    render(<Home />);
    
    const link = screen.getByRole("link", { name: /documentation →/i });
    expect(link).toHaveAttribute("href", "https://nextjs.org/docs");
  });
});
