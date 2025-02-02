export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
          {/*
          onChange={()=>handleChange()} : onChange時新しい関数の生成。handelChange()に引数を渡せる
          onChange={handleChange} : 関数の参照(*住所)を直接渡す(新規生成などせん)。引数を渡せない。

          ~JSのEventHandlerの仕様~
            onChange={handleChange}のように関数の参照をした？
            ＝自動的にhandleChange(event)を呼び出す仕様である。
              つまり引数を制御できないという表現も正しいが、自動でeventが渡されているのだ。。
              で、渡したければこうすれば良い。。
              onChange{(event) => handleChange(event, "some args")}
            onChange={()=>handleChange()}の方法にした？
            ＝渡されるのは無名関数(arrowFunc)になる。
              無名関数だから定数/変数として存在したことがないはず。
              割り当てられたメモリ住所がないのでその度々作ることになる
           */}
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
