import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
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
                <td>{country.confirmed}</td>
                <td>{country.todayConfirmed}</td>
                <td>{country.recovered}</td>
                <td>{country.deaths}</td>
                <td>{country.todayDeaths}</td>
                <td>{country.critical}</td>
                <td>{country.active}</td>
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
