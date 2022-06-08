import React from "react";

import "../App.css";


export class AddTask extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      note: '',
    }
  }
  
  render () {
    const { onAdd } = this.props;
    console.log(this.state.note.length)
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAdd(this.state.note);
          this.setState({
            note: '',
          })
        }}
      >
        <input
          className   = "add-task"
          type        = "text"
          placeholder = "Сделай выбор"
          value       = { this.state.note }
          onChange    = {({ target: { value } }) => this.setState({
            note: value
          })}
          required
          autoFocus
        />
      </form>
    )
    
  }

}

