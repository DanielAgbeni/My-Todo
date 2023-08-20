/** @format */

import React from 'react'
import { FaTimes } from 'react-icons/fa'

const TaskList = (props) => {
	return (
		<div
			className={`task ${props.task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => props.select(props.task.id)}>
			<h3>
				{props.task.text}{' '}
				<FaTimes
					style={{
						color: 'red',
						cursor: 'pointer',
					}}
					onClick={() => props.deleted(props.task.id)}
				/>
			</h3>
			<p>{props.task.day}</p>
		</div>
	)
}

export default TaskList
