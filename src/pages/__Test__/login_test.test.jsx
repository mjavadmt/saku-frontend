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
    render(<LoginTest />);
    const username = screen.getByTestId("username");
    expect(username).toBeTruthy();
  });
  it("render password", async () => {
    render(<LoginTest />);
    const password = screen.getByTestId("password");
    expect(password).toBeTruthy();
  });
  it("Change userNamre input", async () => {
    render(<LoginTest />);
    const userNameInput = screen.getByTestId("username");
    fireEvent.change(userNameInput, { target: { value: "Ali_Alamdari" } });
    expect(userNameInput.value).toBe("Ali_Alamdari");
  });
  // it("create account Tag click", async () => {
  //   render(<LoginTest />);
  //   const divTag = screen.getByTestId("createAccountLink");
  //   fireEvent.click(divTag);
  //   await wait(500);
  //   expect(window.location.pathname).toBe("/signup");
  // });
});
