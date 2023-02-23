import React from 'react'

const ChildToParentDataTransfer2 = (props) => {

    const data = 'anil@test.com'
    return (
        <div>
            <h1>ChildToParentDataTransfer2</h1>

            <h2>Username : </h2>
            <button onClick={() => props.alert(data)}>CLick ME !</button>
        </div>


    )
}

export default ChildToParentDataTransfer2



// data is send to parent with this line 

// const  data='anil sidhu'

// {/* <button onClick={()=>props.alert(data)}> CLick ME !</button> */}

// then it is recieve in childtoparentTransfer.js





