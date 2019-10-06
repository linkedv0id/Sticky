import React, { Component } from 'react';
import Notes from './Notes.js';
import NoteForm from './NoteForm.js';
import { charts } from '../data/charts.json'
import { notes } from '../data/notes.json'

var span=''; // A span that contains the unicode img to be used on every chart to define its privacy
class Chart extends Component {
  constructor () {
    super();
    this.state = {
      charts,
      notes,
      displayNoteForm:false
    };

  //this.addChart = this.addChart.bind(this);
  this.showNoteForm = this.showNoteForm.bind(this);
  this.hideNoteForm = this.hideNoteForm.bind(this);
  this.addNote = this.addNote.bind(this);
  this.multipleFuncs = this.multipleFuncs.bind(this);
  

  }

  hideNoteForm() {
  this.setState({
    displayNoteForm: false
  });
    console.log("HIDE!");
}

  showNoteForm() {
      this.setState({
          displayNoteForm: true,
      });
      console.log("SHOW!");
  }

  multipleFuncs(note){
    this.addNote(note);
    this.hideNoteForm();
  }
  

  addNote(note){
    console.log("addNote!");
    this.setState({
      notes: [...this.state.notes, note]
    })
    
  }

  /*addChart(chart){
    this.setState({
    charts: [...this.state.charts, chart]
    })

  }*/

  removeChart(index){
    this.setState({
    charts: this.state.charts.filter(
      (e, i) => {
      return i !== index
      }
    )}
    )
  }

  //Fix spacing between notes
  render() {
    const charts=this.state.charts.map((chart, i) => {
      
      // This block defines the "alt" (or title, in this case) text of the span string 
      // to pass as an html tag and the Unicode logo
      // Public 🌎
      // Private 🔒

      if(chart.privacy==="public"){
        span=<span title="Public" role="img" aria-label="public" className="totalRight">🌎</span>
      } else{
      span=<span title="Private" role="img" aria-label="private" className="totalRight">🔒</span>
      }

      return (
         
              
            <div className="card card-xl-6 text-white bg-dark border-light mt-2" key={i}>
              <div className="card-body">
              <button onClick={this.removeChart.bind(this)} className="btn btn-xs btn-light totalLeft">
                x
              </button>
              {span}
                <div className="form-group">
                  <div className="container">
                    <div className="row">
                      
                        
                      <div className="col-md-1"></div>
                      <div className="col-md-8"><h5 className="text-center">{chart.title}</h5></div>
                      <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                      <div className="col-md-1"> </div>
                      <div className="col-md-8">{chart.owner}</div>
                      <div className="col-md-1"> </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8">
                        <Notes chartID={chart.id}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-1"> </div>
                      <div className="col-md-8"> </div>
                      <div className="col-md-1">
                        <button onClick={this.showNoteForm} className="btn btn-sm btn-light totalRight">
                          Add Note
                        </button>
                      </div>
                      <div className="row">
                      <div className="col-md-1"> </div>
                      <div className="col-md-8 ">
                          { this.state.displayNoteForm ? 
                          <NoteForm chartID={chart.id} onAddNote={this.multipleFuncs}/> 
                          : null }
                      </div>
                      <div className="col-md-1"> </div>
                    </div>
                      
                    </div>

                  </div>
                </div>
              </div>
            </div>
          
     ) 
    }
    )

    return (
    <div>
      {charts}
    </div>
    )
  }

}

export default Chart;