import React, { Component } from 'react';
import { createTodo } from './store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateTodo extends Component {
	constructor() {
		super()
		this.state = {
			taskName: '',
			assignee: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		const change = {}
		change[e.target.name] = e.target.value
		this.setState(change)
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createTodo({...this.state})
	}

	render() {
		const { assignee, taskName } = this.state;
    const { onChange, handleSubmit } = this;
		return (
			<form onSubmit={handleSubmit}>
				<label>Task Name:</label>
				<input name='taskName' value={taskName} onChange={onChange}/>
				<label>Assignee:</label>
				<input name='assignee' value={assignee} onChange={onChange}/>
				<button>Create</button>
				<Link to='/'>Cancel</Link>
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch, {history}) => ({
	createTodo: (todo) => dispatch(createTodo(todo, history))
})

export default connect(null, mapDispatchToProps)(CreateTodo);
