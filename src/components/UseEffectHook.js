import React, { useEffect ,useState} from 'react'

const UseEffectHook = () => {
    const[count,setCount]=useState(0)

    useEffect(() => {
     // alert('useEffect')
     console.warn('useEffect')     //component did mount ki waja se chal raha hai ye 
    },[count])       //[count]  yaha pe condion hoti hai ki sirf count ki state pe update hoga or kisi pe ni 

    return (
        <div>
        <div>UseEffectHook</div>
         <h1>{count}</h1>
        {/* <button onClick={()=>setCount(1)}>Update Counter</button>   // sirf ek bar count hogaa  */}
        <button onClick={()=>setCount(count+1)}>Update Counter</button>
        </div>
    )
}

export default UseEffectHook