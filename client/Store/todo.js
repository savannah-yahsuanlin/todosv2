import axios from 'axios'
const SET_TODO = 'SET_TODO'

export const _setTodo = (todo) => {
	return {
		type: SET_TODO,
		todo
	}
}

export const fetchTodo = (id) => {
	return async dispatch => {
		try {
			const {data} = await axios.get(`/api/todos/${id}`)
			dispatch(_setTodo(data))
		} catch (error) {
			console.log(error)
		}
	}
}

export default (state = {}, action) => {
	switch(action.type) {
		case SET_TODO:
			return action.todo
		default:
			return state
	}
}