import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
	const [message, setMessage] = useState("Loading...")
	
	useEffect(() => {
		fetch('http://localhost:8080/test/1')
		.then(res => {
			if(res.status === 200){
				return res.json()
			} else {
				Promise.reject()
			}
		})
		.then(test => {
			setMessage(test.message);
		})
		.catch(() => {
			setMessage("Something is wrong...")
		})
	}, [])
	
  return (
		<div className={"App"}>
			<h1>React is Working</h1>
			<p>{message}</p>
		</div>
  );
}

export default App;
