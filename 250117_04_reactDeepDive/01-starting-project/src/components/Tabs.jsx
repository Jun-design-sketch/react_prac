// JSと同じくbuttonsContainerのデフォルト値をセットできる。。
export default function Tabs({ children, buttons, buttonsContainer = 'menu'}) {
  // buttonsContainer propからカスタムコンポネントにする
  // こうしないで、最初からbuttonsContainerではなくButtonContainerを受け取っても良い
  // UpperCaseで受け取レバcustomComponent扱いになるため
  const ButtonContainer = buttonsContainer;

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
