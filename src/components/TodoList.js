import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h3>Child component</h3>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.todo}
          {!todo.state && (
            <button onClick={() => handleComplete(index)}>Complete</button>
          )}
        </li>
      ))}
    </div>
  );
};


export default TodoList;
