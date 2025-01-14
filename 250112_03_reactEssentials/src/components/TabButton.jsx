export default function TabButton({children, onSelect}) {

  return (
    <li>
      {/* <button onClick={handleClick()}>{children}</button> */}
      {/* should excuted by react so no need () */}
            <button onClick={onSelect}>{children}</button>
    </li>
  );
}
