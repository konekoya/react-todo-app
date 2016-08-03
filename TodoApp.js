var Todo = React.createClass({
  getInitialState: function() {
    return {
      items: ['Pay mobile phone bill', 'Pick up Andrew from daycare at 5 PM ', 'Grocery shopping', '10 minutes workout'],
      todo: ''
    };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.todo.length > 0) {
      this.setState({
        items: this.state.items.concat([this.state.todo]),
        todo: ''
      });
    } 
  },
  handleRemoveTodo: function(e) {
    let result = this.state.items.filter(function(item) {
        return item !== e.target.textContent;
    });
    this.setState({
      items: result
    })
  },
  onChange: function(e) {
    this.setState({
      todo: e.target.value
    });
  },
  render: function() {
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
});

var TodoList = React.createClass({
  render: function() {
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
});

// Render the main component and append it to DOM
ReactDOM.render(<Todo />, document.getElementById('app'));