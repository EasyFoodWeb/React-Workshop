import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //const step = 1;
  return <Steps />;
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setStep((x) => (x > 1 ? x - 1 : x));
  }
  function handleNext() {
    setStep((x) => (x < 3 ? x + 1 : x));
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
          setStep(1);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="button">
            <Button
              textColor="#fff"
              bkColor="#7950f2"
              onClickHandler={handlePrevious}
            >
              {" "}
              <span>👈</span> Previous
            </Button>
            <Button
              textColor="#fff"
              bkColor="#7950f2"
              onClickHandler={handleNext}
            >
              Next <span>👉</span>{" "}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

function Button({ textColor, bkColor, onClickHandler, children }) {
  return (
    <button
      style={{ backgroundColor: bkColor, color: textColor }}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}
