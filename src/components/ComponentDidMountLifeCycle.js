import React from 'react'

class ComponentDidMountLifeCycle extends React.Component {

    constructor() {
        super();   // is called beacuse when we use this keyword then problem will 
        // not occur as it extracts the properties from  (React.component)

        //   console.warn('constructor')
        this.state = {
            name: 'anil'
        }
    }

    componentDidMount() {
        console.warn('componentDidMount')
    }
    render() {
        console.warn('render')

        return (
            <div>
                <h1>ComponentDidMountLifeCycle</h1>
                <h2>Component Did Mount {this.state.name}</h2>
                <button onClick={() => { this.setState({ name: 'sidhu' }) }}>Update name</button>
            </div>
        )
    }
}

export default ComponentDidMountLifeCycle