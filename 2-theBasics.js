//https://jscomplete.com/playground/s493628
// The basics

function Hello() {
	return <div>Hello React!</div>;
}

function Display(props){
  return (
  <div>{props.message}</div>)
}


function Button(props) {
  const handleClick = () => props.onClickHandler(props.increment);
  return <button onClick={handleClick} > + {props.increment} </button>;
}

function Button2() {
  const [counter, setCounter] = useState(100);
	return <button onClick={() => setCounter(counter+1)} >Counter = {counter} </button>;
}


function App(){
  const [counter, setCounter] = useState(0);
  let increment = 1
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue); 

   return  (
    <div> <Hello/>  <Button2 /> 
       <Button onClickHandler={incrementCounter} increment={1} /> 
       <Button onClickHandler={incrementCounter} increment={10} /> 
       <Button onClickHandler={incrementCounter} increment={100} /> 
       <Display message={counter} /> </div> 
  )
}

const virtualDomDemo = () =>{
document.getElementById('mountNode').innerHTML = `
<div>Hello HTML, this is being fully rerendered every time the timer ticks  
<input />
<pre> ${(new Date).toLocaleTimeString()}</pre>
</div>`;

ReactDOM.render(
  React.createElement('div', null, 'Hello React, only the time is being rendered every time the timer ticks !!!!!',
  React.createElement('input', null),
  React.createElement('pre', null, (new Date).toLocaleTimeString() )),
  document.getElementById('mountNode2')
);
}

setInterval(virtualDomDemo, 1000);

//currentTime: (new Date).toLocalTimeString()

//ReactDOM.render(
  // <App />
 // ,  document.getElementById('mountNode2'),
//);
