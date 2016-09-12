import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <form className="todo-form" onSubmit={this.props.onSubmit}>
        <input className="todo-user-input" required onChange={this.props.onChange} value={this.props.todo} type="text"/>
        <button className="todo-add">Add Todo</button>
      </form>
    );
  }
}

export default Form;
