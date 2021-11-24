
// Tip : Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect.

import {useEffect, useState} from "react";


const CheckUseEffect = () => {
	const [state, setState] = useState(0);

	// This will called on every update
	useEffect(() => {
		console.log("render me on every update");
	})

	// This will also create an infiite loop beacause we are changing the state inside useEffect and passing state as dependency
	/*useEffect(() => {
			console.log("render");	
			setState(state => state +1);
	}, [state])*/


	// This will be called on every "state:dependency" update (componentDidUpdate)
	useEffect(() => {
			console.log("state update");	
	}, [state]);


	// This will be called only once (componentDidMount)
	useEffect(() => {
			console.log("only Once");	
	}, []);

	// This will render when component unmount (componentWillUnmount)
	useEffect(() => {
			return () => {
				console.log("componentWillUnmount")
			}
	}, []);



	const handleClick = () => {
		setState(state => state +1);
	}


	return (
		<>
			<p>I am use useEffect Hook</p>
			<button onClick={handleClick}>Count</button>
		</>
	)
}

export default CheckUseEffect;