import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("renders headline", () => {
    const title = "Hello, World!";
    render(<App title={title} />);
    expect(screen.getAllByText(title)).toBeTruthy();
  });
});
