import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import todosReducer from './todos';
import todoReducer from './todo';

const rootReducer = combineReducers({
  todos: todosReducer,
  todo: todoReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
);
