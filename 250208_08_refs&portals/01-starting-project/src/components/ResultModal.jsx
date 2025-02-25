import { useImperativeHandle, useRef } from "react";
// React19以前ならfowardRefする必要がある
export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(3);
  const score = Math.round((1 - (remainingTime / (targetTime*1000))) * 100);

  // コンポネントの外部に見せたい時
  // useImperativeHandleは、親コンポーネントから子コンポーネント特定のメソッドを直接呼び出せるようにすること。
  // propsは親から子へデータや関数を渡せる。が、useImperativeHandleは子供から親へ何かを公開できる。
  // 親：useRefを作成し、子どもにrefとして渡す
  // 子：以下のように公開するメソッドを定義する
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
