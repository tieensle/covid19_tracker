import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
const formatNumber = (str) => {
  if (str == 0) return "0";
  let s = "";
  let count = 0;
  while (str > 0) {
    s += String(str % 10);
    str = Math.floor(str / 10);
    count++;
    if (count % 3 == 0 && str > 0) {
      s += ",";
    }
  }
  const tmp = s.split("");
  tmp.reverse();
  return tmp.join("");
};
function Data(props) {
  if (!props.data) return <div>Loading...</div>;
  return (
    <Table striped bordered hover variant="dark" className="mr-4">
      <thead>
        <tr>
          <th className="text-silver">Country</th>
          <th className="text-info">Confirmed</th>
          <th className="text-info-me">Today Confirmed</th>
          <th className="text-success-me">Recovered</th>
          <th className="text-danger">Deaths</th>
          <th className="text-danger-me">Today Deaths</th>
          <th className="text-warning">Critical</th>
          <th className="text-active">Active</th>
        </tr>
      </thead>
      <tbody className="">
        {props.data.map((country) => {
          let element = <tr></tr>;
          if (country) {
            element = (
              <tr>
                <td>
                  <img src={country.flag} className="fit-image mr-2" />
                  {country.country}
                </td>
                <td>{formatNumber(country.confirmed)}</td>
                <td>{formatNumber(country.todayConfirmed)}</td>
                <td>{formatNumber(country.recovered)}</td>
                <td>{formatNumber(country.deaths)}</td>
                <td>{formatNumber(country.todayDeaths)}</td>
                <td>{formatNumber(country.critical)}</td>
                <td>{formatNumber(country.active)}</td>
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
