import React from 'react';
import Title from '../components/Title.jsx';
import Todos from '../components/Todos.jsx';
import AddTodoList from '../components/AddTodo/index.jsx';
import { boundAddTodoList } from '../actions';
import LayoutPropTypes from './props';

const Layout = ({ store, title }) => {
  const handlerSubmit = listTitle => boundAddTodoList(listTitle);
  return (
    <div>
      <Title value={title} />
      <AddTodoList submit={handlerSubmit} />
      {
        store.getState().todos.map(todo =>
          <Todos {...todo} key={todo.id} store={store} />)
      }
    </div>
  );
};

export default Layout;
