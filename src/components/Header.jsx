/** @format */
import PropTypes from 'prop-types'
import { Button } from './Button'

const Header = (props) => {
	return (
		<div className='header'>
			<h1>{[props.title]}</h1>

			<Button
				text={props.showAdd ? 'Close' : 'Add'}
				color='green'
				onClick={props.onAdd}
			/>
		</div>
	)
}
Header.defaultProps = {
	title: 'Task Tracker',
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
}
export default Header
