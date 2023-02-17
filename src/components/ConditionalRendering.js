import React, { useState } from 'react'

const ConditionalRendering = () => {

            //   {/* if else condition */}
    // const [loggedIn, setLoggedIn] = useState(false)

    //    {/* if else if condition */}
    const [loggedIn, setLoggedIn] = useState(1)

    return (
        <div>
            <h1>ConditionalRendering</h1>
            {/* if else condition */}
            {/* {loggedIn ? <h1>Welcome Anil</h1> : <h1>Welcome Guest</h1>} */}
            {/* if else if condition */}
            {loggedIn == 1 ? <h1>Welcome user 1</h1> : loggedIn == 2 ? <h1>Welcome user 2</h1> : <h1>Welcome user 3</h1>}

        </div>
    )
}

export default ConditionalRendering