// dynamic element
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// dynamic image: optimized
import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// create component
export default function Header() {
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