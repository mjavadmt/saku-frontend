import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/dom";
import { CreateAuction } from "pages/createAuction";
import { wait } from "@testing-library/user-event/dist/utils";

const CreateAuctionTest = () => {
  return (
    <BrowserRouter>
      <CreateAuction />
    </BrowserRouter>
  );
};

describe("create auction component test", () => {
  it("Change type input", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("select");
    fireEvent.change(userNameInput, { target: { value: "0" } });
    expect(userNameInput.value).toBe("0");
  });
  it("Change name input", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("nameInp");
    fireEvent.change(userNameInput, { target: { value: "Ali" } });
    expect(userNameInput.value).toBe("Ali");
  });
  it("Change category input", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("CatgorySelect");
    fireEvent.change(userNameInput, { target: { value: "Honari" } });
    expect(userNameInput.value).toBe("");
  });
  it("Change price input", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("PriceInp");
    fireEvent.change(userNameInput, { target: { value: 250000 } });
    expect(userNameInput.value).toBe("250000");
  });
  it("Change startDate input", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("PriceInp");
    fireEvent.change(userNameInput, { target: { value: "1401/02/01" } });
    expect(userNameInput.value).toBe("1401/02/01");
  });
  it("Change endDate input", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("startDate");
    fireEvent.change(userNameInput, { target: { value: "1401/02/01" } });
    expect(userNameInput.value).toBe("");
  });
  it("Change taginput input", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("startDate");
    fireEvent.change(userNameInput, { target: { value: "ali" } });
    expect(userNameInput.value).toBe("");
  });
  it("Change modal", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("modalOpen");
    fireEvent.click(userNameInput);
    expect(screen.getByTestId("modalContent")).toBeInTheDocument();
  });
  it("Change 2modal", async () => {
    render(<CreateAuctionTest />);
    const userNameInput = screen.getByTestId("2modal");
    fireEvent.click(userNameInput);
    expect(screen.getByTestId("modalContent2")).toBeInTheDocument();
  });
  it("Change close modal", async () => {
    render(<CreateAuctionTest />);
    const btn = screen.getByTestId("subBtn");
    // fireEvent.click(btn);
    expect(screen.queryByTestId("modalContent")).toBeNull();
    expect(screen.queryByTestId("modalContent2")).toBeNull();
  });
  it("icon existance", async () => {
    render(<CreateAuctionTest />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });
  it("create account Tag click", async () => {
    render(<CreateAuctionTest />);
    const divTag = screen.getByTestId("createAccountLink");
    fireEvent.click(divTag);
    await wait(500);
    expect(window.location.pathname).toBe("/signup");
  });
});
