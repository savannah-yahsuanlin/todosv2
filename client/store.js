import { createStore } from "redux";
import axios from "axios";

const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const SET_TODOS = "SET_TODOS";

const _createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    todo,
  };
};

const _updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    todo,
  };
};

const _deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    todo,
  };
};

const _setTodos = (todos) => {
  return {
    type: SET_TODOS,
    todos,
  };
};

const createTodo = (todo, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/todos", todo);
      dispatch(_createTodo(data));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

const updateTodo = (todo, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/todos/${todo.id}`, todo);
      dispatch(_updateTodo(data));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteTodo = (id, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/todos/${id}`);
      dispatch(_deleteTodo(data));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/todos");
      dispatch(_setTodos(data));
    } catch (error) {
      console.log(error);
    }
  };
};

function reducer(state = [], action) {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id !== action.todo.id ? todo : action.todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.todo.id);
    case CREATE_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

export {createTodo, updateTodo, deleteTodo, fetchTodos}