import React from 'react'
import { Table } from 'react-bootstrap'

const ListWithBootstrapWithUniqueKey = () => {



    const users = [
        { name: 'amit', email: 'amit@gmail.com', contact: 800 },
        { name: 'sidhu', email: 'sidhu@gmail.com', contact: 111 },
        { name: 'sam', email: 'sam @gmail.com', contact: 111 },
        { name: 'peter', email: 'peter @gmail.com', contact: 333 }
    ]
    return (
        <div>
            <h1>ListWithBootstrapWithUniqueKey</h1>
            <Table striped variant="dark">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Contact</td>
                        <td>Email</td>

                    </tr>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ListWithBootstrapWithUniqueKey


// agar koi specific value diklhai hai to conditon laga sakte hai jese 333 kitni bar table mein 
// repeat ho raha hai sirf vo print hogaa

// item.contact === '333' ?
// <tr key={i}>
//     <td>{item.name}</td>
//     <td>{item.email}</td>
//     <td>{item.contact}</td>
// </tr> : null 
