import React, {Component} from 'react';
import RC2 from '../../lib/index';

const data = {
  datasets: [{
    label: 'First Dataset',
    data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }
    ],
    backgroundColor: '#FF6384',
    hoverBackgroundColor: '#FF6384',
  }]
};

class Bubble extends Component {
  render() {
    return (
      <RC2 data={data} type='bubble' />
    );
  }
}

export default Bubble;
