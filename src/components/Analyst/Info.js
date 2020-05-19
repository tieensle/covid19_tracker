import React from "react";
import CountUp from "react-countup";
function Info({ data: { cases, recovered, deaths } }) {
  if (!cases) return <div>Loading...</div>;
  // let { cases, recovered, deaths } = props.data;
  return (
    <div className="d-flex flex-column">
      <div className="card border-info mb-5 text-center w-card m-1">
        <div className="card-header bg-info-blur-50 text-info-me">
          Confirmed
        </div>
        <div className="card-body text-info-me bg-info-blur">
          {/* <div className="h3 card-title">title</div> */}
          <div className="h5 card-text">
            <CountUp start={0} end={cases} duration={1} separator="," />
          </div>
        </div>
      </div>
      <div className="card border-success mb-5 text-center w-card m-1">
        <div className="card-header bg-success-blur-50 text-success-me">
          Recovered
        </div>
        <div className="card-body text-success-me bg-success-blur">
          {/* <div className="h3 card-title">title</div> */}
          <div className="h5 card-text">
            <CountUp start={0} end={recovered} duration={1} separator="," />
          </div>
        </div>
      </div>
      <div className="card border-danger mb-5 text-center w-card m-1">
        <div className="card-header bg-danger-blur-50 text-danger-me">
          Deaths
        </div>
        <div className="card-body text-danger-me bg-danger-blur">
          {/* <div className="h3 card-title">title</div> */}
          <div className="h5 card-text">
            <CountUp start={0} end={deaths} duration={1} separator="," />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
