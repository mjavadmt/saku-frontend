import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { CreateAuction } from "pages/createAuction";

const CreateAuctionTest = () => {
  return (
    <BrowserRouter>
      <CreateAuction inTestEnvierment />
    </BrowserRouter>
  );
};

describe("create auction component test", () => {
  it("Change type input", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("select");
    fireEvent.change(userNameInput, { target: { value: "" } });
    expect(userNameInput.value).toBe("");
  });
  it("Change name input", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("nameInp");
    fireEvent.change(userNameInput, { target: { value: "Ali" } });
    expect(userNameInput.value).toBe("Ali");
  });
  it("Change category input", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("CategorySelect");
    fireEvent.change(userNameInput, { target: { value: "Honari" } });
    expect(userNameInput.value).toBe("");
  });
  it("Change price input", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("PriceInp");
    fireEvent.change(userNameInput, { target: { value: 250000 } });
    expect(userNameInput.value).toBe("250000");
  });
  it("Change startDate input", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("PriceInp");
    fireEvent.change(userNameInput, { target: { value: "1401/02/01" } });
    expect(userNameInput.value).toBe("1401/02/01");
  });
  it("Change endDate input", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("startDate");
    fireEvent.change(userNameInput, { target: { value: "1401/02/01" } });
    expect(userNameInput.value).toBe("");
  });
  it("Change taginput input", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("startDate");
    fireEvent.change(userNameInput, { target: { value: "ali" } });
    expect(userNameInput.value).toBe("");
  });
  it("Change modal", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("modalOpen");
    fireEvent.click(userNameInput);
    expect(screen.getByTestId("modalContent")).toBeInTheDocument();
  });
  it("Change 2modal", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const userNameInput = screen.getByTestId("2modal");
    fireEvent.click(userNameInput);
    expect(screen.getByTestId("modalContent2")).toBeInTheDocument();
  });
  it("Change close modal", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const btn = screen.getByTestId("subBtn");
    fireEvent.click(btn);
    expect(screen.queryByTestId("modalContent")).toBeNull();
    expect(screen.queryByTestId("modalContent2")).toBeNull();
  });
  it("icon existance", async () => {
    render(<CreateAuctionTest />, { flushUseEffects: false });
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });
});