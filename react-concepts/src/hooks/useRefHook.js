//useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

import {useRef} from "react";

const InputForm = () => {
	const inputRef = useRef();

	const handleClick = () => {
		console.log(inputRef.current.value);
	}

	return (
		<div style={{"marginTop": "20px"}}>
			<input type="text" name="Name" ref={inputRef} />
			<button onClick={handleClick}>Click</button>
		</div>
	)
}

export default InputForm;