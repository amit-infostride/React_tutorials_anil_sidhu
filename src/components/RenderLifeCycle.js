
//++++++++++++++++++++++   {/* Render life cycle prps   pe update  */}++++++++++

// import React from 'react'

//  class RenderLifeCycle extends React.Component{
//     render()
//     {
//         console.warn('Render Method',this.props)
//         return(
//             <div>
//             <h1>User Component {this.props.name}</h1>
//             </div>
//         )
//     }
//  }

//  export default RenderLifeCycle   

// +++++++++++++      {/* Render life cycle state pe update  */}++++++++++++++++++++++++++


import React from 'react'

class RenderLifeCycle extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'anil@test.com'
        }
    }
    render() {
        console.warn('Render Method', this.state.email)
        return (
            <div>
                <h1>User Component</h1>
                <button onClick={() => this.setState({ email: 'sidhu@test.com' })}> Update email address</button>
            </div>
        )
    }
}

export default RenderLifeCycle





