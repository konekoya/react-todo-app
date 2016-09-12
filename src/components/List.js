import React from 'react';

class List extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="todo-list" onClick={this.props.onRemoveTodo}>
        {
          this.props.items.map(function(item) {
            return (
              <li key={item} className="todo-item">{item}</li>
            );
          })
        }
      </ul>          
    );
  }
}

export default List;