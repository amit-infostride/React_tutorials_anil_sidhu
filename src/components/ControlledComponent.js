import React, { useState } from 'react'

const ControlledComponent = () => {
    let [val, setVal] = useState  ("")
    let [item, setItem] = useState  ("")
    return (
        <div>
            <h1>ControlledComponent</h1>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <input type="text" value={item} onChange={(e) => setItem (e.target.value)} />
            <h3> value :  {val}</h3>
        </div>
    )
}

export default ControlledComponent


// controlled component is  handle with state  