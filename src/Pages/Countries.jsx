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
};

function Countries() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetchCountries("https://restcountries.com/v2/all");
  }, []);

  const handleContinentButtonClick = (continent) => {
    fetchCountries(`https://restcountries.com/v2/region/${continent}`);
  };

  const fetchCountries = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        //console.log(data);
      });
  };

  return (
    <div>
      <Navigation />
      <h1>Countries Map</h1>
      <div>
        <button onClick={() => handleContinentButtonClick("africa")}>
          Africa
        </button>
        <button onClick={() => handleContinentButtonClick("americas")}>
          Americas
        </button>
        <button onClick={() => handleContinentButtonClick("asia")}>Asia</button>
        <button onClick={() => handleContinentButtonClick("europe")}>
          Europe
        </button>
        <button onClick={() => handleContinentButtonClick("oceania")}>
          Oceania
        </button>
      </div>
      {countries && (
        <ul style={styleMap.grid_map}>
          {countries.map((country) => (
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
      )}
    </div>
  );
}

export default Countries;
