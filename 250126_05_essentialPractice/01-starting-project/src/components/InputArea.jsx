export default function InputArea({ parameters, handleChangeValue }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label>INITIAL INVESTMENT</label>
        {/* 初期投資額 */}
        <input
          id="initialInvestment"
          type="text"
          required
          value={parameters.initialInvestment}
          onChange={handleChangeValue}
        />
        <label>ANNUAL INVESTMENT</label>
        {/* 年間投資額 */}
        <input
          id="annualInvestment"
          type="text"
          required
          value={parameters.annualInvestment}
          onChange={handleChangeValue}
        />
      </div>
      <div className="input-group">
        <label>EXPECTED RETURN</label>
        {/* 期待収益 */}
        <input
          id="expectedReturn"
          type="text"
          required
          value={parameters.expectedReturn}
          onChange={handleChangeValue}
        />
        <label>DURATION</label>
        {/* 経過期間 */}
        <input
          id="duration"
          type="text"
          required
          value={parameters.duration}
          onChange={handleChangeValue}
        />
      </div>
    </div>
  );
}
