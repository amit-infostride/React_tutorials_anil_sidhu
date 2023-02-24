import React, { useRef } from 'react'
import ForwardRef2 from './ForwardRef2'

const ForwardRef1 = () => {

  let inputRef = useRef(null)
  function updateInput() {
    inputRef.current.value = '1000'
    inputRef.current.style.color = 'red'
    inputRef.current.focus()
  }
  return (
    <div>
      <h1>ForwardRef1</h1>
      <ForwardRef2 ref={inputRef} />
      <button onClick={updateInput}>Update Input Box </button>
    </div>
  )
}

export default ForwardRef1


// forwardRef 2 is a child component 


