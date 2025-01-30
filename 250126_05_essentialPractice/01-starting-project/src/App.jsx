import { useState } from "react";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Results from "./components/Results";

function App() {
  const [parameters, setParameters] = useState({
    initialInvestment: 11000,
    annualInvestment: 4800,
    expectedReturn: 5,
    duration: 8,
  });

  function handleChangeValue(event) {
    const { id, value } = event.target;
    setParameters((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  }

  return (
    <>
      <Header />
      <InputArea
        parameters={parameters}
        handleChangeValue={handleChangeValue}
      />
      <Results parameters={parameters} />
    </>
  );
}

export default App;
