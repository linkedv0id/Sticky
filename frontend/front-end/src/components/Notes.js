import React, { Component } from 'react';
import { notes } from '../data/notes.json'

class Notes extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes
    };

    //this.addNote = this.addNote.bind(this);
  }
/*  
  addNote(note){
    this.setState({
      notes: [...this.state.notes, note]
    })
  }
  */
  removeNote(index){
    this.setState({
      notes: this.state.notes.filter(
        (e, i) => {
          return i !== index
        }
      )})
    
  }
  
  render(){
    var notesText='';
    this.state.notes.forEach((notes, i) => {
      if (this.props.chartID===i) {
        notesText =notes.notes_text.map((note, j) =>{

          return (
            <div className="card card-sm-2 bg-primary text-white border-light mt-2" key={j}>
              <div className="card-body">
                <button onClick={this.removeNote.bind(this)} className="btn btn-xs btn-light totalRight">
                  x
                </button>
                <div className="form-group">
                  <div className="mb-md-2">
                    <p className="text-justify small">{note}</p>
                  </div>
                </div>
              </div>
            </div>)
        })
        
      }else {
        return;
      }
        
        })
    return (
      <div>
        {notesText}
      </div>);
        
      }
    }
    
    
    
    export default Notes;