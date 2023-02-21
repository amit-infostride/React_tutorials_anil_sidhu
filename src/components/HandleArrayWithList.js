import React from 'react'

const HandleArrayWithList = () => {

    // const students = ['anil', 'sidhu', 'sam', 'peter']

    const students=[
        {name:'amit',email:'amit@gmail.com',contact :800},
        {name:'sidhu',email:'sidhu@gmail.com',contact :111},
        {name:'sam',email:'sam @gmail.com',contact :222},
        {name:'peter',email:'peter @gmail.com',contact :333}
    ]
    //map  looping
    //  students.map((item)=>{
    // console.warn("my name is",item)
    //  })
    // 
    //  for(let i=0;i<students.length;i++)
    //  {
    // console.warn('in for loop My name is:',students[i])
    //  }

    // for iterating map is used in return but for loop is not supported in return
    return (
        <div>
            <h1>HandleArrayWithList</h1>
            <table border='1'> 
            <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                  </tr>
            {
                students.map((data)=>
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact }</td>
                  </tr>
                )
            }
            </table>

        </div>
    )
}

export default HandleArrayWithList