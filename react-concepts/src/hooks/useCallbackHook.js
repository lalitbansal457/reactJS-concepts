// Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).



import {useCallback, useState} from 'react';
import Hello from "../Hello";

const Counter = () => {
	const  [count, setCount] = useState(0);

	const increment = useCallback(()=> {
		console.log("useCallback");
		setCount(c => c + 1);
	}, [setCount]);

	return (
		<>
			<div>Count: {count}</div>
			<Hello increment = {increment} />
		</>
	)
}

export default Counter;