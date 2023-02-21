import React, { useEffect } from 'react'

const UseEffectWithProps = (props) => {


  useEffect(() => {

     alert('count is '+props.count)
  },[props.count])  



  // specific state pe call ho raha hai ye 
  // specific data ke liye   file is UseEffectWithSpecificData.js

  return (
    <div>
      <h1>UseEffectWithStateAndProps</h1>
      <h1>count Props : {props.count}</h1>
      <h1>Data Props : {props.data}</h1>

    </div>

  )
}

export default UseEffectWithProps








