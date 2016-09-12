import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Form from './Form';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Pay mobile phone bill', 'Pick up Andrew from daycare at 5 PM ', 'Grocery shopping', '10 minutes workout'],
      todo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.todo.length > 0) {
      this.setState({
        items: this.state.items.concat([this.state.todo]),
        todo: ''
      });
    } 
  }

  handleRemoveTodo(e) {
    let result = this.state.items.filter(function(item) {
        return item !== e.target.textContent;
    });
    this.setState({
      items: result
    })
  }

  onChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-heading-container">
          <h2 className="todo-heading">Kay's Todo List</h2>
          <span className="todo-count">Todo counts: {this.state.items.length}</span>
        </div>
        <List items={this.state.items} onRemoveTodo={this.handleRemoveTodo} />
        <Form onSubmit={this.handleSubmit} onChange={this.onChange} todo={this.state.todo} />
      </div>
    );
  }
}

export default Todo;