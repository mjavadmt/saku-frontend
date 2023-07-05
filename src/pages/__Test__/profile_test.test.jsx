import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { Profile } from "pages/profile";

const ProfileTest = () => {
  return (
    <BrowserRouter>
      <Profile inTestEnvierment={true} />
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
  it("National code input onchange", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const ncode = screen.getByTestId("nCode");
    fireEvent.change(ncode, { target: { value: "044028375" } });
    expect(ncode.value).toBe("044028375");
  });
  it("render email", async () => {
    render(<ProfileTest />);
    const email = screen.getByTestId("emailInp");
    expect(email).toBeInTheDocument();
  });
  it("render national code", async () => {
    render(<ProfileTest />);
    const ncode = screen.getByTestId("nCode");
    expect(ncode).toBeInTheDocument();
  });
  it("render address", async () => {
    render(<ProfileTest />);
    const address = screen.getByTestId("phoneInp");
    expect(address).toBeInTheDocument();
  });
  it("checking be in the document ", async () => {
    render(<ProfileTest />);
    const headers = screen.getByTestId("cardHead");
    expect(headers).toBeInTheDocument();
  });
  it("render nameinput ", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const name = screen.getByTestId("nameinp");
    expect(name).toBeInTheDocument();
    fireEvent.change(name, { target: { value: "ali" } });
    expect(name.value).toBe("ali");
  });
  it("Change type input", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("selectPer");
    fireEvent.change(userNameInput, { target: { value: "20" } });
    expect(userNameInput.value).toBe("20");
    expect(userNameInput.value).not.toBe("10");
  });
  it("render state input", async () => {
    render(<ProfileTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("select-state");
    expect(userNameInput).toBeInTheDocument();
  });
});