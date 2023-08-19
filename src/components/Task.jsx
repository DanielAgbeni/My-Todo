/** @format */

import React from 'react'
import TaskList from './TaskList'

export const Task = (props) => {
	return (
		// newTask([...tasks])
		<div>
			{props.task.length === 0 && 'Nothing to do'}
			{props.task.map((task) => (
				<TaskList
					key={task.id}
					task={task}
					deleted={props.onDelete}
					select={props.selectTask}
				/>
			))}
		</div>
	)
}
