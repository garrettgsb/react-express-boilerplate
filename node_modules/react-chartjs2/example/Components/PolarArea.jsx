import React, {Component} from 'react';
import RC2 from '../../lib/index';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

class PolarArea extends Component {
  render() {
    return (
      <RC2 data={data} type='polarArea' />
    );
  }
}

export default PolarArea;
