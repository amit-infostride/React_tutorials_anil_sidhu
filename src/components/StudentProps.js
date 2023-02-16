import React, { useState } from 'react'

const StudentProps = (props) => {

  const [name, setName] = useState('Anil')
  function updateData() {
    setName('sidhu')
  }

  // console.log(props.name );
  return (
    <div style={{ backgroundColor: 'skyblue', margin: 10 }}>

      {/* Props */}
      {/* <h1>hello {props.name}</h1> */}
      {/* <h2>Email : {props.email}</h2> */}
      {/* <h4>Adress : {props.other.address}</h4> */}



      {/* // props se name change  */}
      <h1>{name}</h1>
      <button onClick={updateData}>Update Name</button>

    </div> 
  )
}

export default StudentProps