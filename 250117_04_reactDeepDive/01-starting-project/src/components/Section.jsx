// export default function Section({ title, id, children }) {
export default function Section({ title, children, ...props }) {
  return (
    // children要素が持っているidなどが勝手に渡されるわけではない。
    // でもこれらを一々構造分解して書くのは効率が。。
    // forwarded props OR proxy props

    // ものを囲むwrapperタイプで有用
    // <section id={id}>
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
