import { createStore } from 'redux';
import Request from '../lib/request.jsx';

const API_HOST = 'http://localhost:8000/todo';

const Store = createStore(todosMain);
const request = new Request(Store);


const todoItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
          ...state,
        {
          id: action.id,
          todoListId: action.todoListId,
          title: action.title,
          completed: false,
          owner: action.owner || 0,
          asigne: action.asigne || 0,
          timer: 0,
        },
      ];
    default:
      return state;
  }
};

const todosList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODOS_LIST':
      return [
        ...state,
        {
          title: action.title,
          todos: [],
          completed: false,
          id: action.id,
        },
      ];
    default:
      return state;
  }
};

const initialState =  { todos: [], todoItems: [] };

const normalizedState = {
  todos: {
    byId: {
      todo1:
      {
        title: 'estudiar react js',
        todos: [],
        completed: false,
        id: 'todo1',
      },
      todo2:
      {
        title: 'buscar trabajo',
        todos: [],
        completed: false,
        id: 'todo1',
      },
    },
    allIds: ['todo1', 'todo2'],
  },
  todoItems:
  {
    byId: {
      item1:
      {
        id: 'item1',
        todoListId: 'todo1',
        title: 'entrar al blog de Dan Abramov',
        completed: false,
        owner: 0,
        asigne: 0,
        timer: 0,
      },
      item2:
      {
        id: 'item2',
        todoListId: 'todo2',
        title: 'entrar al blog de Dan Abramov',
        completed: false,
        owner: 0,
        asigne: 0,
        timer: 0,
      },
    },
    allIds: ['item1', 'item2'],
  },
};


function todosMain(state = initialState, action) {
  console.log('State changed: ', state, action);
  switch (action.type) {
    case 'INIT_APP':
      // request.get(API_HOST);
      return Object.assign({}, state); // , { todos: [...state.todos] });

    case 'REQUEST_SUCCESS':
      return Object.assign({}, state); // , { todos: action.todos });

    case 'ADD_TODOS_LIST':
      // request.put(API_HOST, todoList);
      return Object.assign({}, state, {
        todos: todosList(state.todos, action) });

    case 'ADD_TODO':
      return Object.assign({}, state, {
        todoItems: todoItems(state.todoItems, action) });
    //   return state.map((todoslist) => {
    //     if (todoslist.todosId === action.todosId) {
    //       return Object.assign({}, todoslist, {todos: todos(todoslist.todos, action)});
    //     }
    //     else return todoslist;
    //   });
    //   return state;
    default:
      return state;
  }
}

export default Store;
