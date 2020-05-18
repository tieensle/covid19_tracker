import React, { useState, useEffect } from "react";

import { fetchDataGlobal, fetchDataCountries } from "../api/index.js";

const Card = (props) => {
  // const [dataGlobal, setDataGlobal] = useState({});
  // const getDataGlobal = async () => {
  //   try {
  //     const data = await fetchDataGlobal();
  //     console.log(data);
  //     setDataGlobal(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getDataGlobal();
  // }, []);
  if (!props.data) return <div>Loading...</div>;
  return (
    <>
      <div className="h1 text-silver card-body mr-auto">Overview</div>
      <div className="h3 text-info  mr-auto">
        <div>Total Confirmed</div>
        <div className="h5 mt-2">{props.data.cases}</div>
      </div>
      <div className="h3 text-info  ml-auto mr-auto">
        <div>New Confirmed</div>
        <div className="h5 mt-2">{props.data.todayCases}</div>
      </div>
      <div className="h3 text-success ml-auto mr-auto">
        <div>Total Recovered</div>
        <div className="h5 mt-2  ml-auto mr-auto">{props.data.recovered}</div>
      </div>
      <div className="h3 text-warning ml-auto mr-auto">
        <div>Critical</div>
        <div className="h5 mt-2">{props.data.critical}</div>
      </div>
      <div className="h3 text-active ml-auto mr-auto">
        <div>Active</div>
        <div className="h5 mt-2">{props.data.active}</div>
      </div>
      <div className="h3 text-danger ml-auto mr-auto">
        <div>Deaths</div>
        <div className="h5 mt-2">{props.data.deaths}</div>
      </div>
      <div className="h3 text-danger ml-auto mr-auto">
        <div>New Deaths</div>
        <div className="h5 mt-2">{props.data.todayDeaths}</div>
      </div>
    </>
  );
};
export default Card;
