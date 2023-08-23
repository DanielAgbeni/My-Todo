/** @format */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Task } from './components/Task'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import About from './components/About'
import Time from './Time'

function App() {
	const [showTask, setShowTask] = useState(false)
	const [tasks, newTask] = useState(() => {
		const localValue = localStorage.getItem('ITEM')
		if (localValue == null) return []
		return JSON.parse(localValue)
	})
	useEffect(() => {
		localStorage.setItem('ITEM', JSON.stringify(tasks))
	}, [tasks])

	// Fetch Data from db.json
	// const fetchTasks = async () => {
	// 	const res = await fetch('http://localhost:5000/task')
	// 	const data = await res.json()
	// 	return data
	// }
	// // Fetch single Data from db.json
	// const fetchTask = async (id) => {
	// 	const res = await fetch(`http://localhost:5000/task/${id}`)
	// 	const data = await res.json()

	// 	return data
	// }

	const addTask = (task) => {
		// const res = await fetch('http://localhost:5000/task', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 	},
		// 	body: JSON.stringify(task),
		// })
		// const data = await res.json()
		const id = crypto.randomUUID()
		const SetTask = { id, ...task }
		newTask([...tasks, SetTask])
	}

	const selectTask = (id) => {
		// const toggleTask = await fetchTask(id)
		// const upTask = { ...toggleTask, reminder: !toggleTask.reminder }
		// const res = await fetch(`http://localhost:5000/task/${id}`, {
		// 	method: 'PUT',
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 	},
		// 	body: JSON.stringify(upTask),
		// })
		// const data = await res.json()
		newTask(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		)
	}
	const deleteTask = (id) => {
		// await fetch(`http://localhost:5000/task/${id}`, { method: 'DELETE' })
		newTask((currentTask) => currentTask.filter((tasks) => tasks.id !== id))
	}
	return (
		<Router>
			<div className='container'>
				<Time />
				<Header onAdd={() => setShowTask(!showTask)} showAdd={showTask} />

				<Routes>
					<Route
						path='/'
						element={
							<>
								{showTask && <Form onAdd={addTask} />}
								<Task
									task={tasks}
									selectTask={selectTask}
									onDelete={deleteTask}
								/>
							</>
						}
					/>
					<Route path='/about' element={<About />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}
export default App
