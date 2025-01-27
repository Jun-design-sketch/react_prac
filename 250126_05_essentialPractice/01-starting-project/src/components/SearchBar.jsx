import { useState } from "react";

export default function SearchBar(props) {
  // TODO: これらの状態は入力されると、resultsに反映されるべきなのでapp.jsxに移行
  // stateを分けるか？
  const [initialInvestment, setInitialInvestment] = useState(11000);
  const [annualInvestment, setAnnualInvestment] = useState(4800);
  const [expectReturn, setExpectReturn] = useState(1500);
  const [duration, setDuration] = useState(8);

  function handleInitialInvestmentValue(event) {
    setInitialInvestment(event.target.value);
  };

  return (
    <div id="user-input">
      <div className="input-group">
        <label>INITIAL INVESTMENT</label>
        {/* 初期投資額 */}
        <input
          type="text"
          required
          value={initialInvestment}
          onChange={handleInitialInvestmentValue}
        ></input>
        <label>ANNUAL INVESTMENT</label>
        {/* 年間投資額 */}
        <input type="text"></input>
      </div>
      <div className="input-group">
        <label>EXPECTED RETURN</label>
        {/* 期待収益 */}
        <input type="text"></input>
        <label>DURATION</label>
        {/* 経過期間 */}
        <input type="text"></input>
      </div>
    </div>
  );
}
