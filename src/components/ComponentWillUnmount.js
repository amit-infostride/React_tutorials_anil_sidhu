import React from 'react'
import StudentComponentWillUnmount from './StudentComponentWillUnmount';

class ComponentWillUnmount extends React.Component {

    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(
            <div>
          <h1>Component will Unmount</h1>
     
          {
            this.state.show ?      <StudentComponentWillUnmount /> : <h1>Child Component Removed</h1>
          }
          <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Compononent</button>
            </div>
        )
    }

}
export default ComponentWillUnmount ;

// student component is made for toggle