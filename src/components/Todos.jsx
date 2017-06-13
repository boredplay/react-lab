import React from 'react';
import Todo from './Todo.jsx';
import AddTodo from './AddTodo/index.jsx';
import RemoveElement from '../components/RemoveElement/index.jsx';
import { boundAddTodo, boundRemoveTodoList } from '../actions';

const Todos = ({ todos, title, id }) => {
  console.log('todos Todos: ', todos, title, id);
  const handlerSubmit = todoTitle => boundAddTodo(todoTitle, id);
  const action = () => boundRemoveTodoList(id);

  return (
    <ul>
      <li>
        <strong>{title}</strong> | <RemoveElement action={action} />
      </li>
      <AddTodo submit={handlerSubmit} />
      {todos.map(todo => {
        console.log('todoItems >> ', todo);
        return <Todo key={todo.id} {...todo} />
      })}
    </ul>
  );
}

// Default Todos Values Props
// Todos.defaultProps = {
//   todos: [],
// };


export default Todos;
