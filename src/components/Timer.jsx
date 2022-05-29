// import { useState } from "react"
import React ,{useState,useRef,useEffect} from 'react'

const Timer = ({value,setvalue}) => {
  const [millis,setmilis]=useState(0)
const [end,setend]=useState("")
    const timerid=useRef()
    useEffect(() => {
      // console.log(millis)
      
      return () => {
        clearInterval(timerid.current)
        // timerid.current=null
      }
    },[])
    let x="start"
      let y="stop"
      let tostart=()=>{
          setvalue(!value)
        //   console.log(value)
          if(!timerid.current){
          let id=setInterval(()=>{
return setmilis((prev)=>prev+1)
          },1)
          timerid.current=id
        }
      }

      let toreset=()=>{
          clearInterval(timerid.current)
          setmilis(0)
          timerid.current=null
          setvalue(false)
          // console.log()
          setend("")
      }
      let tostop=()=>{
          setvalue(!value)
          clearInterval(timerid.current)
          timerid.current=null
      }
// 
      ; // "4:59"
      ;  // "1:01"
      
      
      function msToTime(s) {

        // Pad to 2 or 3 digits, default is 2
        function pad(n, z) {
          z = z || 2;
          return ('00' + n).slice(-z);
        }
      
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
      if(Number(end)<=pad(secs)){
clearInterval(timerid.current)
// console.log(end,Number(pad(secs)))
      }  
      // console.log(end,Number(pad(secs)))     
       return pad(secs) + '.' + pad(ms, 3);
      }
  return (
    <div>
      <input type="number" value={end} onChange={(e)=>setend(e.target.value)}/>
      <span>{msToTime(millis)}</span><span>s</span>
<button onClick={value?tostop:tostart}>{value?y:x}</button><button onClick={toreset}>reset</button>
    </div>
  )
}

export default Timer