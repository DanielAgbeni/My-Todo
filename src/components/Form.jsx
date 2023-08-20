/** @format */
import { useState } from 'react'
const Form = ({ onAdd }) => {
	const [text, setNewTask] = useState('')
	const [day, setNewDate] = useState('')
	const [time, setNewTime] = useState('')
	const [reminder, setNewReminder] = useState(false)
	const setDate = (e) => {
		setNewDate(e.target.value)
	}
	const setTask = (e) => {
		setNewTask(e.target.value)
	}
	const setReminder = (e) => {
		setNewReminder(e.currentTarget.checked)
	}
	const setTime = (e) => {
		setNewTime(e.target.value)
	}
	const date = new Date(day).getDate()
	const month = new Date(day).toLocaleString('en-NG', { month: 'short' })

	let submit = (e) => {
		e.preventDefault()
		const taskData = {
			text: text,
			day: `${month} ${date}th at ${time}`,
			time: time,
			reminder: reminder,
		}
		onAdd(taskData)
		if (text === '') return
		// console.log(taskData)
		setNewTask('')
		setNewReminder(false)
		setNewTime('')
		setNewDate('')
	}
	return (
		<form className='add-form' onSubmit={submit}>
			<div className='form-control'>
				<label>New Task</label>
				<input
					value={text}
					onChange={setTask}
					type='text'
					placeholder='Add Task'
					required
				/>
			</div>
			<div className='form-control'>
				<label>Date</label>
				<input value={day} onChange={setDate} type='date' />
			</div>
			<div className='form-control'>
				<label>Time</label>
				<input value={time} onChange={setTime} type='time' required />
			</div>
			<div className='form-control form-control-check '>
				<label>Set Reminder</label>
				<input
					value={reminder}
					onChange={setReminder}
					checked={reminder}
					type='checkbox'
				/>
			</div>
			<input type='submit' value='Save Task' className='btn btn-block' />
		</form>
	)
}

export default Form
