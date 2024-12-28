import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    const ini = screen.getByRole("heading", {
      level: 1,
    });
    expect(ini.innerHTML).toMatch("Vite + React");
  });
});
