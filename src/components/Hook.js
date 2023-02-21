import React,{useState} from 'react'

const Hook = () => {
    const [data,setData]=useState('Anil')            
//   useState ko destruct kar rahe hai       and   useState(//by default value jati hai ismein)
  return (
    <div>
    <div>Hook</div>
    <h1>{data}</h1>
    <button onClick={()=>setData('sidhu')}>Update Data</button>
    </div>
  )
}

export default Hook