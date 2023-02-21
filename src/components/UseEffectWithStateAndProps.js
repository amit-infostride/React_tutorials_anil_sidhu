import React, { useEffect, useState } from 'react'

const UseEffectWithStateAndProps = () => {
    const [data, setData] = useState(10)
    const [count, setCount] = useState(100);


    useEffect(() => {
        // console.warn('use Effect called')
        console.warn('call with data state')
    }, [data])             // jo bhi hum pass kare data be use Effect use ho raha hai count pe ni ho raha hai 

    useEffect(() => {
        // console.warn('use Effect called')

        alert('count is ' + count)
    }, [count])             // jo bhi hum pass kare data be use Effect use ho raha hai count pe ni ho raha hai 


    // specific state pe call ho raha hai ye 
    // specific data ke liye   file is UseEffectWithSpecificData.js

    return (
        <div>
            <h1>UseEffectWithStateAndProps</h1>
            <h1>count : {count}</h1>
            <h1>count : {data}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setData(data + 1)}>Update data</button>
        </div>

    )
}

export default UseEffectWithStateAndProps 