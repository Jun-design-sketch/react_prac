export default function TabButton({children, onSelect, isSelected}) {

  return (
    <li>
      {/* <button onClick={handleClick()}>{children}</button> */}
      {/* should excuted by react so no need () */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}
