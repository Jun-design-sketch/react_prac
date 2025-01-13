function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  // 1 react component: seems like just function
  //   function must starts with UpperCase && should return renderable stuff
  // 2 javascript syntex extension :: jsx
  // 3 browser does not supports jsx, transformed by devServer
  return (
    <div>
      {/* component in component */}
      {/* <Header></Header> */}
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
