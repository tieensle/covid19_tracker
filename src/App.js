import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";
import MapView from "./components/Map/Map.js";
import Analyst from "./components/Analyst/Analyst.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/map" component={MapView} />
        <Route path="/analyst" component={Analyst} />
        {/* <Route component={NotFound} /> */}
      </Router>
      {/* <Home /> */}
    </React.Fragment>
  );
}

export default App;
