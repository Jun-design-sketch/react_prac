import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
      // +は単項プラス演算子(Unary Plus Operator)と呼ばれる。数値変換を行う役割を持っている。
      // 主に文字列→数値への変換
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {/*
        onChangeInput={handleChange}であれば。。
          関数の参照(関数そのもの)を渡すので複製せず。
          イベントオブジェクトが自動的にhandleChange(event)になる。
        onChangeInput={handelChange()}であれば。。
          関数の実行結果を渡している。
          レンダリング時点でhandleChange()が即時実行され、return値がonChangeInputに入っている。
       */}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
