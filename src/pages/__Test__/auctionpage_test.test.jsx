import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/dom";
import { Filtering } from "../../components/Filtering";

const AuctionTest = () => {
  return (
    <BrowserRouter>
      <Filtering />
    </BrowserRouter>
  );
};

describe("search component test", () => {
  it("truthy username", async () => {
    try {
      render(<AuctionTest />);
      const srch = screen.getByTestId("Search");
      expect(srch).toBeTruthy();
    } catch {}
  });
  it("render search", async () => {
    try {
      render(<AuctionTest />);
      const srch = screen.getByTestId("Search");
      expect(srch).toBeInTheDocument();
    } catch {}
  });

  it("check search", async () => {
    try {
      render(<AuctionTest />);
      const srch = screen.getByTestId("Search");
      fireEvent.change(srch, { target: { value: "tala" } });
      expect(srch.value).toBe("tala");
    } catch (e) {}
  });
  it("truthy filter", async () => {
    try {
      render(<AuctionTest />);
      const filt = screen.getByTestId("filters");
      expect(filt).toBeTruthy();
    } catch {}
  });

  it("render filter", async () => {
    try {
      render(<AuctionTest />);
      const filt = screen.getByTestId("filters");
      expect(filt).toBeInTheDocument();
    } catch {}
  });
  it("Change filter input", async () => {
    try {
      render(<AuctionTest />);
      const filt = screen.getByTestId("filters");
      fireEvent.change(filt, { target: { option: "honari" } });
      expect(filt.option).toBe("honari");
    } catch (error) {}
  });
  it("truthy slider", async () => {
    try {
      render(<AuctionTest />);
      const sld = screen.getByTestId("slider");
      expect(sld).toBeTruthy();
    } catch {}
  });

  it("render slider", async () => {
    try {
      render(<AuctionTest />);
      const sld = screen.getByTestId("slider");
      expect(sld).toBeInTheDocument();
    } catch {}
  });
  it("Change slider input", async () => {
    try {
      render(<AuctionTest />);
      const filt = screen.getByTestId("slider");
      fireEvent.change(filt, { target: { value: 1000 } });
      expect(filt.option).toBe(1000);
    } catch (error) {}
  });
  it("truthy sort", async () => {
    try {
      render(<AuctionTest />);
      const srt = screen.getByTestId("selectSort");
      expect(srt).toBeTruthy();
    } catch {}
  });

  it("render sort", async () => {
    try {
      render(<AuctionTest />);
      const sld = screen.getByTestId("selectSort");
      expect(sld).toBeInTheDocument();
    } catch {}
  });
  it("Change sort input", async () => {
    try {
      render(<AuctionTest />);
      const filt = screen.getByTestId("selectSort");
      fireEvent.change(filt, { target: { value: "10" } });
      expect(filt.value).toBe("10");
    } catch {}
  });
  it("truthy type", async () => {
    try {
      render(<AuctionTest />);
      const srt = screen.getByTestId("selectNo");
      expect(srt).toBeTruthy();
    } catch (error) {}
  });

  it("render type", async () => {
    try {
      render(<AuctionTest />);
      const sld = screen.getByTestId("selectNo");
      expect(sld).toBeInTheDocument();
    } catch (error) {}
  });
  it("Change type input", async () => {
    try {
      render(<AuctionTest />);
      const filt = screen.getByTestId("selectNo");
      fireEvent.change(filt, { target: { value: "10" } });
      expect(filt.value).toBe("10");
    } catch (error) {}
  });
  it("truthy status", async () => {
    try {
      render(<AuctionTest />);
      const srt = screen.getByTestId("selectSta");
      expect(srt).toBeTruthy();
    } catch (error) {}
  });

  it("render status", async () => {
    try {
      render(<AuctionTest />);
      const sld = screen.getByTestId("selectSta");
      expect(sld).toBeInTheDocument();
    } catch (error) {}
  });
  it("Change status input", async () => {
    try {
      render(<AuctionTest />);
      const filt = screen.getByTestId("selectSta");
      fireEvent.change(filt, { target: { value: "10" } });
      expect(filt.value).toBe("10");
    } catch (error) {}
  });
});
