import {createStore, applyMiddleware, combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import todos from './todos'

const reducer = combineReducers({
	todos
})


const store = createStore(reducer, applyMiddleware(thunk, createLogger({collapsed:true})))

export default store