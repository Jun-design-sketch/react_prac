import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
// template literal... blahblah``
// styledComponentsを用いることで
// CSS属性を有するComponentを宣言できるようになる。
// camelCaseせんともよい
// これもscopedされたものとして使える。
const CustomComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

// styledComponentsは動的に使用できないのか？
// できる
// styledComponentsはchildren propを持たないので<>の間にものを囲むことが可能
// また、持っているpropを元となる要素に伝達する。

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <CustomComponent>
        <Input
          label="email"
          $invalid={emailNotValid}
          type="email"
          className={emailNotValid ? "invalid" : undefined}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          label="password"
          type="password"
          $invalid={passwordNotValid}
          className={passwordNotValid ? "invalid" : undefined}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </CustomComponent>
      <div className="actions">
        {/* <button type="button" className="text-button"> */}
        <Button>Create a new account</Button>
        {/* </button> */}
        {/* <button className="button" onClick={handleLogin}> */}
        <Button>Sign In</Button>
        {/* </button> */}
      </div>
    </div>
  );
}
