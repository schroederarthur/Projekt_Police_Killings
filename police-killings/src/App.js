import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart.js'






class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }
  

  getChartData(){
    this.setState({
      chartData:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets:[
          {
            label:'Amount of victims(467 Total)',
            data:[
             90,
             84,
             114,
             96,
             81,
             2,
             0,
             0,
             0,
             0,
             0,
             0,
             0,
             0
            ],
            backgroundColor:[
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
              'rgba(50, 50, 50, 0.6)',
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Police Killings Project</h1>
        <h2>People killed by police in the US in 2015 (January - June)</h2>
        <div class= "content-wrapper">
          <Chart chartData={this.state.chartData} legendPosition="bottom" />
          </div>
      </div>
    );
  }
}

export default App;