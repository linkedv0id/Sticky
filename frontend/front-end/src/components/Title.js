import React, { Component } from 'react';
import { charts }from '../data/charts.json'
import '../App.css';


class Title extends Component{
	constructor(){
		super();
		this.state = {
			numOfCharts:charts.length
		}
	}

	render(){
		return (
				<nav className="navbar navbar-dark bg-dark text-white ">

		            <span></span>
		            <div className="totalCenter"> <span title="Sticky!" role="img" aria-label="private">📜 Sticky 📜</span></div>
		            <span className="badge badge-pill badge-light ml-2"> Number of Charts: {this.state.numOfCharts}</span>

		        </nav>
          )		
	}
}

export default Title;
    