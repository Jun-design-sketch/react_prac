import { useState, useRef } from "react";

export default function TimeChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  // 再度のおさらい
  // refはレンダリングの影響を受けない。再レンダリングされても値が維持される。
  // refはDOM要素のみでなく、任意の値を保持できる。
  // timer.currentはuseRefで作成されたtimerオブジェクトのcurrentプロパティ。
  // const timer = useRef(null) ==> オブジェクトtimerは {current: null}である

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return <section className="challenge">
    <h2>{title}</h2>
    {timerExpired && <p>You lost</p>}
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? 's' : ''}
    </p>
    <p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? 'Stop' : 'Start'} Challenge
      </button>
    </p>
    <p className={timerStarted ? 'active' : undefined}>
      {timerStarted ? 'Time is running...' : 'Timer inactive'}
    </p>
  </section>
}