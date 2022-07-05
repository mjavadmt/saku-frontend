import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/dom";
import { Splash } from "../splash";
import { wait } from "@testing-library/user-event/dist/utils";

const SplashTest = () => {
  return (
    <BrowserRouter>
      <Splash />
    </BrowserRouter>
  );
};

it("render CreateTable", async () => {
    render(<SplashTest />);
    const table = screen.getByTestId("createdTable"); 
    expect(table).toBeTruthy();
  });