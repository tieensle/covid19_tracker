import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { fetchDataGlobal, fetchDataCountries } from "../api/index.js";
function Data(props) {
  if (!props.data) return <div>Loading...</div>;
  // const [dataCountries, setDataCountries] = useState([{}]);

  // const getDataCountries = async () => {
  //   try {
  //     let data = await fetchDataCountries();
  //     if (data) {
  //       data = await [...data].sort(
  //         (a, b) => b.TotalConfirmed - a.TotalConfirmed
  //       );
  //     }
  //     setDataCountries(data);
  //   } catch (error) {
  //     alert("Can't get data! Please reload");
  //   }
  // };
  // useEffect(() => {
  //   getDataCountries();
  // }, []);
  return (
    <Table striped bordered hover variant="dark" className="mr-4">
      <thead>
        <tr>
          <th className="text-silver">Country</th>
          <th className="text-info">Confirmed</th>
          <th className="text-info">New Confirmed</th>
          <th className="text-success">Recovered</th>
          <th className="text-success">New Recovered</th>
          <th className="text-danger">Death</th>
          <th className="text-danger">New Death</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((country) => {
          let element = <tr></tr>;
          if (country) {
            element = (
              <tr>
                <td>{country.Country}</td>
                <td>{country.TotalConfirmed}</td>
                <td>{country.NewConfirmed}</td>
                <td>{country.TotalRecovered}</td>
                <td>{country.NewRecovered}</td>
                <td>{country.TotalDeaths}</td>
                <td>{country.NewDeaths}</td>
              </tr>
            );
          }
          return element;
        })}
      </tbody>
    </Table>
  );
}

export default Data;
