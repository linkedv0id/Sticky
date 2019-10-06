import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Chart from './components/Chart'
import { charts } from './data/charts.json'




class App extends Component {
  constructor(){
    super();
    this.state={
      charts
    }
  
  this.addChart = this.addChart.bind(this);  
  }

  addChart(chart){
    this.setState({
    charts: [...this.state.charts, chart]
    })
  }

  removeChart(index){
    this.setState({
    charts: this.state.charts.filter(
      (e, i) => {
      return i !== index
      }
    )}
    )

  }

  
  render() {
    return (
      <div className="App">
          <Title />
          <div className="container">
            <div className="row md-2">
              <Chart />
              <div className="col col-sm-3 mt-2">
                
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
 