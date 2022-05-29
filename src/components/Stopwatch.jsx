import React, { useRef, useState ,useEffect} from 'react'

const Stopwatch = ({value,setvalue}) => {
    const [millis,setmilis]=useState(0)

    const timerid=useRef()

    useEffect(() => {
     
    
      return () => {
       clearInterval(timerid.current)
      }
    }, [])
    
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
          console.log()
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
      
        return pad(secs) + '.' + pad(ms, 3);
      }
      
    //   console.log(msToTime(55018))
      
      
  return (
    <div>
<span>{msToTime(millis)}</span><span>s</span>
<button onClick={value?tostop:tostart}>{value?y:x}</button><button onClick={toreset}>reset</button>

    </div>
  )
}

export default Stopwatch