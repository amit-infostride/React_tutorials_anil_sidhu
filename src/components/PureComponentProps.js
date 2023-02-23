


import React, { PureComponent } from 'react'

class PureComponentProps extends PureComponent {
 

    render() {
        console.warn('PureComponentProps check- rerendering')
        return (
            <div>
                <h1>PureComponentProps {this.props.count}</h1>
            </div>
        )
    }

}

export default PureComponentProps
 
 