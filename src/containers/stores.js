import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import Highcharts from 'highcharts';

class Stores extends Component {

  getStoresData() {

    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 10,
        plotShadow: true
      },
      title: {
        text: 'Wrong informations about Wallmart',
        align: 'center'
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      exporting: {enabled: false},
      credits: {enabled: false},
      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177,59999, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 40282, 48121, 50434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }]
    }

  }

  componentDidMount() {

    // Extend Highcharts with modules
    if (this.props.modules) {
      this.props.modules.forEach(function (module) {
        module(Highcharts);
      });
    }

    // Set container which the chart should render to.
    this.linechart = new Highcharts[this.props.type || "Chart"]('line-chart', this.getStoresData()
    );

  }

  render() {
    return (
      <div>
        <div id='line-chart'></div>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {
    stores: state.stores,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stores);