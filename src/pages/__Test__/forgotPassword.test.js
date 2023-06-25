import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { ForgotPassword } from "pages/forgotPassword";

const LoginTest = () => {
  return (
    <BrowserRouter>
      <ForgotPassword />
    </BrowserRouter>
  );
};

describe("ForgotPassword component test", () => {
  it("render email", async () => {
    render(<LoginTest />);
    const email = screen.getByTestId("email");
    expect(email).toBeTruthy();
  });
  it("Change email input", async () => {
    render(<LoginTest />);
    const email = screen.getByTestId("email");
    fireEvent.change(email, { target: { value: "abc@gmail.com" } });
    expect(email.value).toBe("abc@gmail.com");
  });
  it("login Tag click", async () => {
    render(<LoginTest />);
    const divTag = screen.getByTestId("loginLink");
    fireEvent.click(divTag);
    await wait(500);
    expect(window.location.pathname).toBe("/login");
  });
  it("sign up Tag click", async () => {
    render(<LoginTest />);
    const divTag = screen.getByTestId("signupLink");
    fireEvent.click(divTag);
    await wait(500);
    expect(window.location.pathname).toBe("/signup");
  });
});