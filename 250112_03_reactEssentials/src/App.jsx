// dynamic image: optimized
import reactImg from "./assets/react-core-concepts.png";
// import componentImg from "./assets/components.png";
// import data
import { CORE_CONCEPTS } from "./data.js";

// dynamic element
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// create component
function Header() {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// props: key-value fairs
// function CoreConcept(props) {
function CoreConcept({title, description, image}) { // de-structuring single variable
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <h4>{description}</h4>
    </li>
  );
}

function App() {
  // 1 react component: seems like just function
  //   function must starts with UpperCase && should return renderable stuff
  // 2 javascript syntex extension :: jsx
  // 3 browser does not supports jsx, transformed by devServer
  // 4 React anaylyze Component Hierarchy
  // 5 Built-in Components => rendered as DOM nodes
  //   Custom Components => traverses the components, like function
  return (
    <div>
      {/* component in component */}
      {/* <Header></Header> */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* Props: accepts all values types */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* could be shorter... */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
