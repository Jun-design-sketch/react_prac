export default function Results({ parameters }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          {/* 投資された総価値 */}
          <th>Interest(Year)</th>
          {/* 当年の利子 */}
          <th>Total Interest</th>
          {/* 利子総額 */}
          <th>Invested Capital</th>
          {/* 投資された総額 */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>$17,100</td>
          <td>$900</td>
          <td>$900</td>
          <td>$16,200</td>
        </tr>
      </tbody>
    </table>
  );
}
