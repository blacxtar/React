// import "./App.css";
import { useState } from "react"; 
const currentDate =new Date().getDate()
const currentMonth =new Date().getMonth()
const currentYear =new Date().getFullYear()

function Counter(props){
    const[counter,setCounter]=useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p contentEditable="true" style={{color:"red", border:"3px solid white"}}>
          <code>{props.name}</code> using this react app on date {currentDate}-{currentMonth}-{currentYear}
        </p>
        <button onClick={()=> setCounter((prevCount)=>prevCount+1)}>+</button>
        
        <h1>{counter}</h1>
        <button onClick={()=> setCounter((prevCount)=>prevCount-1)}>-</button>
      </header>
    </div>
  );
}

export default Counter