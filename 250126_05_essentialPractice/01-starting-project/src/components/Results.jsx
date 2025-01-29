import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ parameters }) {
  const result = calculateInvestmentResults(parameters);

  function littleCal(initialInv, annualInv, year) {
    return initialInv + annualInv * (year - 1);
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((element) => {
          const investedCapital = littleCal(
            parameters.initialInvestment,
            element.annualInvestment,
            element.year
          );

          return (
            <tr key={element.year}>
              <td>{element.year}</td>
              <td>{formatter.format(element.valueEndOfYear)}</td>
              <td>{formatter.format(investedCapital*(parameters.expectedReturn/100))}</td>
              <td>{formatter.format(element.interest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
