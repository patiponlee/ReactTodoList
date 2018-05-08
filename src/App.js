import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import { ListGroup, Button } from 'react-bootstrap';
class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      todos:[
        {id: 0,text: "Wake up @ 7.30AM"},
        {id: 1,text: "Take a bath"},
        {id: 2,text: "Go to the office"},
      ],
      nextId: 3
    }
    this.addToDo = this.addToDo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addToDo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }
  removeTodo(id) {
    this.setState({
        todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo list</h1>
        </header>
        <div className="todo-wrapper">
          <h1 className="App-title"></h1>
          <ToDoInput todoText="" addToDo={this.addToDo}/>
          <ListGroup>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ListGroup>
        </div>
      </div>

    );
  }
}

export default App;
