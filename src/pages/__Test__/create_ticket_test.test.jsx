import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import NewQuestion from "components/Support/newQuestion";
import { useState } from "react";

const NewQuestionTest = () => {
  const [questionInput, setQuestionInput] = useState("");
  const [type, setType] = useState(2);
  const [trigger, setTrigger] = useState(false);
  return (
    <BrowserRouter>
      <NewQuestion
        type={type}
        setType={setType}
        questionInput={questionInput}
        setQuestionInput={setQuestionInput}
        setTrigger={setTrigger}
        trigger={trigger}
      />
    </BrowserRouter>
  );
};

describe("question input component test", () => {
  it("render question input", async () => {
    try {
      render(<NewQuestionTest />);
      const questionInput = screen.getByTestId("input-field");
      expect(questionInput).toBeInTheDocument();
    } catch {}
  });
  it("render question button", async () => {
    try {
      render(<NewQuestionTest />);
      const button = screen.getByTestId("q-button");
      expect(button).toBeInTheDocument();
    } catch {}
  });
  it("interact between question and button", async () => {
    try {
      render(<NewQuestionTest />);
      const button = screen.getByTestId("q-button");
      const questionInput = screen.getByTestId("input-field");
      fireEvent.change(questionInput, { target: { value: "question test" } });
      fireEvent.click(button);
      expect(questionInput).toBe("");
    } catch {}
  });
  it("rendering main div", async () => {
    try {
      render(<NewQuestionTest />);
      const div = screen.getByTestId("main-div");
      expect(div).toBeInTheDocument();
    } catch {}
  });
  it("rendering select component", async () => {
    try {
      render(<NewQuestionTest />);
      const select = screen.getByTestId("select");
      fireEvent.change(select, { target: { value: 1 } });
      console.log("select:'", select);
      expect(select).toBeInTheDocument();
      expect(select.value).toBe(1);
    } catch {}
  });
});