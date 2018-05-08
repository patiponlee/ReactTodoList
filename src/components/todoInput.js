import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './todoInput.css';

class ToDoInput extends Component {
  constructor(props){
    super(props);

    this.state= {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  addToDo(todo){
    if(todo.length > 0){
      this.props.addToDo(todo);
      this.setState({value: ''});
    }
  }
  render (){
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn btn-primary" type="submit" onClick={ () => this.addToDo(this.state.value)}> ADD </button>
      </div>
    );
  }
}
export default ToDoInput;
