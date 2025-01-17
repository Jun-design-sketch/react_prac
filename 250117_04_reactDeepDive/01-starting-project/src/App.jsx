import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  // 全ての関数と同じくJSもreactも複数の値をreturnできないため、わざわざdivで囲んでいる
  // divだけ無限に生えても仕方がないのでFragmentを使用できる。最新バージョンなら<></>だけで良い
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
