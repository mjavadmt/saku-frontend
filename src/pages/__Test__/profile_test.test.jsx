import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/dom";
import { Profile } from "pages/profile";

const ProfileTest = () => {
  return (
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
};
describe("profile page test", () => {
  it("Email input onchange", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const emailInp = screen.getByTestId("emailInp");
    fireEvent.change(emailInp, { target: { value: "ali.alamdari@gmail.com" } });
    expect(emailInp.value).toBe("ali.alamdari@gmail.com");
  });
  it("Phone input onchange", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const phoneInp = screen.getByTestId("phoneInp");
    fireEvent.change(phoneInp, { target: { value: "09224519088" } });
    expect(phoneInp.value).toBe("09224519088");
  });
  it("address input onchange", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const addInp = screen.getByTestId("addInp");
    fireEvent.change(addInp, { target: { value: "Tehran" } });
    expect(addInp.value).toBe("Tehran");
  });
  it("render email", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const email = screen.getByTestId("emailInp");
    expect(email).toBeTruthy();
  });
  it("render address", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const address = screen.getByTestId("phoneInp");
    expect(address).toBeTruthy();
  });
});
