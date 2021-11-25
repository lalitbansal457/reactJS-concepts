import {useState, useMemo} from "react";

let longestWord = "";
const computeLongestWord = (arr) => {
	console.log("computing");
	arr.forEach(sentance => sentance.split(" ").forEach(word => {
		//console.log(word)
		if(word.length > longestWord.length) {
			longestWord = word;
		}
	}))
	return longestWord;
}

const CheckUseMemo = () => {
	const [count, setCount] = useState(0);
	const [data, setData]  = useState(["I am the low", "I am high", "I am higher"])

	const longestWord = useMemo(() => computeLongestWord(data), [data]);
	//console.log("longestWord", longestWord);

	const handleClick = () => {
		setCount(count+1)
	}

	return (
		<div>
			<p>I am useMemo</p>
			<p>Count: {count}</p>
			<button onClick={handleClick}>Increment</button>
			{longestWord}
		</div>
	)
}

export default CheckUseMemo;