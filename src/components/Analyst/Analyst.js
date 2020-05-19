import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header.js";
import Chart from "./Chart.js";
import Info from "./Info.js";
import CountryPicker from "./CountryPicker.js";
// import ChartJS from "react-chartjs-2";
import { fetchDataGlobal, fetchDataCountries } from "../../api/index.js";

function Analyst() {
  const [dataGlobal, setDataGlobal] = useState({});
  const [dataCountries, setDataCountries] = useState([]);
  const [dataDailyAll, setDataDailyAll] = useState([]);
  const [country, setCountry] = useState("");
  async function getDataGlobal() {
    try {
      const data = await fetchDataGlobal();
      setDataGlobal(data);
    } catch (error) {
      alert("Can't get data! Please reload!");
    }
  }
  useEffect(() => {
    getDataGlobal();
  }, []);
  async function getDataCountries() {
    try {
      const data = await fetchDataCountries();
      setDataCountries(data);
    } catch (error) {
      alert("Can't get data! Please reload!");
    }
  }
  useEffect(() => {
    getDataCountries();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchDataGlobal(country);
    setDataGlobal(data);
    setCountry(country);
  };

  return (
    <React.Fragment>
      <Header />
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col>
            <Info data={dataGlobal} />
          </Col>
        </Row>

        {/* <Row> */}
        {/* <Col> */}
        <CountryPicker handleChange={handleCountryChange} />
        {/* </Col> */}
        {/* </Row> */}
        {/* <Row> */}
        {/* <Col> */}
        <Chart data={dataGlobal} country={country} />
        {/* </Col> */}
        {/* </Row> */}
      </Container>
    </React.Fragment>
  );
}
export default Analyst;
