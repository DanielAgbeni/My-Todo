/** @format */
import { Task } from './components/Task'
import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'

function App() {
	const [showTask, setShowTask] = useState(false)
	const [tasks, newTask] = useState([
		// {
		// 	id: crypto.randomUUID(),
		// 	text: 'Eat',
		// 	day: 'Feb 5th at 2:30pm',
		// 	reminder: true,
		// },
		// {
		// 	id: crypto.randomUUID(),
		// 	text: 'Meeting',
		// 	day: 'Feb 17th at 4:30pm',
		// 	reminder: true,
		// },
		// {
		// 	id: crypto.randomUUID(),
		// 	text: 'Read',
		// 	day: 'Feb 15th at 6:30pm',
		// 	reminder: false,
		// },
		// {
		// 	id: crypto.randomUUID(),
		// 	text: 'Sleep',
		// 	day: 'Feb 8th at 2:30pm',
		// 	reminder: true,
		// },
	])

	const addTask = (task) => {
		console.log(task)
		const id = crypto.randomUUID()
		const SetTask = { id, ...task }
		newTask([...tasks, SetTask])
	}

	const selectTask = (id) => {
		newTask(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		)
	}
	const deleteTask = (id) => {
		newTask((currentTask) => currentTask.filter((tasks) => tasks.id !== id))
	}
	return (
		<div className='container'>
			<Header onAdd={() => setShowTask(!showTask)} showAdd={showTask} />
			{showTask && <Form onAdd={addTask} />}
			<Task task={tasks} selectTask={selectTask} onDelete={deleteTask} />
		</div>
	)
}
export default App
