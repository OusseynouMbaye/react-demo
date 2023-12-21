import Navigation from "./Navigation.jsx";
import { getImageUrl } from "../Utils/utils.js";

const Formulaire = () => {
  return (
    <div>
      <Navigation />;<h2>formulaire</h2>
      <Button text="test" color="red" margBottom="10px" />
      <Avatar
        person={{ name: "Ouzinem", imageId: "1" }}
        size={100}
        border={80}
      />
      <Avatar
        person={{ name: "Ouzinem", imageId: "2" }}
        size={50}
        border={50}
      />
    </div>
  );
};

export default Formulaire;

/**
 * Renders a button component with the specified color and text.
 *
 * @param {Object} props - The props object containing the color and text.
 * @returns {JSX.Element} The rendered button component.
 */
function Button(props) {
  return (
    <button style={{ background: props.color, marginBottom: props.margBottom }}>
      Click me {props.text}
    </button>
  );
}

function Avatar({ person, size, border }) {
  return (
    <div>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        id={person.imageId}
        style={{ borderRadius: border }}
      />
    </div>
  );
}

/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @param {string} props.color - The background color of the button.
 * @returns {JSX.Element} The rendered button element.
 */
// function Button({ text, color }) {
//   return <button style={{ background: color }}>Click me {text}</button>;
// }
