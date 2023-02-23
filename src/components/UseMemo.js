import React, { useState, useMemo } from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiCountMemo = useMemo(function multiCount() {

        console.warn('multiCount')
        return count * 5
    }, [count])
    return (
        <div>
            <h1>UseMemo</h1>
            <button onClick={() => setCount(count + 1)}>Update count</button>
            <h2>count :{count}</h2>
            <h2>Item :{item}</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={() => setItem(item * 10)}>Update Item</button>

        </div>
    )
}

export default UseMemo

// use memo is used  for inhancing the performace of application 
// if we click update count  count is increaase  and multicount is increased by multiplying with 5 and it is printing
//  in console.warn but if we are clicking on update item then item is updated but 
// mutlcount is also printing in console.warn so to remove this useMemo came into picture 

// now you can see after using useMemo  it is not updating


