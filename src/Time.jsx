/** @format */

import React, { useState, useEffect } from 'react'

const Time = () => {
	const [watch, setWatch] = useState('')

	useEffect(() => {
		const intervalId = setInterval(() => {
			const now = new Date()
			const hr = now.getHours()
			const min = now.getMinutes()
			const sec = now.getSeconds()

			const monthName = now.toLocaleString('default', { month: 'short' })
			const day = now.getDate()
			setWatch(
				`${monthName} ${day} - ${hr < 10 ? '0' + hr : hr}:${
					min < 10 ? '0' + min : min
				}:${sec < 10 ? '0' + sec : sec}`
			)
		}, 1000)
		return () => {
			clearInterval(intervalId)
		}
	}, [])
	return (
		<div className='time-container'>
			<p>{watch}</p>
		</div>
	)
}

export default Time
