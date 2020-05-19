import axios from "axios";
const url = "https://corona.lmao.ninja/v2";
const urlDaily = "https://disease.sh/v2/historical";

const fetchDataGlobal = async (country) => {
  let modifiedUrl = url;
  if (country) {
    modifiedUrl = `${url}/countries/${country}`;
  } else {
    modifiedUrl = `${url}/all`;
  }
  try {
    const { data } = await axios.get(modifiedUrl);
    const modifiedData = {
      confirmed: data.cases,
      todayConfirmed: data.todayCases,
      deaths: data.deaths,
      todayDeaths: data.todayDeaths,
      recovered: data.recovered,
      active: data.active,
      critical: data.critical,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
const fetchDataCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    const modifiedData = data.map((d) => {
      return {
        flag: d.countryInfo.flag,
        country: d.country,
        confirmed: d.cases,
        todayConfirmed: d.todayCases,
        deaths: d.deaths,
        todayDeaths: d.todayDeaths,
        recovered: d.recovered,
        active: d.active,
        critical: d.critical,
      };
    });
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

const fetchDailyData = async (country) => {
  let modifiedUrl;
  if (country) {
    modifiedUrl = `${urlDaily}/${country}?lastdays=all`;
  } else {
    modifiedUrl = `${urlDaily}/all?lastdays=all`;
  }
  try {
    let { data } = await axios.get(modifiedUrl);
    if (country) {
      data = data.timeline;
    }
    const date = Object.keys(data.cases);
    const modifiedData = date.map((d) => {
      return {
        confirmed: data["cases"][d],
        recovered: data["recovered"][d],
        deaths: data["deaths"][d],
        date: d,
      };
    });
    return modifiedData;
  } catch (error) {
    return error;
  }
};

const fetchCountriesName = async () => {
  const { data } = await axios.get(`${url}/countries`);
  const countries = data.map((d) => {
    return {
      name: d.country,
      slug: d.countryInfo.iso2,
      flag: d.countryInfo.flag,
    };
  });

  return countries;
};

export {
  fetchDataGlobal,
  fetchDataCountries,
  fetchDailyData,
  fetchCountriesName,
};
