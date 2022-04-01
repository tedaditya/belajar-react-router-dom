import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => resp.json())
            .then((data) => {
                console.log("data", data);
                setUsers(data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleGoToDetail = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.name} | <button onClick={() => handleGoToDetail(user.id)}>go to detail</button></li>
                })}
            </ul>
        </div>
    )
}

export default Home;