import React, {Component} from 'react'
import { setTodo, _setTodo } from '../store/todo'
import { deleteTodo, updateTodo } from '../store/todos'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UpdateTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			taskName: this.props.todo.id ? this.props.todo.taskName : '',
			assignee: this.props.todo.id ? this.props.todo.assignee : ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	componentDidMount() {
		const {id} = this.props.match.params
		this.props.setTodo(id);
	}

	componentWillUnmount() {
    this.props.clearTodo();
  }

	componentDidUpdate(prevProps) {
    if (prevProps.todo.id !== this.props.todo.id) {
      this.setState({
        taskName: this.props.todo.taskName || '',
        assignee: this.props.todo.assignee || ''
      });
    }
  }

	onChange(evt) {
		this.setState({
				[evt.target.name]: evt.target.value
			});
	}

	handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTodo({ ...this.props.todo, ...this.state });
  }


	render() {
		const {taskName, assignee} = this.state
		const {onChange, handleSubmit} = this

		return (
			<div>
				 <form id='todo-form' onSubmit={handleSubmit}>
          <label htmlFor='taskName'>Task Name:</label>
          <input name='taskName' onChange={onChange} value={taskName} />

          <label htmlFor='assignee'>Assign To:</label>
          <input name='assignee' onChange={onChange} value={assignee} />

          <button type='submit'>Submit</button>
        </form>
				<div onSubmit={(ev) => ev.preventDefault()}>
						<button onClick={() => this.props.deleteTodo(this.props.match.params.id)}>Delete</button>
				</div>
				<button><Link to='/'>Cancel</Link></button>
			</div>
		)
	}
}

const mapStateToProps = ({ todo }) => ({
  todo
});

const mapDispatchToProps = (dispatch, {history}) => {
	return {
		clearTodo: () =>  dispatch(_setTodo({})),
		updateTodo: (todo) => {dispatch(updateTodo(todo, history))},
		setTodo: (id) => dispatch(setTodo(id)),
		deleteTodo: (todo) => dispatch(deleteTodo(todo, history)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo);