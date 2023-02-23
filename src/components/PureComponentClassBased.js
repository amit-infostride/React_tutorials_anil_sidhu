// import React, { PureComponent } from 'react'

// class PureComponentClassBased extends PureComponent {

//     constructor() {
//         super();
//         this.state = {
//             count: 1
//         }
//     }
//     render() {
//         console.warn('check- rerendering')
//         return (
//             <div>
//                 <h1>PureComponent {this.state.count}</h1>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>Update Count </button> 
//                 {/* above line without pure componnet  */}
//                 <button onClick={() => this.setState({ count:1 })}>Update Count </button>

//             </div>
//         )

//     }

// }

// export default PureComponentClassBased

// pure compomnet is a feature in react we can import from react
// used in class compponent  but in function component useMemo hook is used
//  pure component is used to stop the re-rendering of the component 
// pure component check that in previous state and new state  name is same or different  if same is there it will not re-render

// above code re-render the componnet again and again  see in console   console.warn('check- rerendering')
// and  on click the state of the component is same but the componnet is re -render when click the buttton again and again
// to remove this pure component is introduced  
// import this     import React,{PureComponent} from 'react'
// above code for classComponenet



// ------------------------------------
// pure componenet props

import React from 'react'
import PureComponentProps from './PureComponentProps';

class PureComponentClassBased extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    render() {
        console.warn('check- rerendering')
        return (
            <div>
                <h1>PureComponent  </h1>
                <button onClick={() => this.setState({ count: 1 })}>Update Count </button>
                <PureComponentProps count={this.state.count} />
            </div>
        )

    }
}

export default PureComponentClassBased

