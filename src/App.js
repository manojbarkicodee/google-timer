import logo from './logo.svg';
import './App.css';
// import Forms from "./components/Timer"
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
import { useState,useRef } from 'react';

function App() {
  const [value2,setvalue2]=useState(false)
  const [value1,setvalue1]=useState(false)
  const [value,setvalue]=useState(false)
  

 
  return (
    <div className="App">
      
      <span onClick={()=>{
       setvalue2(true)
       setvalue1(false)
      }}>Timer</span>
      
<span onClick={()=>{
  // console.log("hello")
setvalue1(true)
 setvalue2(false)
}}>Stopwatch</span>
      {value2 ?<Timer value={value} setvalue={setvalue}/> :null} 
      {value1 ?<Stopwatch value={value} setvalue={setvalue} />:null}

    </div>
  );
}

export default App;
