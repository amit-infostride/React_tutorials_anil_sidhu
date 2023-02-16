import React, { useState } from 'react'

function State() {

    //   -----------counter ----------
    const [data, setData] = useState(0)


    // --------State---------------

    // const [data, setData] = useState('anil') //use State ke perameters ko bhar nikal rahe hai  destructuring se
    // function updateData() {
    //     setData('sidhu')
    // }
    // console.warn('_______________')

    // --------State---------------


    // -------------------------------------
    // let data = 'anil'
    // function updateData(){
    //     data= 'sidhu';
    //     alert(data)
    // }
    // console.warn('_______');
    // -------------------------------------

    return (
        <div>
            <h1>State in React</h1>

            {/* // -------------Counter---------- */}
            <h2>{data}</h2>
            <button onClick={() => setData(data + 1)}>Counter Incremenet</button>
            <button onClick={() => setData(data - 1)}>Counter dec</button>
            {/* // -------------Counter---------- */}



            {/* // --------State--------------- */}
            {/* <h2>{data}</h2> */}
            {/* <button onClick={updateData}>Update Data</button> */}
            {/* // --------State--------------- */}

            {/* ------------------- */}
            {/* <h2>{data}</h2> */}
            {/* <button onClick={updateData}>Update Data</button> */}
            {/* --------------------------- */}
        </div>
    )
}

export default State
