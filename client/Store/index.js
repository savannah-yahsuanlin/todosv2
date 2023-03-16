import  {createStore, applyMiddleware, combineReducers} from 'redux'
import loggingMiddleware from 'redux-logger'
import thunk from 'redux-thunk'
import todosReducer from './todos'

const rootReducer = combineReducers({
	todos: todosReducer
})

export default createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
);



