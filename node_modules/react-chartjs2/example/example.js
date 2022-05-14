import React, {Component} from 'react';
import {render} from 'react-dom';

import Bar from './Components/Bar';
import Doughnut from './Components/Doughnut';
import Line from './Components/Line';
import Pie from './Components/Pie';
import PolarArea from './Components/PolarArea';
import Radar from './Components/Radar';
import Realtime from './Components/Realtime';
import Bubble from './Components/Bubble';

class Example extends Component {
  render() {
    return (
      <div className='example'>
        <header><a href='https://github.com/topdmc/react-chartjs2'>View on Github</a></header>
        <section>
          <ul>
            <li>
              <h2>Realtime</h2>
              <Realtime />
            </li>
            <li>
              <h2>Bubble</h2>
              <Bubble />
            </li>
            <li>
              <h2>Bar</h2>
              <Bar />
            </li>
            <li>
              <h2>Doughnut</h2>
              <Doughnut />
            </li>
            <li>
              <h2>Line</h2>
              <Line />
            </li>
            <li>
              <h2>Pie</h2>
              <Pie />
            </li>
            <li>
              <h2>PolarArea</h2>
              <PolarArea />
            </li>
            <li>
              <h2>Radar</h2>
              <Radar />
            </li>
          </ul>
        </section>
        <footer>&copy; houjiazong</footer>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
render(<Example />, rootElement);
