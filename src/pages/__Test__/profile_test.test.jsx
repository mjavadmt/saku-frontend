import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/dom";
import { wait } from "@testing-library/user-event/dist/utils";
import { waitFor } from "@testing-library/dom";
import { Profile } from "pages/profile";
import axios from "axios";
import { get } from "./../../utils/api";
import { login } from "requests/user";

const ProfileTest = () => {
  return (
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
};
describe("profile page test", () => {
  it("Email input onchange", async () => {
    render(<ProfileTest />);
    const emailInp = screen.getByTestId("emailInp");
    fireEvent.change(emailInp, { target: { value: "ali.alamdari@gmail.com" } });
    expect(emailInp.value).toBe("ali.alamdari@gmail.com");
  });
  it("Phone input onchange", async () => {
    render(<ProfileTest />);
    const phoneInp = screen.getByTestId("phoneInp");
    fireEvent.change(phoneInp, { target: { value: "09224519088" } });
    expect(phoneInp.value).toBe("09224519088");
  });
  it("address input onchange", async () => {
    render(<ProfileTest />);
    const addInp = screen.getByTestId("addInp");
    fireEvent.change(addInp, { target: { value: "Tehran" } });
    expect(addInp.value).toBe("Tehran");
  });
  it("render email", async () => {
    render(<ProfileTest />);
    const email = screen.getByTestId("emailInp");
    expect(email).toBeTruthy();
  });
  it("render address ", async () => {
    render(<ProfileTest />);
    const address = screen.getByTestId("phoneInp");
    expect(address).toBeTruthy();
  });
  // it("render address ", async () => {
  //   render(<ProfileTest />);
  //   const  pSelect = screen.getByTestId("personSelect");
  //   expect(pSelect).toBeInTheDocument();
  //   fireEvent.click(screen.getByText("حقیقی"));
  //   fireEvent.click(screen.getByText("حقوقی"));
  //   expect(pSelect.value).toBe("20");
  // });
  // it("Email must be valid", async () => {
  //   render(<ProfileTest />);
  //   const emailInp = screen.getByTestId("emailInp");
  //   const submitBtn = screen.getByTestId("submit-btn");
  //   fireEvent.change(emailInp, { target: { value: "ali.alamdarigmail.com" } });
  //   // fireEvent.click(submitBtn);
  //   login("Ali", "12341234").then(() => fireEvent.click(submitBtn));
  //   expect(await screen.f("مشکلی")).toBeInTheDocument();
  // });
  // it("", async () => {
  //   render(<ProfileTest />);
  //   const divTag = screen.getByTestId("submit-btn");
  //   fireEvent.click(divTag);
  //   await wait(500);
  //   expect(window.location.pathname).toBe("/profile");
  // });
});
