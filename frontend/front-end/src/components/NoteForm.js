import React, { Component } from 'react';
import { notes } from '../data/notes.json'

class NoteForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      chart_id:this.props.chartID,
      notes_text:[]
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");
    this.props.addNote(this.state);
    this.setState({
      "chart_id":this.props.id,
      "notes_text":notes[this.props.chartID].notes_text.push(this.state.notes_text)
    });
  }


  handleInput(e) {
    console.log("handleInput");
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  } 

  // Hides form and binds handleSubmit
  /*severalFuncs(e){
    this.props.hideNoteForm();
    //this.handleSubmit(e);
  }*/

  render() {
    return (
      <div className="card absCenter">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="notes_text"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Note Text"
              />
          </div>
        </form>
          
          <button type="submit" className="btn btn-primary" onClick={this.props.onAddNote}>
            Add
          </button>
      </div>
    )
  }

}

export default NoteForm;