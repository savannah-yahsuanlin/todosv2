import  {createStore, applyMiddleware, combineReducers} from 'redux'
import loggingMiddleware from 'redux-logger'
import thunk from 'redux-thunk'
import todosReducer from './todos'
import todoReducer from './todo'

const rootReducer = combineReducers({
	todos: todosReducer,
	todo: todoReducer
})

 const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
);

export default store
