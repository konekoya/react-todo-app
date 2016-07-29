var Todo = React.createClass({
  getInitialState: function() {
    return {
      items: ['Google', 'Amazon', 'Dropbox', 'Apple'],
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
  onChange: function(e) {
    this.setState({
      todo: e.target.value
    });
  },
  render: function() {
    return (
      <div className="todo-container">
        <div className="todo-heading-container">
          <h2 className="todo-heading">Milton's Todos</h2>
          <span className="todo-count">Todo counts: {this.state.items.length}</span>
        </div>
        <TodoList items={this.state.items} />
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <input className="todo-user-input" onChange={this.onChange} value={this.state.todo} type="text"/>
          <button className="todo-add">Add Todo</button>
        </form>
      </div>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    return (
      <ul className="todo-list">
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

ReactDOM.render(<Todo />, document.getElementById('app'));