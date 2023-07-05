import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { SignUp } from "../signup";
import { wait } from "@testing-library/user-event/dist/utils";

const SignUpTest = () => {
  return (
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );
};

describe("signup component test", () => {
  it("render username", async () => {
    render(<SignUpTest />);
    const username = screen.getByTestId("username");
    expect(username).toBeTruthy();
  });
  it("render email", async () => {
    render(<SignUpTest />);
    const email = screen.getByTestId("email");
    expect(email).toBeTruthy();
  });
  it("render password", async () => {
    render(<SignUpTest />);
    const password = screen.getByTestId("password");
    expect(password).toBeTruthy();
  });
  it("render re-password", async () => {
    render(<SignUpTest />);
    const re_password = screen.getByTestId("re-password");
    expect(re_password).toBeTruthy();
  });
  it("Change userNamre input", async () => {
    render(<SignUpTest />);
    const userNameInput = screen.getByTestId("username");
    fireEvent.change(userNameInput, { target: { value: "Ali_Alamdari" } });
    expect(userNameInput.value).toBe("Ali_Alamdari");
  });
  it("Change email input", async () => {
    render(<SignUpTest />);
    const email = screen.getByTestId("email");
    fireEvent.change(email, { target: { value: "abc@gmail.com" } });
    expect(email.value).toBe("abc@gmail.com");
  });
  it("Change password input", async () => {
    render(<SignUpTest />);
    const password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "12345678" } });
    expect(password.value).toBe("12345678");
  });
  it("Change re-password input", async () => {
    render(<SignUpTest />);
    const re_password = screen.getByTestId("re-password");
    fireEvent.change(re_password, {
      target: { value: "12345678" },
    });
    expect(re_password.value).toBe("12345678");
  });
  it("login Tag click", async () => {
    render(<SignUpTest />);
    const divTag = screen.getByTestId("loginLink");
    fireEvent.click(divTag);
    await wait(500);
    expect(window.location.pathname).toBe("/login");
  });
  it("signup Tag render", async () => {
    render(<SignUpTest />);
    const divTag = screen.getByTestId("sign-up");
    expect(divTag).toBeInTheDocument();
  });
  it("signup Tag click", async () => {
    render(<SignUpTest />);
    const divTag = screen.getByTestId("sign-up");
    const username = screen.getByTestId("username");
    const password = screen.getByTestId("password");

    fireEvent.click(divTag);
    expect(divTag.value).toBe("");
  });
});