import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import { fetchDailyData } from "../../api/index.js";

import "./Chart.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});
  const getDailyData = async (country) => {
    const data = await fetchDailyData(country);
    setDailyData(data);
  };
  useEffect(() => {
    getDailyData(country);
    console.log("call");
  }, [country]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Confirmed",
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered),
            label: "Recovered",
            borderColor: "#53A567FF",
            backgroundColor: "rgba(83, 165, 103, 0.253)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "#F93822FF",
            backgroundColor: "rgba(249, 56, 34, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : (
    <div className="text-info h1">
      Sorry! This country don't provide daily data
    </div>
  );

  return <div className="container">{lineChart}</div>;
};

export default Chart;
