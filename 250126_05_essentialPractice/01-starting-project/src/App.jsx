import { useState } from "react";
import { formatter } from "./util/investment";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
  const [parameters, setParameters] = useState({
    initialInvestment: 11000,
    annualInvestment: 4800,
    expectReturn: 1500,
    duration: 8,
  });

  function handleChangeValue(event) {
    const { id, value } = event.target;
    setParameters((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  return (
    <>
      <Header />
      <SearchBar
        parameters={parameters}
        handleChangeValue={handleChangeValue}
      />
      <Results
        parameters={parameters}
      />
    </>
  );
}

export default App;
