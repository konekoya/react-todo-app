var Todo = React.createClass({
  getInitialState: function() {
    return {
      items: ['Verycar', 'SX4C', 'Mazeda6', 'Impreza'],
      todo: ''
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat([this.state.todo]),
      todo: ''
    });
  },
  onChange: function(e) {
    this.setState({
      todo: e.target.value
    });
  },
  render: function() {
    return (
      <div className="todo-container">
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.todo} type="text"/>
          <button>Add Todo</button>
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
              <li>{item}</li>
            )
          })
        }
      </ul>          
    );
  }
});

ReactDOM.render(<Todo />, document.getElementById('app'));