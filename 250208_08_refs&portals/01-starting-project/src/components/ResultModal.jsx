import { useImperativeHandle, useRef } from "react";
// React19以前ならfowardRefする必要がある
export default function ResultModal({ ref, result, targetTime }) {
  const dialog = useRef();
  // コンポネントの外部に見せたい時
  // useImperativeHandleは、親コンポーネントから子コンポーネント特定のメソッドを直接呼び出せるようにすること。
  // propsは親から子へデータや関数を渡せる。が、useImperativeHandleは子供から親へ何かを公開できる。
  // 親：useRefを作成し、子どもにrefとして渡す
  // 子：以下のように公開するメソッドを定義する
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

      return (
  <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
