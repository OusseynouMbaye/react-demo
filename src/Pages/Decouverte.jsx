import { useState } from "react";
import Navigation from "../Components/Navigation.jsx";
const showTitle = true;

function Decouverte() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: "toto", age: 25 });

  const increment = () => {
    setCount(count + 1);
  };

  const addAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <Navigation />
      {showTitle && <h1>Decouverte</h1>}
      {/* <Test color="blue" /> */}

      <div>
        <p>Counter : {count}</p>
        <button onClick={increment}>Increment </button>
      </div>

      <div>
        <p>Person : {person.name}</p>
        <p>Age : {person.age}</p>
        <button onClick={addAge}>Add Age</button>
      </div>
    </div>
  );
}

function Test({ color }) {
  console.log(color);
  return (
    <div>
      <h1>Test</h1>
      <p style={{ color: color }}>alors moi</p>

      <div>
        <p></p>
      </div>
    </div>
  );
}

export default Decouverte;
