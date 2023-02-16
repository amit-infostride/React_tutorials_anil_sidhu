import React from 'react'

export const ClickEventAndFunc = () => {

    let data='anil sidhu'

    function Apple() { 
        // alert('Apple function called')

        data='peter'
        alert(data)
    }
 
    return (
        <div>
            <h2>Click Event and functions</h2>
            {/* <button onClick={Apple()}>Click Me !</button> */}
            {/* apple apne app call ho jaeyagee jab dom load hogaa */}

            {/* <button onClick={Apple}>Click Me !</button>    */}
             {/* onclick me event fire hogaa  */}

            {/* <button onClick={() => Apple()}>Click Me !</button> */}
            {/* agar alert ko call karna hai on click pe to arrow function bnana padegaa */}

             <h1>{data }</h1>
           <button onClick={Apple}>CLick me!</button>
        </div>
    )
}
