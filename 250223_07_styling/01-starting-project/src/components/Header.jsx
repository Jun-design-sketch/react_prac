import logo from '../assets/logo.png';
import classes from '../Header.module.css';
// VanillaCSS
// cssFile
// 分業しやすい
// Component毎にscopeされていないため競合し得る。= ファイルを分けても１つのファイルのようになってしまう。。
// どうscopeする？

// inline
// Scopeできる。が、jsxとcssが混在する。
// 一々要素毎にスタイルをつけないといけなくなる

// .module.cssをimportし、cssファイル内のものを指定して使用することで
// モジュール単位のCSS適用が容易になる
// ただ、小さいCSSファイルが散らばるかも知れない

// StyledComponent
// styleをcomponentから管理する
// npm install styled-components
export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
