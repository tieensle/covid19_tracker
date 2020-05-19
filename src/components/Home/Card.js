import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

import { fetchDataGlobal, fetchDataCountries } from "../../api/index.js";

const Card = ({
  data: {
    confirmed,
    todayConfirmed,
    recovered,
    deaths,
    todayDeaths,
    active,
    critical,
  },
}) => {
  if (!confirmed) return <div>Loading...</div>;
  return (
    <div className="text-center">
      <div className="h1 text-silver card-body mr-auto">Overview</div>
      <div className="h3 text-info mr-auto mb-2">
        <div>Confirmed</div>
        <CountUp start={0} end={confirmed} duration={1} separator="," />
      </div>
      <div className="h3 text-info-me  ml-auto mr-auto mb-2">
        <div>Today Confirmed</div>
        <CountUp start={0} end={todayConfirmed} duration={1} separator="," />
      </div>
      <div className="h3 text-success-me ml-auto mr-auto">
        <div>Recovered</div>
        <CountUp start={0} end={recovered} duration={1} separator="," />
      </div>
      <div className="h3 text-warning ml-auto mr-auto">
        <div>Critical</div>
        <CountUp start={0} end={critical} duration={1} separator="," />
      </div>
      <div className="h3 text-active ml-auto mr-auto">
        <div>Active</div>
        <CountUp start={0} end={active} duration={1} separator="," />
      </div>
      <div className="h3 text-danger ml-auto mr-auto">
        <div>Deaths</div>
        <CountUp start={0} end={deaths} duration={1} separator="," />
      </div>
      <div className="h3 text-danger-me ml-auto mr-auto">
        <div>Today Deaths</div>
        <CountUp start={0} end={todayDeaths} duration={1} separator="," />
      </div>
    </div>
  );
};
export default Card;
