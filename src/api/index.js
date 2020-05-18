import axios from "axios";
const url = "https://api.covid19api.com/summary";
const urlGlobal = "https://corona.lmao.ninja/v2/all";

const fetchDataGlobal = async () => {
  try {
    const res = await axios.get(urlGlobal);
    if (res.status === 200) {
      console.log(res);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
const fetchDataCountries = async () => {
  try {
    const res = await axios.get(url);
    if (res.status === 200) {
      return res.data["Countries"];
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchDataGlobal, fetchDataCountries };
