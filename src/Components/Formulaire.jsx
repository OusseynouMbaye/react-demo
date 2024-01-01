import { useState, useId } from "react";
import Navigation from "./Navigation.jsx";

const Formulaire = () => {
  const [firstname, setFirstname] = useState("ouzinem");

  const handleChange = (e) => {
    setFirstname(e.target.value);
  };
  const reset = () => {
    setFirstname("");
  };

  // console.log("render");
  const ageInputId = useId();
  return (
    <>
      <Navigation />
      <h1>Formulaire</h1>
      <form>
        <div>
          <label>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleChange}
            />
          </label>
          {firstname}
          <button onClick={reset} type="button">
            reset
          </button>
        </div>
        <div>
          <label htmlFor={ageInputId}></label>
          <input id={ageInputId} name="age" type="number" />
        </div>
      </form>
    </>
  );
};

export default Formulaire;
