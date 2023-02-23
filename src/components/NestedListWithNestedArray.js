import React from 'react'
import { Table } from 'react-bootstrap'

const NestedListWithNestedArray = () => {

    const users = [
        {
            name: 'amit', email: 'amit@gmail.com', address: [
                { Hn: "10", city: 'noida', country: "India" },
                { Hn: "34", city: 'gurgaon', country: "India" },
                { Hn: "43", city: 'delhi', country: "India" },
                { Hn: "90", city: 'pune', country: "India" }
            ]
        },
        {
            name: 'sidhu', email: 'sidhu@gmail.com', address: [
                { Hn: "10", city: 'xyz', country: "India" },
                { Hn: "34", city: 'new', country: "India" },
                { Hn: "43", city: 'kerla', country: "India" },
                { Hn: "90", city: 'pune', country: "India" }
            ]
        },
        {
            name: 'sam', email: 'sam @gmail.com', address: [
                { Hn: "10", city: 'noida', country: "India" },
                { Hn: "34", city: 'abxc', country: "India" },
                { Hn: "43", city: 'xyz', country: "India" },
                { Hn: "90", city: 'def', country: "India" }
            ]
        },
        {
            name: 'peter', email: 'peter @gmail.com', address: [
                { Hn: "10", city: 'noida', country: "India" },
                { Hn: "34", city: 'gurgaon', country: "India" },
                { Hn: "43", city: 'delhi', country: "India" },
                { Hn: "90", city: 'pune', country: "India" }
            ]
        }
    ]



    return (
        <div>
            <h1>NestedListWithNestedArray</h1>
            <Table variant="dark" striped>
                <tbody>
                    <tr>
                        <td>S.No</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>

                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                 <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>

                                <td>
                                    <Table variant="dark" striped>
                                        {

                                            item.address.map((data, i) =>
                                                <tr key={i}>
                                                    <td>{data.Hn}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.country}</td>
                                                </tr>
                                            )
                                        }
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default NestedListWithNestedArray