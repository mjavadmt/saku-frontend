import AllQuestions from "components/Support/allQuestions";
import NewQuestion from "components/Support/newQuestion";
import React, { useState } from "react";

export const Support = (props) => {
  const [questionInput, setQuestionInput] = useState("");
  const [type, setType] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);

  return (
    <React.Fragment>
      <div className="mt-3">
        <NewQuestion
          type={type}
          setType={setType}
          questionInput={questionInput}
          setQuestionInput={setQuestionInput}
          setTrigger={setTrigger}
          trigger={trigger}
        />
      </div>
      <AllQuestions
        type={type}
        trigger={trigger}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </React.Fragment>
  );
};
