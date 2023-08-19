/** @format */
import { Task } from './components/Task'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'

function App() {
	const [showTask, setShowTask] = useState(false)
	const [tasks, newTask] = useState([])
	useEffect(() => {
		const getTasks = async () => {
			const serverTask = await fetchTasks()
			newTask(serverTask)
		}
		getTasks()
	}, [])

	// Fetch Data from db.json
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/task')
		const data = await res.json()
		return data
	}
	// Fetch single Data from db.json
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/task/${id}`)
		const data = await res.json()

		return data
	}

	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/task', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		})
		const data = await res.json()
		// const id = crypto.randomUUID()
		// const SetTask = { id, ...task }
		// newTask([...tasks, SetTask])
		newTask([...tasks, data])
	}

	const selectTask = async (id) => {
		const toggleTask = await fetchTask(id)
		const upTask = { ...toggleTask, reminder: !toggleTask.reminder }
		const res = await fetch(`http://localhost:5000/task/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(upTask),
		})
		const data = await res.json()
		newTask(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			)
		)
	}
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/task/${id}`, { method: 'DELETE' })
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
