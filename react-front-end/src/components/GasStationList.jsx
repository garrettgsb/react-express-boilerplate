// GasStationList.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { getGasStations } from "../actions/gasStationActions";
import GasStation from "./GasStation";

class GasStationList extends Component {
  componentDidMount() {
    this.props.getGasStations();
  }

  render() {
    const { gasStations } = this.props.gasStation;
    return (
      <div>
        <h1>Gas Stations</h1>
        {gasStations.map((gasStation) => (
          <GasStation key={gasStation.id} gasStation={gasStation} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gasStation: state.gasStation,
});

export default connect(mapStateToProps, { getGasStations })(
  GasStationList
);
