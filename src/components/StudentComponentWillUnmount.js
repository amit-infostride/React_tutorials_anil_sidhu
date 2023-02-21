import React from 'react'

class StudentComponentWillUnmount extends React.Component {
    componentWillUnmount(){
        // alert('component will unmount called')
        console.warn('component will unmount called')
    }

    render(){
        return(
            <div>
          <h1> Student Component will Unmount</h1>
            </div>
        )
    }

}
export default StudentComponentWillUnmount ;

 