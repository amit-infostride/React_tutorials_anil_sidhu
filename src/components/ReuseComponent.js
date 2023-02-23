import React from 'react'
import Users2 from './Users2'
 

const ReuseComponent = () => {
    const users = [
        { name: 'amit', email: 'amit@gmail.com', contact: 800 },
        { name: 'sidhu', email: 'sidhu@gmail.com', contact: 111 },
        { name: 'sam', email: 'sam @gmail.com', contact: 222 },
        { name: 'peter', email: 'peter @gmail.com', contact: 333 }
    ]
    return (
        <div>
            <h1>ReuseComponent</h1>
            
            {
                users.map((item,i)=>
                <Users2  data ={item}/>
                )
            }



        </div>
    )
}

export default ReuseComponent


// made  users2.js file 