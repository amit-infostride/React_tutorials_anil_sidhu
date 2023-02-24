import React,{forwardRef} from 'react'

const ForwardRef2 = (props,ref) => {
    return (
        <div>
            <h1>ForwardRef2</h1>
            <input type="text" ref={ref} />

        </div>
    )
}

export default forwardRef(ForwardRef2)