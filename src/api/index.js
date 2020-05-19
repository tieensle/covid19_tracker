import axios from "axios";
const url = "https://api.covid19api.com/summary";
const urlGlobal = "https://corona.lmao.ninja/v2";
const urlcountries = "https://corona.lmao.ninja/v2/countries";
// const urlDaily = "https://covid19.mathdro.id/api";
const urlDaily2 = "https://api.covid19api.com/dayone/country";
const urlDaily = "https://disease.sh/v2/historical";

const fetchDataGlobal = async (country) => {
  let modifiedUrl = urlGlobal;
  if (country) {
    modifiedUrl = `${urlGlobal}/countries/${country}`;
  } else {
    modifiedUrl = `${urlGlobal}/all`;
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
    const { data } = await axios.get(`${urlGlobal}/countries`);
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

// const fetchDailyData = async () => {
//   try {
//     // const dataAll = await axios.get(`${urlGlobal}/all`);
//     // const dataHistoricalAll = await axios.get(`${urlGlobal}/historical/all`);
//     // console.log(dataAll);
//     // console.log(dataHistoricalAll);
//     const { data } = await axios.get(urlDaily);
//     const modifiedData = data.map((d) => {
//       return {
//         confirmed: d.confirmed.total,
//         deaths: d.deaths.total,
//         date: d.reportDate,
//       };
//     });
//     console.log(modifiedData);
//   } catch (error) {
//     console.log(error);
//   }
// };
const fetchDailyData = async (country) => {
  let modifiedUrl;
  let data;
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
    console.log(data);
    const date = Object.keys(data.cases);
    const modifiedData = date.map((d) => {
      return {
        confirmed: data["cases"][d],
        recovered: data["recovered"][d],
        deaths: data["deaths"][d],
        date: d,
      };
    });
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {
    return error;
  }
};

const fetchCountriesName = async () => {
  const { data } = await axios.get(`${urlGlobal}/countries`);
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
