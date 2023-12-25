import { useState } from "react";
import Navigation from "./Navigation.jsx";

const Formulaire = () => {
  const [firstname, setFirstname] = useState("ouzinem");

  const handleChange = (e) => {
    setFirstname(e.target.value);
  };
  const reset = () => {
    setFirstname("");
  };

  console.log("render");

  return (
    <>
      <Navigation />
      <h1>Formulaire</h1>
      <form>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />
        {firstname}
        <button onClick={reset} type="button">
          reset
        </button>
      </form>
    </>
  );
};

export default Formulaire;
