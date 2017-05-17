import React from 'react';
import Todo from './Todo.jsx';
import AddTodo from './AddTodo/index.jsx';
import RemoveElement from '../components/RemoveElement/index.jsx';
import { addTodo,  removeTodoList } from '../actions';

const Todos = ({todos, title, store, listId})=> {
  console.log('todos: ', todos);
  const handlerSubmit = (title) => store.dispatch(addTodo(title, listId));
  const action = ()=> store.dispatch(removeTodoList(listId));

  return (
    <ul>
      <li>
        <strong>{title}</strong> | <RemoveElement action={action} />
      </li>
      <AddTodo submit={handlerSubmit} />
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}


export default Todos;
