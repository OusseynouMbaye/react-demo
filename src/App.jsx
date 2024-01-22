import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Decouverte from "./Pages/Decouverte";
import Pratices from "./Pages/Pratices";

import Todo from "./Pages/Todo.jsx";
import PropsToComponent from "./Components/PropsToComponent.jsx";
import Formulaire from "./Components/Formulaire.jsx";
import Countries from "./Pages/Countries.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/decouverte" element={<Decouverte />} />
          <Route path="/pratices" element={<Pratices />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/propsToComponent" element={<PropsToComponent />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
