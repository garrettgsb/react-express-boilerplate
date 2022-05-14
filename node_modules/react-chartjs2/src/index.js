import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

class Core extends Component {

  componentDidMount() {
    this.initializeChart(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.destroyChart();
    this.initializeChart(nextProps);
  }

  componentWillUnmount() {
    this.destroyChart();
  }

  getChart() {
    return this.chart;
  }

  destroyChart() {
    this.chart && this.chart.destroy();
  }

  initializeChart(props) {
    const {data, options, type} = props;
    const ctx = this.refs['canvas'].getContext('2d');
    this.chart = new Chart(ctx, {
      type: type,
      data: data,
      options: options
    })
  }

  blacklist(obj, filters) {
    let results = {};
    for (let key in obj) {
      if (filters[key]) continue;
      results[key] = obj[key];
    }
    return results;
  }

  render() {
    const _props = this.blacklist(this.props, {
      data: true,
      options: true,
      ref: true,
      type: true
    });
    return <canvas ref='canvas' {..._props} />
  };
}

Core.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  type: PropTypes.oneOf(['doughnut', 'pie', 'line', 'bar', 'radar', 'polarArea', 'bubble', 'horizontalBar', 'scatter']).isRequired
};

export default Core;
