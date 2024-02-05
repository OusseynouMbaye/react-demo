import { useState, useEffect } from "react";

import Navigation from "../Components/Navigation.jsx";

const styleMap = {
  grid_map: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    rowGap: "19px",
    // background: "red",
  },
  display_li: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  img: {
    width: "200px",
    height: "100px",
    borderRadius: "18%",
  },
  button_input: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
};

function Countries() {
  const [countries, setCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCountries("https://restcountries.com/v2/all");
  }, []);

  const handleContinentButtonClick = (continent) => {
    fetchCountries(`https://restcountries.com/v2/region/${continent}`);
  };

  const handleAllContinent = () => {
    fetchCountries("https://restcountries.com/v2/all");
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchCountries = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        //console.log(data);
      });
  };

  const filteredCountries = countries
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <Navigation />
      <h1>Countries Map</h1>
      <div style={styleMap.button_input}>
        <div>
          <button onClick={() => handleContinentButtonClick("africa")}>
            Africa
          </button>
          <button onClick={() => handleContinentButtonClick("americas")}>
            Americas
          </button>
          <button onClick={() => handleContinentButtonClick("asia")}>
            Asia
          </button>
          <button onClick={() => handleContinentButtonClick("europe")}>
            Europe
          </button>
          <button onClick={() => handleContinentButtonClick("oceania")}>
            Oceania
          </button>
          <button onClick={() => handleAllContinent()}> all countries</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search country"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      {filteredCountries.length > 0 ? (
        <ul style={styleMap.grid_map}>
          {filteredCountries.map((country) => (
            <li key={country.id} style={styleMap.display_li}>
              <span>{country.name}</span>
              <span> SubRegion : {country.subregion}</span>
              <span> Population : {country.population}</span>
              <span>
                Currencies:
                {country.currencies &&
                  country.currencies
                    .map((currency) => currency.name)
                    .join(", ")}
              </span>
              <img
                src={country.flags.svg}
                alt={country.name}
                style={styleMap.img}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No countries found.</p>
      )}
    </div>
  );
}

export default Countries;
