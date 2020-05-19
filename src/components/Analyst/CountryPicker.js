import React, { useState, useEffect } from "react";
import { fetchCountriesName } from "../../api/index.js";

function CountryPicker(props) {
  const imgLink = "https://disease.sh/assets/img/flags";
  const [countries, setCountries] = useState([]);
  async function getCountriesName() {
    const data = await fetchCountriesName();
    setCountries(data);
  }
  useEffect(() => {
    getCountriesName();
  }, []);
  return (
    <div>
      <select
        defaultValue=""
        className="browser-default custom-select custom-select-lg mb-3"
        onChange={(e) => props.handleChange(e.target.value)}
      >
        <option selected value="">
          Global
        </option>
        {countries.map((country, i) => (
          <option key={i} value={country.slug}>
            {country.name}
          </option>
        ))}
      </select>
      {/* <img src={`${imgLink}`+} alt="" className="flag" /> */}
    </div>
  );
}

export default CountryPicker;
