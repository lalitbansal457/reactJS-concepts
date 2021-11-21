import React from "react";


const Hello = React.memo(({increment}) => {
	return (
		<button onClick={increment}>Increment</button>
	)
})

export default Hello;