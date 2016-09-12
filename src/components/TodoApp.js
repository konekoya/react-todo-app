import React from 'react';
import ReactDOM from 'react-dom';

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
        <TodoList items={this.state.items} onRemoveTodo={this.handleRemoveTodo} />
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <input className="todo-user-input" required onChange={this.onChange} value={this.state.todo} type="text"/>
          <button className="todo-add">Add Todo</button>
        </form>
      </div>
    );
  }

}


class TodoList extends React.Component{
  render() {
    return (
      <ul className="todo-list" onClick={this.props.onRemoveTodo}>
        {
          this.props.items.map(function(item) {
            return (
              <li className="todo-item">{item}</li>
            );
          })
        }
      </ul>          
    );
  }
}

export default Todo;