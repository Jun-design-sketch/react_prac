// props: key-value fairs
// function CoreConcept(props) {
  export default function CoreConcept({title, description, image}) { // de-structuring single variable
    return (
      <li>
        <img src={image} alt="..." />
        <h3>{title}</h3>
        <h4>{description}</h4>
      </li>
    );
  }

// memo for state
// 1 immutable && one-way data flow
// 既存のstateから派生する値はstateにせず、計算し明示的処理
// 2 state minimization
// stateは最小限に維持する
// 3 memoization && optimization
// useMemo()Hookにより、依存性が変わる時のみ値を再計算する
// 4 Dericed State Anti-pattern
// stateを基盤とし他のstateを計算・管理すること。stateの同期化問題が発生し得るため、
// 1や3のやり方に従う