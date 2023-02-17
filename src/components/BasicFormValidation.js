import React, { useState } from 'react'

const BasicFormValidation = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState(false)
    const [userErr, setUserErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    function LoginHandle(event) {

       if(user.length<3||password.length<3){
        alert('correct type value')
       }
       else{
        alert('all good')
       }

        event.preventDefault()
        // alert('hello')
    }

    function userHandler(event) {
        let item = event.target.value;
        if (item.length < 3) {
            // console.warn('invalid') 
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
        console.warn(event.target.value.length)
    }
    function passHandler(event) {
        let item = event.target.value;
        if (item.length < 3) {
            // console.warn('invalid') 
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPassword(item)
        console.warn(event.target.value.length)
    }
    return (
        <div>
            <h1>BasicFormValidation</h1>
            <h2>Login</h2>
            <form onSubmit={LoginHandle}>
                <input type="text" placeholder='Enter User Id' onChange={userHandler} /> {userErr ? <span>User not valid</span> : ''}<br /> <br />
                <input type="password" placeholder='Enter User password' onChange={passHandler} />{passErr ? <span>User not valid</span> : ''} <br /> <br />
                <button type='submit'>Login</button>
            </form>


        </div>
    )
}

export default BasicFormValidation