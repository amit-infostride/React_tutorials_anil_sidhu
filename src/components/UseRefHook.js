import React,{useRef} from 'react'

const UseRefHook = () => {
    let inputRef= useRef(null)
    function handleInput(){
        console.warn('function call')
        inputRef.current.value='1000'
        // inputRef.current.focuc()
        // inputRef.current.style.color='red'
        inputRef.current.style.display='none'    // used as hide and show as toggle elemnents 
    }
    return (
        <div>
            <h1>UseRefHook</h1>
            <input type="text "  ref={inputRef}  />
            <button onClick={handleInput}>Handle Input </button>
        </div>
    )
}

export default UseRefHook


// button  ke click hone pe value add ho jaye   isse         inputRef.current.value='1000'
