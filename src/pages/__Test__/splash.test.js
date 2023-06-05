import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { Splash } from "../splash";
import { wait } from "@testing-library/user-event/dist/utils";

const SplashTest = () => {
  return (
    <BrowserRouter>
      <Splash />
    </BrowserRouter>
  );
};

describe("Splash component test", () => {
  it("render loading", async () => {
    render(<SplashTest />);
    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });
});
