import React, { createRef } from 'react'

class RefClassBased extends React.Component {
    constructor() {
        super()
        this.inputRef = createRef()
    }
    componentDidMount() {
        // console.warn(this.inputRef.current.value = 1000)
    }

    getVal() {
        console.warn(this.inputRef.current.value)
        this.inputRef.current.style.color='red'
        this.inputRef.current.style.backgroundColor='black'
    }

    render() {
        return (
            <div>
                <h1>RefClassBased</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getVal()}>Check Ref</button>
            </div>
        )
    }
}

export default RefClassBased


// react says thata we should use less ref beacuse it directly update dom
// ref is used in emergency 
// ref directly manipulate dom
// eg form ke andar validation, value get ,color change ,background color change , focus 
// also us ke andar ref is used. 