import React,{useState} from 'react'

function HideShowToggle() {

    const [status,setStatus]=useState(true)    
                                            // useState(true)  true meaning is hamne state(h1 element) ki staus dikhani hai ya hide karni hai 
  return (
    <div>
        <h1>HideShowToggle</h1>
        {
            status? <h1>Element</h1> :null
        }
         <button onClick={()=>setStatus(false)}>Hide</button> 
         <button onClick={()=>setStatus(true)}>Show</button> 

        {/* Toggle */}
    {/* <button onClick={()=>setStatus(!status)}>Toggle</button>       */}
                                                      {/* !status means agar status true hai to false or false hai to true */}
         
    </div>
  )
}

export default HideShowToggle