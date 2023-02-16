import React, { useState } from 'react'

const GetInputBoxValue = () => {


            //  {/* button ke click pe value  */}

    const [print, setPrint] = useState(false)
    const [data, setData] = useState(null)

    function getData(event) {
        // console.warn(event.target.value);
        setData(event.target.value)
        setPrint(false)     // this line is used to empty text box
    }

    // {/* -------Onchange pe value------  */}

    // const [data, setData] = useState(null)
    // function getData(event) {
    // console.warn(event.target.value);
    //     setData(event.target.value)
    // }

    return (
        <div>

            {/* Onchange pe value  */}
            {/* <h1>GetInputBoxValue</h1>
            <h2>{data}</h2>
            <input type=" text" onChange={getData} /> */}



            {/* button ke click pe value  */}
          {
                print ? <h2>{data}</h2> : null
            }
            <input type=" text" onChange={getData} />
            <button onClick={() => setPrint(true)}>Print Data</button>

        </div>



    )
}

export default GetInputBoxValue