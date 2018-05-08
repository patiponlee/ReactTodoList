import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './todoItem.css';

class ToDoItem extends Component{
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo" bsStyle="danger" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>  {this.props.todo.text}
      </div>
    );
  }
}

export default ToDoItem;
