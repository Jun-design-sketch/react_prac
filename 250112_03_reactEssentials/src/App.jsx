// import componentImg from "./assets/components.png";
// react hook
import { useState } from 'react';

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

// import data
import { CORE_CONCEPTS } from "./data.js";

function App() {
  // 1 react component: seems like just function
  //   function must starts with UpperCase && should return renderable stuff
  // 2 javascript syntex extension :: jsx
  // 3 browser does not supports jsx, transformed by devServer
  // 4 React anaylyze Component Hierarchy
  // 5 Built-in Components => rendered as DOM nodes
  //   Custom Components => traverses the components, like function

  // hook and state
  // 1 Only call Hooks inside of Component Functions
  // 2 Only call Hooks on the top level
  // 3 State is array with 2 element (value, setter)
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      {/* component in component */}
      {/* <Header></Header> */}
      {/* header.cssを別途生成しても、headerタグにスタイルが適用される */}
      {/* <header>
        <h1>hello world!</h1>
      </header> */}
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
        <section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              {/* component合成 "children" */}
              <TabButton onSelect={() => handleSelect("components")}>
                Components
              </TabButton>
              {/* component合成 "attributes" */}
              {/* <TabButton label="Components"></TabButton> */}
              <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("props")}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect("state")}>
                State
              </TabButton>
            </menu>
            {selectedTopic}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
