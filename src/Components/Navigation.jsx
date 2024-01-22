import { Link } from "react-router-dom";

import "../css/DropdownMenu.css";

const navigation = {
  navigation_ul: {
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
    backgroundColor: "#808080",
    padding: "10px",
    textDecoration: "none",
  },

  navigation_li_a: {
    textDecoration: "none",
    color: "white",
  },
};

function Navigation() {
  return (
    <nav>
      <ul style={navigation.navigation_ul}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div className="dropdown">
            <ul style={{ listStyle: "none" }}>
              <li className="dropbtn">
                <Link to="/decouverte">Decouverte</Link>
              </li>
            </ul>
            <div className="dropdown-content">
              <Link to="/propsToComponent"> PropsToComponent </Link>
              <Link to="/formulaire"> Formulaire </Link>

              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <ul style={{ listStyle: "none" }}>
              <li className="dropbtn">
                <Link to="/pratices">Pratices</Link>
              </li>
            </ul>
            <div className="dropdown-content">
              <Link to="/todo"> todo </Link>
              <Link to="/countries"> Countries Page</Link>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
