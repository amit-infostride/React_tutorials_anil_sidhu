import React, { useState } from 'react'

const BasicFormValidation = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    function LoginHandle(event) {
        event.preventDefault()
        alert('hello')
    }

   function userHandler(event){
        console.warn(event.target.value.length)
    }
    return (
        <div>
            <h1>BasicFormValidation</h1>
            <h2>Login</h2>
            <form onSubmit={LoginHandle}>
                <input type="text" placeholder='Enter User Id' onChange={userHandler} /> <br /> <br />
                <input type="text" placeholder='Enter User password' />  <br /> <br />
                <button type='submit'>Login</button>
            </form>


        </div>
    )
}

export default BasicFormValidation