import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <main className="flex-1 p-8">
        <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
        <p>some text</p>
      </main>
    </div>
  );
}

export default App;
