import React, { useState, useEffect } from 'react';

export default () => {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(async (response) => {
                const result = await response.json();
                const userArray = result.data;
                setUsers(userArray);
                setLoading(false);
            });
    });

    if (loading) {
        return (<div>Loading</div>);
    }
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>You clicked {count} times</p>
            <ul>
                {users.map(user => (
                    <li>{user.first_name}</li>
                ))}
            </ul>
        </div>
    );
};
