import React from 'react'
import ChildToParentDataTransfer2 from './ChildToParentDataTransfer2'

const ChildToParentDataTransfer = () => {

    function parentAlert(data ){
        alert(data)
    }
 
  return (
    <div>
      <h1>ChildToParentDataTransfer</h1>
      <ChildToParentDataTransfer2  alert={parentAlert} />

    </div>
  )
}

export default ChildToParentDataTransfer


// data is received from ChildToParentDataTransfer2 

// function parentAlert(data ){           // data is mentioned in parameter and in alert (data)  is mentioned 
//     alert(data)
// }