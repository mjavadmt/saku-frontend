import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/dom";
import { SignUp } from "../signup";
import { wait } from "@testing-library/user-event/dist/utils";

const LoginTest = () => {
  return (
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );
};

describe("signup component test", () => {
  it("render username", async () => {
    render(<LoginTest />);
    const username = screen.getByTestId("username");
    expect(username).toBeTruthy();
  });
  it("render email", async () => {
    render(<LoginTest />);
    const email = screen.getByTestId("email");
    expect(email).toBeTruthy();
  });
  it("Change userNamre input", async () => {
    render(<LoginTest />);
    const userNameInput = screen.getByTestId("username");
    fireEvent.change(userNameInput, { target: { value: "Ali_Alamdari" } });
    expect(userNameInput.value).toBe("Ali_Alamdari");
  });
  it("login Tag click", async () => {
    render(<LoginTest />);
    const divTag = screen.getByTestId("loginLink");
    fireEvent.click(divTag);
    await wait(500);
    expect(window.location.pathname).toBe("/login");
  });
});
