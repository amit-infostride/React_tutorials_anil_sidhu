import React, { useState } from 'react'

const HigherOrderComponent = () => {
    return (
        <div>
            <h1>HigherOrderComponent</h1>

            {/* <Counter /> */}


            <HOCRed cmp={Counter} /> <br /><br />
            <HOCGreen cmp={Counter} />
        </div>
    )
}

// higher order function

function HOCRed(props) {
    return (

        <h2 style={{ backgroundColor: 'red', width: 200 }}><props.cmp /></h2>
    )
}

function HOCGreen(props) {
    return (

        <h2 style={{ backgroundColor: 'green', width: 200 }}><props.cmp /></h2>
    )
}



function Counter() {

    const [count, setCount] = useState(0)
    return <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}> Update</button>
    </div>
}


export default HigherOrderComponent