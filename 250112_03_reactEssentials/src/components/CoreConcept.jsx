// props: key-value fairs
// function CoreConcept(props) {
  export default function CoreConcept({title, description, image}) { // de-structuring single variable
    return (
      <li>
        <img src={image} alt="..." />
        <h3>{title}</h3>
        <h4>{description}</h4>
      </li>
    );
  }