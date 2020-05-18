import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header.js";
import Chart from "./Chart.js";
import Info from "./Info.js";
import CountryPicker from "./CountryPicker.js";
function Analyst() {
  return (
    <React.Fragment>
      <Header />
      <Container fluid className="d-flex">
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Info />
          </Col>
        </Row>

        <Row>
          <Col>
            <CountryPicker />
          </Col>
        </Row>
        <Row>
          <Col>
            <Chart />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Analyst;
