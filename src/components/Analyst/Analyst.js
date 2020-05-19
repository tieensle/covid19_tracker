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
      <Container fluid>
        <Row className="mt-5">
          <Col lg={2} md={12} sm={12} className="col-xs-1 align-items-center">
            <CountryPicker
              handleChange={handleCountryChange}
              className="max-w-pick"
            />
            <Info data={dataGlobal} />
          </Col>
          <Col lg={10} md={12} sm={12}>
            <Chart data={dataGlobal} country={country} />
          </Col>
        </Row>

        {/* <Row> */}
        {/* <Col> */}
        {/* </Col> */}
        {/* </Row> */}
        {/* <Row> */}
        {/* <Col> */}
        {/* </Col> */}
        {/* </Row> */}
      </Container>
    </React.Fragment>
  );
}
export default Analyst;
