# react-chartjs2
> React component for Chart.js

### Installation
`npm install react-chartjs2 --save`

### Demo
Live demo: http://houjiazong.github.io/react-chartjs2/

### Run Example in Dev
`npm run example && open ./example/index.html`

### Example Usage
```JavaScript
// using ES6
import RC2 from 'react-chartjs2';
class Main extends Component {
  render() {
    return <RC2 data={chartData} options={chartOptions} type='bar' />;
  }
};
// not using ES6
var RC2 = require('react-chartjs2');
var Main = React.createClass({
  render: function() {
    return <RC2 data={chartData} options={chartOptions} type='bar' />;
  }
});
```

Get your Chart instance, like
```JavaScript
class Main extends Component {
  componentDidMount() {
    this.myChart = this.refs['canvas'].getChart();
    this.myChart.data.datasets[0].points[2] = 50;
    this.myChart.update();
  }
  render() {
    return <RC2 ref='canvas' data={chartData} options={chartOptions} type='bar' />;
  }
};
```
### Chart type
- `Bar`
- `Doughnut`
- `Line`
- `Pie`
- `PolarArea`
- `Radar`
