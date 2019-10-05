import React, { Component } from 'react';
import { notes } from '../data/notes.json'

class NoteForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      notes
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.severalFuncs = this.severalFuncs.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("this.props");
    console.log(this.props);
    this.props.addNote(this.state);
    this.setState({
      "chart_id":this.props.id,
      "notes_text":""
    });
  }


  handleInput(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  } 

  // Hides form and binds handleSubmit
  severalFuncs(e){
    this.props.hideNoteForm();
    this.handleSubmit(e);
  }

  render() {
    return (
      <div className="card absCenter">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="noteText"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Note Text"
              />
          </div>
        </form>
          
          <button type="submit" className="btn btn-primary" onClick={this.severalFuncs}>
            Add
          </button>
      </div>
    )
  }

}

export default NoteForm;