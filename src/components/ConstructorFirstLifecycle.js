import React from 'react'


class ConstructorFirstLifecycle extends React.Component{
    constructor()
    {
        super();
        this.state={
            data:"anil"
        }
    }
    render(){
        return (
           
            <h1>Hello World {this.state.data}</h1>
          )
        }
    }
  

export default ConstructorFirstLifecycle