export default function InputArea({ parameters, handleChangeValue }) {
  return (
    <div id="user-input">
      <div className="input-group">
        {/* TODO: 値を変えるとバグる */}
        <label>INITIAL INVESTMENT</label>
        <input
          id="initialInvestment"
          type="number"
          required
          value={parameters.initialInvestment}
          onChange={handleChangeValue}
        />
        <label>ANNUAL INVESTMENT</label>
        <input
          id="annualInvestment"
          type="number"
          required
          value={parameters.annualInvestment}
          onChange={handleChangeValue}
        />
      </div>
      <div className="input-group">
        <label>EXPECTED RETURN</label>
        <input
          id="expectedReturn"
          type="number"
          required
          value={parameters.expectedReturn}
          onChange={handleChangeValue}
        />
        <label>DURATION</label>
        <input
          id="duration"
          type="number"
          required
          value={parameters.duration}
          onChange={handleChangeValue}
        />
      </div>
    </div>
  );
}
