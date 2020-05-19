import React, { useState, useEffect } from "react";
import Header from "../Header.js";
import Table from "./Table.js";
import Card from "./Card.js";
import { Container, Row, Col } from "react-bootstrap";
import { fetchDataGlobal, fetchDataCountries } from "../.././api/index.js";

function Home(props) {
  const [dataGlobal, setDataGlobal] = useState({});
  const [dataCountries, setDataCountries] = useState([]);

  const getDataGlobal = async () => {
    try {
      const data = await fetchDataGlobal();
      setDataGlobal(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataGlobal();
  }, []);

  const getDataCountries = async () => {
    try {
      let data = await fetchDataCountries();
      if (data) {
        data = await [...data].sort((a, b) => b.confirmed - a.confirmed);
      }
      setDataCountries(data);
    } catch (error) {
      alert("Can't get data! Please reload");
    }
  };
  useEffect(() => {
    getDataCountries();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Row className="mt-3">
          {/* <div className="bg-navy border-r-6 ml-3"> */}
          <Col lg={3} md={12} sm={12}>
            <Card data={dataGlobal} />
          </Col>
          {/* </div> */}

          <Col lg={9} md={12} sm={12}>
            <div className="bg-navy border-r-6 mr-auto mb-3">
              <div className="h3 text-silver card-body">World Stats</div>
              <div className="table-wrapper-scroll-y my-custom-scrollbar table">
                <Table data={dataCountries} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>

    /* <form classNameName="form-inline my-2 my-lg-0">
          <input
            classNameName="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            classNameName="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */
  );
}

export default Home;
