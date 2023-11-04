import React from 'react'

interface User {
    id: string;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 10 } });
    const users: User[] = await res.json();
    return (
        <table className='table table-zebra'>
            <thead>
                <th>Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default UsersPage
