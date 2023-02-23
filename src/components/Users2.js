import React from 'react'

const Users2 = (props) => {
  return (
    <div>
    {/* <h1>Users2  component </h1> */}
       <span>{props.data.name}</span>
       <span>{props.data.email}</span>
       <span>{props.data.address}</span>
     
    </div>
  )
}

export default Users2