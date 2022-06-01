import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/dom";
import { Login } from "../login";

const LoginTest = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe("Login component test", () => {
  it("render username", async () => {
    const { getByTestId } = render(<LoginTest />);
    const username = getByTestId("username");
    expect(username).toBeTruthy();
  });
  it("render password", async () => {
    const { getByTestId } = render(<LoginTest />);
    const password = getByTestId("password");
    expect(password).toBeTruthy();
  });
  // it("render btn", async () => {
  //   const { getByTestId } = render(<LoginTest />);
  //   const btn = getByTestId("button");
  //   fireEvent.click(btn);
  // });
});
