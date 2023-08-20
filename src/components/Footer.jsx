/** @format */
import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
	return (
		<footer>
			<p>Copyright &copy; {new Date().getFullYear()}</p>
			<Link to='/about'>About</Link>
		</footer>
	)
}

export default Footer
