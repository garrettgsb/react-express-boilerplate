'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Core = function (_Component) {
  _inherits(Core, _Component);

  function Core() {
    _classCallCheck(this, Core);

    return _possibleConstructorReturn(this, (Core.__proto__ || Object.getPrototypeOf(Core)).apply(this, arguments));
  }

  _createClass(Core, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initializeChart(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.destroyChart();
      this.initializeChart(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyChart();
    }
  }, {
    key: 'getChart',
    value: function getChart() {
      return this.chart;
    }
  }, {
    key: 'destroyChart',
    value: function destroyChart() {
      this.chart && this.chart.destroy();
    }
  }, {
    key: 'initializeChart',
    value: function initializeChart(props) {
      var data = props.data,
          options = props.options,
          type = props.type;

      var ctx = this.refs['canvas'].getContext('2d');
      this.chart = new _chart2.default(ctx, {
        type: type,
        data: data,
        options: options
      });
    }
  }, {
    key: 'blacklist',
    value: function blacklist(obj, filters) {
      var results = {};
      for (var key in obj) {
        if (filters[key]) continue;
        results[key] = obj[key];
      }
      return results;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.blacklist(this.props, {
        data: true,
        options: true,
        ref: true,
        type: true
      });
      return _react2.default.createElement('canvas', _extends({ ref: 'canvas' }, _props));
    }
  }]);

  return Core;
}(_react.Component);

Core.propTypes = {
  data: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.object,
  type: _propTypes2.default.oneOf(['doughnut', 'pie', 'line', 'bar', 'radar', 'polarArea', 'bubble', 'horizontalBar', 'scatter']).isRequired
};

exports.default = Core;