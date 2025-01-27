import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
  const [] = useState();
  return (
    // <body>を使ってはあかん。。
    <>
      <Header />
      <SearchBar formatter={formatter} />
      <Results />
    </>
  );
}

export default App;
