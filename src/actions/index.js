import store from '../reducers';

export const INIT_APP = 'INIT_APP';
export const ADD_TODOS_LIST = 'ADD_TODOS_LIST';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO_LIST = 'REMOVE_TODO_LIST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

let nextTodosListId = 0;
let nextTodoItemsId = 0;

export const initApp = () => ({
  type: INIT_APP,
});

export const addTodoList = title => ({
  type: ADD_TODOS_LIST,
  id: nextTodosListId++,
  title,
});

export const addTodo = (title, todoListId) => ({
  type: ADD_TODO,
  id: nextTodoItemsId++,
  title,
  todoListId,
  owner: 1,
  asigne: 1,
  timer: 0,
});

export const removeTodoList = id => ({
  type: REMOVE_TODO_LIST,
  todosId: id,
});

export const requestSuccess = todos => ({
  type: REQUEST_SUCCESS,
  todos,
});

export const boundInitApp = () => store.dispatch(initApp());
export const boundRequestSuccess = json => store.dispatch(requestSuccess(json));
export const boundAddTodo = (title, todoListId) => store.dispatch(addTodo(title, todoListId));
export const boundRemoveTodoList = id => store.dispatch(removeTodoList(id));
export const boundAddTodoList = title =>
  store.dispatch(addTodoList(title, store.getState().length));
