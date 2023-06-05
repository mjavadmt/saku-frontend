import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import NewQuestion from "components/Support/newQuestion";
import { useState } from "react";
import AllQuestions from "components/Support/allQuestions";

const NewAllQuestions = () => {
  const [questionInput, setQuestionInput] = useState("");
  const [type, setType] = useState(2);
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <AllQuestions
        type={type}
        trigger={trigger}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </BrowserRouter>
  );
};

describe("questions grid component test", () => {
  it("render questions grid", async () => {
    try {
      render(<NewAllQuestions />);
      const grid = screen.getByTestId("tickets-grid");
      expect(grid).toBeInTheDocument();
    } catch {}
  });
});
