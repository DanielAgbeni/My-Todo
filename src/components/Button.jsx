/** @format */

export const Button = (props) => {
	return (
		<div>
			<button onClick={props.onClick} className='btn'>
				{props.text}
			</button>
		</div>
	)
}
